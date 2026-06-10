
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const yearElement = document.querySelector('#year');
const portfolioData = window.portfolioData;

if (yearElement) yearElement.textContent = new Date().getFullYear();

function escapeHtml(value){
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&#039;'
  }[char]));
}

function tagList(items){
  return (items || []).map(item => `<span>${escapeHtml(item)}</span>`).join('');
}

let __pid = 0;
function projectCard(project){
  // Build the rotating image set (no duplicates; main image included once)
  const imgs = (project.images && project.images.length ? project.images : (project.image ? [project.image] : []));
  const uniq = [...new Set(imgs)];
  const id = 'pj' + (++__pid);
  const slides = uniq.map((src,i) =>
    `<img class="slide${i===0?' active':''}" src="${escapeHtml(src)}" alt="${escapeHtml(project.title)} image ${i+1}" loading="lazy">`
  ).join('');
  const dataImgs = encodeURIComponent(JSON.stringify(uniq));
  const dataVids = encodeURIComponent(JSON.stringify(project.videos || []));
  const hasImages = uniq.length > 0;
  const hasVideos = (project.videos || []).some(v => v && v.youtube && !String(v.youtube).includes('PASTE_'));
  const hasDoc = !!project.doc;

  const btn = (type,label,extra='') =>
    `<button class="media-btn" data-media="${type}" data-card="${id}"${extra}>${label}</button>`;

  return `<article class="project-card" data-category="${escapeHtml(project.filter || project.category || '')}">
  <div class="card-slideshow" id="${id}" data-images="${dataImgs}" data-videos="${dataVids}" data-title="${escapeHtml(project.title)}"${hasDoc?` data-doc="${escapeHtml(project.doc)}"`:''}>
    ${slides || `<img class="slide active" src="" alt="">`}
  </div>
  <div class="project-card-body">
    <p class="eyebrow">${escapeHtml(project.category)}</p>
    <h3>${escapeHtml(project.title)}</h3>
    <p>${escapeHtml(project.summary)}</p>
    <div class="tag-row">${tagList(project.tools)}</div>
    <div class="media-btn-row">
      ${hasImages ? btn('images','🖼 Images') : ''}
      ${hasVideos ? btn('videos','▶ Videos') : ''}
      ${hasDoc ? btn('document','📄 Document') : ''}
    </div>
    <div class="card-links">
      <a class="text-link" href="${escapeHtml(project.page || 'projects.html')}">View project details</a>
    </div>
  </div>
</article>`;
}

function youTubeId(url){
  if (!url) return '';
  const s = String(url).trim();
  // Accept raw 11-char IDs or any common YouTube URL form
  if (/^[A-Za-z0-9_-]{11}$/.test(s)) return s;
  const m = s.match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : '';
}

function galleryMedia(item){
  const id = youTubeId(item.youtube);
  if (id) {
    const poster = item.image ? escapeHtml(item.image) : `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    const title = escapeHtml(item.alt || item.title || 'Project video');
    // Lite YouTube embed: shows thumbnail, loads privacy-friendly player on click
    return `<div class="yt-lite" data-yt="${id}" role="button" tabindex="0" aria-label="Play video: ${title}" style="background-image:url('${poster}')"><button class="yt-play" aria-hidden="true"></button></div>`;
  }
  if (item.video) {
    const poster = item.image ? ` poster="${escapeHtml(item.image)}"` : '';
    return `<video class="gallery-video" controls preload="metadata"${poster}><source src="${escapeHtml(item.video)}" type="video/mp4">Your browser does not support the video tag.</video>`;
  }
  return `<img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt || item.title)}" loading="lazy" decoding="async">`;
}

function initYouTubeLite(){
  document.querySelectorAll('.yt-lite').forEach(el => {
    const load = () => {
      const id = el.dataset.yt;
      if (!id || el.dataset.loaded) return;
      el.dataset.loaded = '1';
      const iframe = document.createElement('iframe');
      iframe.className = 'gallery-video';
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('title', 'YouTube video player');
      iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
      el.replaceWith(iframe);
    };
    el.addEventListener('click', load);
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); load(); } });
  });
}

function renderEditableContent(){
  if (!portfolioData) return;
  const { profile } = portfolioData;

  const heroName = document.querySelector('.home-hero h1');
  if (heroName && profile){
    heroName.textContent = profile.name;
    const status = document.querySelector('.home-hero .status-pill');
    const credential = document.querySelector('.hero-credential');
    const title = document.querySelector('.hero-title');
    const subtitle = document.querySelector('.hero-subtitle');
    const summary = document.querySelector('.hero-summary');
    const photo = document.querySelector('.hero-photo');
    if (status) status.innerHTML = `<span class="pulse-dot"></span>${escapeHtml(profile.status)}`;
    if (credential) credential.textContent = profile.credential;
    if (title) title.textContent = profile.role;
    if (subtitle) subtitle.textContent = profile.subtitle;
    if (summary) summary.textContent = profile.summary;
    if (photo) photo.src = profile.photo;
  }

  const stats = document.querySelector('[data-render="stats"]');
  if (stats) stats.innerHTML = (portfolioData.stats || []).map(item => `<div><strong>${escapeHtml(item.value)}</strong><span>${escapeHtml(item.label)}</span></div>`).join('');

  const brief = portfolioData.recruiterQuickView || {};
  const briefTarget = document.querySelector('[data-render="brief-target"]');
  if (briefTarget) briefTarget.textContent = brief.target || '';

  const briefStrengths = document.querySelector('[data-render="brief-strengths"]');
  if (briefStrengths) briefStrengths.innerHTML = tagList(brief.strengths || []);

  const briefEvidence = document.querySelector('[data-render="brief-evidence"]');
  if (briefEvidence) {
    briefEvidence.innerHTML = (brief.evidence || []).map(item => `<article><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong></article>`).join('');
  }

  const briefLinks = document.querySelector('[data-render="brief-links"]');
  if (briefLinks) {
    briefLinks.innerHTML = (brief.links || []).map((link, index) => `<a class="button ${index === 0 ? 'primary' : 'secondary'}" href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>`).join('');
  }

  const expertise = document.querySelector('[data-render="expertise"]');
  if (expertise) expertise.innerHTML = (portfolioData.expertise || []).map(item => `<article class="glass-card"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p></article>`).join('');

  const featured = document.querySelector('[data-render="featured-projects"]');
  if (featured) featured.innerHTML = (portfolioData.projects || []).filter(project => project.featured).map(projectCard).join('');

  const projects = document.querySelector('[data-render="projects"]');
  if (projects) projects.innerHTML = (portfolioData.projects || []).map(projectCard).join('');

  const toolMap = document.querySelector('[data-render="tool-map"]');
  if (toolMap) toolMap.innerHTML = `<strong>Tool map:</strong>${tagList(portfolioData.skills?.toolMap)}`;

  const skillGrid = document.querySelector('[data-render="skills"]');
  if (skillGrid) {
    skillGrid.innerHTML = (portfolioData.skills?.groups || []).map(group => `<article class="glass-card skill-panel"><h2>${escapeHtml(group.title)}</h2><div class="tool-list">${(group.tools || []).map(tool => `<div class="tool-item"><strong>${escapeHtml(tool[0])}</strong><span>${escapeHtml(tool[1])}</span></div>`).join('')}</div></article>`).join('');
  }

  const strengths = document.querySelector('[data-render="strengths"]');
  if (strengths) strengths.innerHTML = tagList(portfolioData.skills?.strengths);

  const machines = document.querySelector('[data-render="machines"]');
  if (machines) {
    machines.innerHTML = (portfolioData.machines || []).map(machine => `<a class="machine-card" href="machine-detail.html?machine=${encodeURIComponent(machine.slug || machine.title)}" target="_blank" rel="noopener noreferrer"><img src="${escapeHtml(machine.image)}" alt="${escapeHtml(machine.title)}"><div><h3>${escapeHtml(machine.title)}</h3><p>${escapeHtml(machine.description || '')}</p><p><strong>Experience:</strong> ${escapeHtml(machine.experience)}</p><p><strong>Technologies:</strong> ${escapeHtml(machine.technologies)}</p><span class="text-link">Open machine notes</span></div></a>`).join('');
  }

  const industrialTech = document.querySelector('[data-render="industrial-technologies"]');
  if (industrialTech) industrialTech.innerHTML = tagList(portfolioData.industrialTechnologies);

  const gallery = document.querySelector('[data-render="gallery"]');
  if (gallery) {
    gallery.innerHTML = (portfolioData.gallery || []).map(item => `<article class="gallery-item" data-category="${escapeHtml(item.filter)}">${galleryMedia(item)}<div><p class="eyebrow">${escapeHtml(item.category)}</p><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p></div></article>`).join('');
    initYouTubeLite();
  }

  const certifications = document.querySelector('[data-render="certifications"]');
  if (certifications) {
    certifications.innerHTML = (portfolioData.certifications || []).map(cert => `<article class="glass-card cert-card"><p class="eyebrow">${escapeHtml(cert.issuer)}</p><h3>${escapeHtml(cert.name)}</h3><p>${escapeHtml(cert.detail)}</p>${cert.file ? `<a class="text-link" href="${escapeHtml(cert.file)}" target="_blank" rel="noopener noreferrer">View certificate</a>` : ''}</article>`).join('');
  }

  const contactList = document.querySelector('[data-render="contact"]');
  if (contactList && profile) {
    contactList.innerHTML = `<li><span>Email</span><a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a></li><li><span>LinkedIn</span><a href="${escapeHtml(profile.linkedin)}" target="_blank" rel="noopener noreferrer">${escapeHtml(profile.linkedinLabel)}</a></li><li><span>WhatsApp</span><a href="${escapeHtml(profile.whatsapp)}" target="_blank" rel="noopener noreferrer">${escapeHtml(profile.whatsappLabel)}</a></li><li><span>Location</span><strong>${escapeHtml(profile.location)}</strong></li>`;
  }

  const availableFor = document.querySelector('[data-render="available-for"]');
  if (availableFor) availableFor.innerHTML = tagList(portfolioData.availableFor);

  const machineDetail = document.querySelector('[data-render="machine-detail"]');
  if (machineDetail) {
    const slug = new URLSearchParams(window.location.search).get('machine');
    const machine = (portfolioData.machines || []).find(item => item.slug === slug) || portfolioData.machines?.[0];
    if (machine) {
      document.title = `${machine.title} | Muditha Priyasad`;
      machineDetail.innerHTML = `<section class="project-detail-hero"><div><p class="eyebrow">Machine Experience</p><h1>${escapeHtml(machine.title)}</h1><p>${escapeHtml(machine.description)}</p><div class="tag-row">${tagList(String(machine.technologies || '').split(',').map(item => item.trim()).filter(Boolean))}</div></div><img src="${escapeHtml(machine.image)}" alt="${escapeHtml(machine.title)}"></section>
      <section class="detail-layout"><article class="glass-card detail-card"><h2>Machine Description</h2><p>${escapeHtml(machine.description)}</p></article><article class="glass-card detail-card"><h2>Experience</h2><p>${escapeHtml(machine.experience)}</p></article><article class="glass-card detail-card"><h2>Technologies / Systems</h2><p>${escapeHtml(machine.technologies)}</p></article><article class="glass-card detail-card"><h2>My Contribution</h2><p>${escapeHtml(machine.contribution || 'Add your public-safe contribution here.')}</p></article><article class="glass-card detail-card"><h2>Evidence Source</h2><p>${escapeHtml(machine.sourceNote || 'Public-safe image or simplified placeholder. Replace with a cropped/blurred public-safe image if needed.')}</p></article><article class="glass-card detail-card"><h2>Privacy Note</h2><p>Keep this page general. Do not add PLC programs, wiring diagrams, exact dimensions, customer names, factory layouts, internal production data or full machine drawings.</p></article></section>`;
    }
  }

  const projectDetail = document.querySelector('[data-render="project-detail"]');
  if (projectDetail) {
    const slug = new URLSearchParams(window.location.search).get('project');
    const project = (portfolioData.projects || []).find(item => item.slug === slug) || portfolioData.projects?.find(item => item.details) || portfolioData.projects?.[0];
    if (project) {
      const details = project.details || {};
      const tools = details.tools || project.tools || [];
      document.title = `${project.title} | Muditha Priyasad`;
      projectDetail.innerHTML = `<section class="project-detail-hero"><div><p class="eyebrow">${escapeHtml(project.category || 'Project Case Study')}</p><h1>${escapeHtml(project.title)}</h1><p>${escapeHtml(project.summary)}</p><div class="tag-row">${tagList(tools)}</div>${project.doc ? `<p style="margin-top:1rem"><a class="text-link doc-link" href="${escapeHtml(project.doc)}" target="_blank" rel="noopener noreferrer">📄 View full project document (PDF)</a></p>` : ''}</div><img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} public-safe project evidence"></section>
      <section class="detail-layout"><article class="glass-card detail-card"><h2>Problem</h2><p>${escapeHtml(details.problem || project.summary)}</p></article><article class="glass-card detail-card"><h2>My Role</h2><p>${escapeHtml(details.role || 'Public-safe role summary to be edited in data/portfolio-data.js.')}</p></article><article class="glass-card detail-card"><h2>Engineering Approach</h2><p>${escapeHtml(details.approach || 'Add the public-safe engineering approach here.')}</p></article><article class="glass-card detail-card"><h2>Solution</h2><p>${escapeHtml(details.solution || 'Add the public-safe solution summary here.')}</p></article><article class="glass-card detail-card"><h2>Result</h2><p>${escapeHtml(details.result || 'Add a simplified result without production data or confidential numbers.')}</p></article><article class="glass-card detail-card"><h2>Tools Used</h2><div class="tag-row">${tagList(tools)}</div></article><article class="glass-card detail-card"><h2>Safety / Confidentiality Note</h2><p>${escapeHtml(details.note || 'This page uses only general descriptions and public-safe media. Do not add PLC programs, HMI source files, wiring diagrams, exact CAD dimensions, customer names, supplier names, factory layouts, production data, internal financial data, full machine drawings or source code from company projects.')}</p></article><article class="glass-card detail-card"><h2>Edit This Page</h2><p>Update this project in data/portfolio-data.js. Replace images with cropped, blurred or rendered public-safe media only.</p></article></section>`;
    }
  }
}

function closeMenu(){
  if (!navMenu || !navToggle) return;
  navMenu.classList.remove('open');
  navToggle.setAttribute('aria-expanded','false');
  navToggle.setAttribute('aria-label','Open navigation menu');
}

if (navToggle && navMenu){
  navToggle.addEventListener('click',()=>{
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded',String(isOpen));
    navToggle.setAttribute('aria-label',isOpen?'Close navigation menu':'Open navigation menu');
  });
}
navLinks.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown',event=>{ if(event.key==='Escape') closeMenu(); });

function setupFilters(containerSelector){
  const container = document.querySelector(containerSelector);
  if (!container) return;
  const buttons = document.querySelectorAll('.filter-btn');
  const items = Array.from(container.children);
  buttons.forEach(button=>{
    button.addEventListener('click',()=>{
      const filter = button.dataset.filter || 'all';
      buttons.forEach(btn=>btn.classList.toggle('active', btn === button));
      items.forEach(item=>{
        const cats = (item.dataset.category || '').toLowerCase();
        const show = filter === 'all' || cats.includes(filter);
        item.classList.toggle('hidden', !show);
      });
    });
  });
}

renderEditableContent();
setupFilters('#projectGrid');
setupFilters('#galleryGrid');

/* ====== Project card slideshow (auto-rotate, looping) ====== */
function initCardSlideshows(){
  document.querySelectorAll('.card-slideshow').forEach(box => {
    const slides = box.querySelectorAll('.slide');
    if (slides.length < 2) return;            // nothing to rotate
    if (box.dataset.rotating) return;
    box.dataset.rotating = '1';
    let idx = 0;
    setInterval(() => {
      slides[idx].classList.remove('active');
      idx = (idx + 1) % slides.length;        // loop
      slides[idx].classList.add('active');
    }, 2600);
  });
}

/* ====== Lightbox overlay for Images / Videos / Document ====== */
function ensureLightbox(){
  let lb = document.getElementById('lightbox');
  if (lb) return lb;
  lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.className = 'lightbox';
  lb.innerHTML = `
    <div class="lb-backdrop" data-close="1"></div>
    <div class="lb-dialog" role="dialog" aria-modal="true">
      <button class="lb-close" aria-label="Close" data-close="1">×</button>
      <div class="lb-content"></div>
      <button class="lb-nav lb-prev" aria-label="Previous">‹</button>
      <button class="lb-nav lb-next" aria-label="Next">›</button>
    </div>`;
  document.body.appendChild(lb);
  lb.addEventListener('click', e => { if (e.target.dataset.close) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') lbStep(1);
    if (e.key === 'ArrowLeft') lbStep(-1);
  });
  lb.querySelector('.lb-next').addEventListener('click', () => lbStep(1));
  lb.querySelector('.lb-prev').addEventListener('click', () => lbStep(-1));
  return lb;
}
let lbItems = [], lbIndex = 0, lbMode = 'images';
function closeLightbox(){ const lb=document.getElementById('lightbox'); if(lb){lb.classList.remove('open'); lb.querySelector('.lb-content').innerHTML='';} document.body.style.overflow=''; }
function lbRender(){
  const lb = document.getElementById('lightbox');
  const c = lb.querySelector('.lb-content');
  const nav = lb.querySelectorAll('.lb-nav');
  nav.forEach(n => n.style.display = (lbItems.length > 1 && lbMode !== 'document') ? 'flex' : 'none');
  const item = lbItems[lbIndex];
  if (lbMode === 'images'){
    c.innerHTML = `<img class="lb-img" src="${item}" alt="Project image ${lbIndex+1}">`;
  } else if (lbMode === 'videos'){
    const id = youTubeId(item.youtube);
    c.innerHTML = id
      ? `<div class="lb-video"><iframe src="https://www.youtube-nocookie.com/embed/${id}?rel=0&autoplay=1" title="${escapeHtml(item.title||'Video')}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`
      : `<p class="lb-msg">This video hasn't been added yet.</p>`;
  } else if (lbMode === 'document'){
    c.innerHTML = `<div class="lb-doc"><iframe src="${item}" title="Project document"></iframe><a class="lb-doc-open" href="${item}" target="_blank" rel="noopener noreferrer">Open / Download PDF ↗</a></div>`;
  }
}
function lbStep(dir){ if(!lbItems.length) return; lbIndex=(lbIndex+dir+lbItems.length)%lbItems.length; lbRender(); }
function openLightbox(mode, items, start=0){
  if(!items || !items.length) return;
  ensureLightbox();
  lbMode=mode; lbItems=items; lbIndex=start;
  const lb=document.getElementById('lightbox');
  lb.classList.add('open'); document.body.style.overflow='hidden';
  lbRender();
}

function initMediaButtons(){
  document.querySelectorAll('.media-btn').forEach(btn => {
    if (btn.dataset.bound) return; btn.dataset.bound='1';
    btn.addEventListener('click', () => {
      const box = document.getElementById(btn.dataset.card);
      if (!box) return;
      const type = btn.dataset.media;
      if (type === 'images'){
        const imgs = JSON.parse(decodeURIComponent(box.dataset.images || '[]'));
        openLightbox('images', imgs, 0);
      } else if (type === 'videos'){
        const vids = JSON.parse(decodeURIComponent(box.dataset.videos || '[]'));
        openLightbox('videos', vids, 0);
      } else if (type === 'document'){
        openLightbox('document', [box.dataset.doc], 0);
      }
    });
  });
}

function initProjectMedia(){ initCardSlideshows(); initMediaButtons(); }
initProjectMedia();

/* ====== Sticky contact bar (all pages) ====== */
function initContactBar(){
  if (document.getElementById('contactBar')) return;
  const pf = (window.portfolioData && window.portfolioData.profile) || {};
  const links = [];
  if (pf.email) links.push(`<a href="mailto:${pf.email}" aria-label="Email"><span class="cb-ico">✉</span><span class="cb-txt">Email</span></a>`);
  const phoneHref = pf.phoneHref || (pf.phone ? 'tel:' + pf.phone.replace(/[^0-9+]/g,'') : '');
  if (phoneHref) links.push(`<a href="${phoneHref}" aria-label="Call"><span class="cb-ico">✆</span><span class="cb-txt">Call</span></a>`);
  if (pf.whatsapp) links.push(`<a href="${pf.whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><span class="cb-ico">💬</span><span class="cb-txt">WhatsApp</span></a>`);
  if (pf.linkedin) links.push(`<a href="${pf.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><span class="cb-ico">in</span><span class="cb-txt">LinkedIn</span></a>`);
  if (pf.github) links.push(`<a href="${pf.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><span class="cb-ico">⌂</span><span class="cb-txt">GitHub</span></a>`);
  const cv = pf.cv || 'assets/docs/Muditha-Priyasad-CV.pdf';
  links.push(`<a class="cb-cv" href="${cv}" download><span class="cb-ico">⬇</span><span class="cb-txt">CV</span></a>`);
  const bar = document.createElement('div');
  bar.id = 'contactBar';
  bar.className = 'contact-bar';
  bar.innerHTML = `<div class="cb-inner">${links.join('')}</div>`;
  document.body.appendChild(bar);
  document.body.classList.add('has-contact-bar');
}
initContactBar();

/* ====== Testimonials display + comment form ====== */
function renderTestimonials(){
  const wrap = document.querySelector('[data-render="testimonials"]');
  if (!wrap) return;
  const items = (window.portfolioData && window.portfolioData.testimonials) || [];
  if (!items.length){
    wrap.innerHTML = `<p class="testimonial-empty">No comments yet — be the first to leave one below.</p>`;
    return;
  }
  wrap.innerHTML = items.map(t => `
    <article class="glass-card testimonial-card">
      <p class="testimonial-msg">“${escapeHtml(t.message)}”</p>
      <p class="testimonial-by"><strong>${escapeHtml(t.name)}</strong>${t.role ? `<span>${escapeHtml(t.role)}</span>` : ''}${t.date ? `<small>${escapeHtml(t.date)}</small>` : ''}</p>
    </article>`).join('');
}

function initCommentForm(){
  const form = document.getElementById('commentForm');
  if (!form) return;
  const status = form.querySelector('.cf-status');
  const endpoint = (window.portfolioData && window.portfolioData.commentsEndpoint) || '';
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form._gotcha && form._gotcha.value) return;            // honeypot tripped
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.name || !data.role || !data.message){
      status.textContent = 'Please fill in your name, role and comment.';
      status.className = 'cf-status err';
      return;
    }
    if (!endpoint){
      status.innerHTML = 'Comment form is not connected yet. Please email <a href="mailto:muditha00@icloud.com">muditha00@icloud.com</a>.';
      status.className = 'cf-status err';
      return;
    }
    status.textContent = 'Sending…';
    status.className = 'cf-status';
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
      if (res.ok){
        form.reset();
        status.textContent = 'Thank you! Your comment was sent and will appear after I review it.';
        status.className = 'cf-status ok';
      } else {
        throw new Error('Submission failed');
      }
    } catch (err){
      status.innerHTML = 'Sorry, something went wrong. Please email <a href="mailto:muditha00@icloud.com">muditha00@icloud.com</a>.';
      status.className = 'cf-status err';
    }
  });
}

renderTestimonials();
initCommentForm();

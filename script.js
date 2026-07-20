
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
  const id = 'pj' + (++__pid);
  const vids = (project.videos || []).filter(v => v && v.youtube);
  const v0 = vids[0];
  const realLink = v0 && !String(v0.youtube).includes('PASTE_');
  const ytid = realLink ? youTubeId(v0.youtube) : '';
  const poster = ytid ? `https://i.ytimg.com/vi/${ytid}/hqdefault.jpg`
               : ((project.images || []).find(s => /\.(jpe?g|png|webp)$/i.test(s)) || '');
  const vidTitle = (v0 && v0.title) || project.title;
  const dataVids = encodeURIComponent(JSON.stringify(vids));
  // Thumbnail: real video -> opens lightbox; otherwise opens case study
  const fbk = ytid ? `https://i.ytimg.com/vi/${ytid}/mqdefault.jpg` : '';
  const thumbInner = poster
    ? `<img class="vt-img" src="${escapeHtml(poster)}" alt="${escapeHtml(vidTitle)}" loading="lazy" onerror="if(this.dataset.fb!=='1'&&'${fbk}'){this.dataset.fb='1';this.src='${fbk}';}else{this.style.display='none';}">`
    : `<div class="vt-ph"><span class="vt-ph-ico">▷</span><span class="vt-ph-txt">Video coming soon</span></div>`;
  const num = `<span class="vt-num">${id.replace('pj','')}</span>`;
  const playOverlay = `<span class="vt-play" aria-hidden="true"></span>`;
  const clickable = realLink
    ? `<button class="vt-thumb" data-vids="${dataVids}" aria-label="Play video: ${escapeHtml(vidTitle)}">${thumbInner}${playOverlay}${num}</button>`
    : `<a class="vt-thumb" href="${escapeHtml(project.page || 'projects.html')}" aria-label="${escapeHtml(project.title)} case study">${thumbInner}${playOverlay}${num}</a>`;
  return `<article class="video-card" data-category="${escapeHtml(project.filter || project.category || '')}">
    ${clickable}
    <div class="vc-body">
      <p class="eyebrow">${escapeHtml(project.category || '')}</p>
      <h3>${escapeHtml(project.title)}</h3>
      <a class="vc-cta" href="${escapeHtml(project.page || 'projects.html')}">View case study →</a>
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
      iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&playsinline=1`;
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
    // credential rendered statically as two lines in HTML
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
    skillGrid.innerHTML = (portfolioData.skills?.groups || []).map(group => `<article class="glass-card skill-panel"><div class="skill-head"><h2>${escapeHtml(group.title)}</h2>${group.level?`<span class="skill-level">${escapeHtml(group.level)}</span>`:''}</div><div class="skill-chips">${(group.tools || []).map(tool => `<span class="skill-chip" title="${escapeHtml(tool[1]||'')}">${escapeHtml(tool[0])}</span>`).join('')}</div></article>`).join('');
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
    certifications.innerHTML = (portfolioData.certifications || []).map(cert => {
      const thumb = cert.image
        ? `<button class="cert-thumb" data-cert-img="${escapeHtml(cert.image)}" aria-label="View ${escapeHtml(cert.name)} certificate"><img src="${escapeHtml(cert.image)}" alt="${escapeHtml(cert.name)} certificate" loading="lazy"></button>`
        : '';
      const link = cert.file
        ? `<a class="text-link" href="${escapeHtml(cert.file)}" target="_blank" rel="noopener noreferrer">View certificate (PDF)</a>`
        : '';
      return `<article class="glass-card cert-card">${thumb}<p class="eyebrow">${escapeHtml(cert.issuer)}</p><h3>${escapeHtml(cert.name)}</h3><p>${escapeHtml(cert.detail)}</p>${link}</article>`;
    }).join('');
    document.querySelectorAll('.cert-thumb').forEach(b => {
      if (b.dataset.bound) return; b.dataset.bound='1';
      b.addEventListener('click', () => openLightbox('certificates', [b.dataset.certImg], 0));
    });
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
    const project = (portfolioData.projects || []).find(item => item.slug === slug) || portfolioData.projects?.[0];
    if (project) {
      const tools = project.tools || [];
      document.title = `${project.title} | Muditha Priyasad`;
      const evidence = (project.images || []).some(s => /\.(jpe?g|png|webp)$/i.test(s)) || project.doc
        ? `<div class="tag-row">${(project.images||[]).filter(s=>/\.(jpe?g|png|webp)$/i.test(s)).length?'<span>Photos available</span>':''}${project.doc?'<span>Project document (PDF)</span>':''}</div>`
        : `<p>Public-safe photos, diagrams and project evidence are being prepared. Confidential factory details are not published.</p>`;
      const card = (h,b) => `<article class="glass-card detail-card"><h2>${h}</h2>${b}</article>`;
      projectDetail.innerHTML = `<section class="detail-head"><p class="eyebrow">${escapeHtml(project.category || 'Case Study')}</p><h1>${escapeHtml(project.title)}</h1><p class="detail-summary">${escapeHtml(project.summary||'')}</p><div class="tag-row">${tagList(tools)}</div>${project.doc ? `<p style="margin-top:.8rem"><a class="text-link doc-link" href="${escapeHtml(project.doc)}" target="_blank" rel="noopener noreferrer">View full project document (PDF)</a></p>` : ''}</section>
      <section class="detail-layout">
        ${card('Problem', `<p>${escapeHtml(project.problem || project.oneLineProblem || project.summary || '')}</p>`)}
        ${card('My Role', `<p>${escapeHtml(project.role || project.contribution || '')}</p>`)}
        ${card('Engineering Method', `<p>${escapeHtml(project.method || '')}</p>`)}
        ${card('Tools / Technologies', `<div class="tag-row">${tagList(tools)}</div>`)}
        ${card('Result / Impact', `<p>${escapeHtml(project.result || project.impact || '')}</p>`)}
        ${card('Evidence', evidence)}
      </section>
      <section class="note-panel"><p><strong>Confidentiality:</strong> Public-safe summary only. Detailed technical approach can be discussed during interviews while respecting confidentiality.</p></section>
      <section class="page-nav"><a class="button secondary" href="projects.html">&larr; All projects</a><a class="button secondary" href="cv-contact.html">Contact</a></section>`;
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
  } else if (lbMode === 'certificates'){
    c.innerHTML = `<div class="lb-cert-wrap"><img class="lb-img" src="${item}" alt="Certificate ${lbIndex+1}"><span>Muditha Priyasad Portfolio</span></div>`;
  } else if (lbMode === 'videos'){
    const id = youTubeId(item.youtube);
    c.innerHTML = id
      ? `<div class="lb-video"><iframe src="https://www.youtube.com/embed/${id}?rel=0&autoplay=1&playsinline=1" title="${escapeHtml(item.title||'Video')}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe><a class="lb-yt-link" href="https://youtu.be/${id}" target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a></div>`
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
  // Legacy media buttons (if any remain)
  document.querySelectorAll('.media-btn').forEach(btn => {
    if (btn.dataset.bound) return; btn.dataset.bound='1';
    btn.addEventListener('click', () => {
      const box = btn.closest('.media-btn-row');
      if (!box) return;
      const type = btn.dataset.media;
      if (type === 'images') openLightbox('images', JSON.parse(decodeURIComponent(box.dataset.images || '[]')), 0);
      else if (type === 'videos') openLightbox('videos', JSON.parse(decodeURIComponent(box.dataset.videos || '[]')), 0);
      else if (type === 'document') openLightbox('document', [box.dataset.doc], 0);
    });
  });
  // Video-thumbnail cards
  document.querySelectorAll('button.vt-thumb').forEach(btn => {
    if (btn.dataset.bound) return; btn.dataset.bound='1';
    btn.addEventListener('click', () => {
      const vids = JSON.parse(decodeURIComponent(btn.dataset.vids || '[]'));
      if (vids.length) openLightbox('videos', vids, 0);
    });
  });
}

function initProjectMedia(){ initCardSlideshows(); initMediaButtons(); }
initProjectMedia();

/* ====== Sticky contact bar (all pages) ====== */
function initContactBar(){
  if (document.getElementById('contactBar')) return;
  const pf = (window.portfolioData && window.portfolioData.profile) || {};
  const bar = document.createElement('div');
  bar.id = 'contactBar';
  bar.className = 'contact-bar mobile-actions';
  bar.innerHTML = `<div class="cb-inner">
    <a href="projects.html"><span class="cb-ico">▦</span><span class="cb-txt">Projects</span></a>
    <a class="cb-cv" href="cv-contact.html#unlockCard"><span class="cb-ico">⬇</span><span class="cb-txt">Get CV</span></a>
    <a href="cv-contact.html"><span class="cb-ico">✉</span><span class="cb-txt">Contact</span></a>
  </div>`;
  document.body.appendChild(bar);
  document.body.classList.add('has-contact-bar');
}
initContactBar();

/* ====== Testimonials display + comment form ====== */






/* ====== Under-development notice (all pages) ====== */
function initDevNotice(){
  if (document.body.classList.contains('homepage-v2')) return;
  if (document.getElementById('devNotice')) return;
  const header = document.querySelector('.site-header');
  if (!header) return;
  const bar = document.createElement('div');
  bar.id = 'devNotice';
  bar.className = 'dev-notice';
  bar.innerHTML = '<span>🚧 This portfolio is still being built — some sections are incomplete and may contain minor errors or inconsistencies. Thanks for your understanding while I keep improving it.</span>';
  header.insertAdjacentElement('afterend', bar);
}
initDevNotice();

/* ====== Soft gate: unlock CV + phone (lead capture) ====== */
function initUnlockGate(){
  const form = document.getElementById('unlockForm');
  if (!form) return;
  const card = document.getElementById('unlockCard');
  const status = form.querySelector('.gate-status');
  const endpoint = (window.portfolioData && window.portfolioData.commentsEndpoint) || '';
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form._gotcha && form._gotcha.value) return;
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.name || !data.email){
      status.textContent = 'Please enter your name and email.';
      status.className = 'gate-status err';
      return;
    }
    const reveal = () => {
      card.querySelector('.gate-locked').hidden = true;
      card.querySelector('.gate-unlocked').hidden = false;
    };
    if (!endpoint){ reveal(); return; }   // still reveal even if not wired
    status.textContent = 'Unlocking…';
    status.className = 'gate-status';
    try {
      await fetch(endpoint, { method:'POST', headers:{'Accept':'application/json'}, body:new FormData(form) });
    } catch(_) { /* reveal regardless — lead capture is best-effort */ }
    reveal();
  });
}
initUnlockGate();

/* ====== Feedback via Supabase (shows only what you approve) ====== */
function getSupabase(){
  const pd = window.portfolioData || {};
  if (!pd.supabaseUrl || !pd.supabaseKey || !window.supabase) return null;
  if (!window.__sbClient) window.__sbClient = window.supabase.createClient(pd.supabaseUrl, pd.supabaseKey);
  return window.__sbClient;
}

async function renderTestimonials(){
  const wrap = document.querySelector('[data-render="testimonials"]');
  if (!wrap) return;
  const empty = '<p class="testimonial-empty">No recommendations yet — be the first to leave one below.</p>';
  const sb = getSupabase();
  let items = (window.portfolioData && window.portfolioData.testimonials) || [];
  if (sb){
    try {
      const { data, error } = await sb.from('feedback_public').select('name,role,message,created_at').order('created_at',{ascending:false});
      if (!error && Array.isArray(data)) items = data;
    } catch(_){}
  }
  if (!items.length){ wrap.innerHTML = empty; return; }
  wrap.innerHTML = items.map(t => {
    const yr = t.created_at ? new Date(t.created_at).getFullYear() : (t.date||'');
    return `<article class="glass-card testimonial-card">
      <p class="testimonial-msg">“${escapeHtml(t.message)}”</p>
      <p class="testimonial-by"><strong>${escapeHtml(t.name)}</strong>${t.role?`<span>${escapeHtml(t.role)}</span>`:''}${yr?`<small>${escapeHtml(String(yr))}</small>`:''}</p>
    </article>`;
  }).join('');
}

function initCommentForm(){
  const form = document.getElementById('commentForm');
  if (!form) return;
  const status = form.querySelector('.cf-status');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form._gotcha && form._gotcha.value) return;
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.name || !data.role || !data.message){
      status.textContent = 'Please fill in your name, role and comment.';
      status.className = 'cf-status err'; return;
    }
    const sb = getSupabase();
    if (!sb){
      status.innerHTML = 'Feedback is temporarily unavailable. Please email <a href="mailto:muditha00@icloud.com">muditha00@icloud.com</a>.';
      status.className = 'cf-status err'; return;
    }
    status.textContent = 'Sending…'; status.className = 'cf-status';
    try {
      const { error } = await sb.from('feedback').insert({
        name: data.name, role: data.role, message: data.message,
        email: data.email || null, approved: false
      });
      if (error) throw error;
      form.reset();
      status.textContent = 'Thank you! Your recommendation was sent and will appear after I review it.';
      status.className = 'cf-status ok';
    } catch(err){
      status.innerHTML = 'Sorry, something went wrong. Please email <a href="mailto:muditha00@icloud.com">muditha00@icloud.com</a>.';
      status.className = 'cf-status err';
    }
  });
}

renderTestimonials();
initCommentForm();

/* ====== Homepage running project image strip (marquee) ====== */
function renderMarquee(){
  const track = document.querySelector('[data-render="marquee"]');
  if (!track) return;
  const items = (window.portfolioData && window.portfolioData.marquee) || [];
  if (!items.length){ track.closest('.proj-marquee')?.remove(); return; }
  const card = item => {
    const data = typeof item === 'string'
      ? { image: item, title: 'Engineering project evidence', href: 'projects.html' }
      : item;
    const title = data.title || 'Engineering project evidence';
    const href = data.href || 'projects.html';
    const image = data.image || data.src || '';
    if (!image) return '';
    return `<a class="pm-item" href="${escapeHtml(href)}" aria-label="View ${escapeHtml(title)}"><img src="${escapeHtml(image)}" alt="${escapeHtml(title)}" loading="lazy" decoding="async"><span>${escapeHtml(title)}</span></a>`;
  };
  const one = items.map(card).join('');
  track.innerHTML = one + one; // duplicate for seamless loop
  track.style.setProperty('--pm-count', items.length);
}
renderMarquee();

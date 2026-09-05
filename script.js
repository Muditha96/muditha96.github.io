
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

function validProjectVideos(project){
  return (project.videos || []).filter(video => video && youTubeId(video.youtube));
}

function projectImages(project){
  return (project.images || []).filter(src => /\.(jpe?g|png|webp|gif|svg)$/i.test(src));
}

function featuredVideoCard(project, index){
  const videos = validProjectVideos(project);
  if (!videos.length) return '';
  const video = videos[0];
  const videoId = youTubeId(video.youtube);
  const poster = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const encodedVideos = encodeURIComponent(JSON.stringify(videos));
  return `<article class="home-video-card">
    <button class="home-video-thumb vt-thumb" data-vids="${encodedVideos}" aria-label="Play ${escapeHtml(project.title)} video">
      <img src="${poster}" alt="${escapeHtml(project.title)} project video thumbnail" loading="lazy" decoding="async">
      <span class="home-video-number">0${index + 1}</span><span class="vt-play" aria-hidden="true"></span>
    </button>
    <div class="home-video-copy"><p class="eyebrow">${escapeHtml(project.category || '')}</p><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.impact || project.result || '')}</p><a href="${escapeHtml(project.page || 'projects.html')}">View project details →</a></div>
  </article>`;
}

function projectCatalogueCard(project, index){
  const images = projectImages(project);
  const videos = validProjectVideos(project);
  const documentPath = project.doc || '';
  const firstVideoId = videos.length ? youTubeId(videos[0].youtube) : '';
  const photo = images.find(src => /\.(jpe?g|png|webp|gif)$/i.test(src));
  const videoPoster = firstVideoId ? `https://i.ytimg.com/vi/${firstVideoId}/hqdefault.jpg` : '';
  const poster = project.preferVideoThumbnail && videoPoster
    ? videoPoster
    : photo || videoPoster || project.image || images[0] || '';
  const imageData = encodeURIComponent(JSON.stringify(images));
  const videoData = encodeURIComponent(JSON.stringify(videos));
  const action = (type, label, count, enabled, extra = '') => `<button type="button" class="project-media-action" data-media="${type}" ${extra} ${enabled ? '' : 'disabled'} aria-label="${enabled ? 'Open' : 'No'} ${label.toLowerCase()} for ${escapeHtml(project.title)}"><span aria-hidden="true">${type === 'images' ? '▧' : type === 'videos' ? '▶' : '▤'}</span><strong>${label}</strong><small>${count}</small></button>`;
  const media = poster
    ? `<a class="project-entry-thumb" href="${escapeHtml(project.page || 'projects.html')}" aria-label="Open ${escapeHtml(project.title)} case study"><img src="${escapeHtml(poster)}" alt="${escapeHtml(project.title)} project thumbnail" loading="lazy" decoding="async"><span>Project ${String(index + 1).padStart(2, '0')}</span></a>`
    : `<a class="project-entry-thumb project-entry-placeholder" href="${escapeHtml(project.page || 'projects.html')}"><span>Project ${String(index + 1).padStart(2, '0')}</span><strong>Engineering case study</strong></a>`;
  return `<article class="project-entry" data-category="${escapeHtml(project.filter || project.category || '')}">
    <div class="project-entry-media">${media}<div class="project-media-actions" data-images="${imageData}" data-videos="${videoData}" data-doc="${escapeHtml(documentPath)}">
      ${action('images', 'Images', images.length, images.length > 0, `data-items="${imageData}"`)}
      ${action('videos', 'Videos', videos.length, videos.length > 0, `data-items="${videoData}"`)}
      ${action('document', 'Documents', documentPath ? 1 : 0, Boolean(documentPath), `data-doc="${escapeHtml(documentPath)}"`)}
    </div></div>
    <div class="project-entry-content">
      <div class="project-entry-heading"><div><p class="eyebrow">${escapeHtml(project.category || '')}</p><h2>${escapeHtml(project.title)}</h2></div><a class="project-case-link" href="${escapeHtml(project.page || 'projects.html')}">Full case study →</a></div>
      <p class="project-entry-summary">${escapeHtml(project.summary || '')}</p>
      <dl class="project-facts"><div><dt>Problem</dt><dd>${escapeHtml(project.oneLineProblem || project.problem || '')}</dd></div><div><dt>My contribution</dt><dd>${escapeHtml(project.contribution || project.role || '')}</dd></div><div><dt>Result</dt><dd>${escapeHtml(project.impact || project.result || '')}</dd></div></dl>
      <div class="tag-row project-tools">${tagList((project.tools || []).slice(0, 5))}</div>
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
  const source = escapeHtml(item.image);
  const title = escapeHtml(item.alt || item.title || 'Gallery image');
  return `<button class="gallery-image-button" type="button" data-gallery-src="${source}" aria-label="View ${title} at full size"><img src="${source}" alt="${title}" loading="lazy" decoding="async"></button>`;
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

function initGalleryLightbox(){
  const buttons = Array.from(document.querySelectorAll('.gallery-image-button'));
  buttons.forEach(button => {
    if (button.dataset.bound) return;
    button.dataset.bound = '1';
    button.addEventListener('click', () => {
      const visibleButtons = buttons.filter(candidate => !candidate.closest('.gallery-item')?.hidden);
      const images = visibleButtons.map(candidate => candidate.dataset.gallerySrc).filter(Boolean);
      const index = Math.max(0, visibleButtons.indexOf(button));
      openLightbox('images', images, index);
    });
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
    const photo = document.querySelector('.hero-photo, .hero-blend');
    if (status) status.innerHTML = `<span class="pulse-dot"></span>${escapeHtml(profile.status)}`;
    // credential rendered statically as two lines in HTML
    if (title) title.textContent = profile.subtitle;
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


  const experience = document.querySelector('[data-render="experience"]');
  if (experience) {
    experience.innerHTML = (portfolioData.experienceTimeline || []).map(item => `<article class="experience-item"><div class="experience-period">${escapeHtml(item.period)}</div><div><p class="eyebrow">${escapeHtml(item.organization)}</p><h3>${escapeHtml(item.role)}</h3><p>${escapeHtml(item.summary)}</p>${(item.highlights || []).length ? `<ul>${item.highlights.map(point => `<li>${escapeHtml(point)}</li>`).join('')}</ul>` : ''}</div></article>`).join('');
  }
  const expertise = document.querySelector('[data-render="expertise"]');
  if (expertise) expertise.innerHTML = (portfolioData.expertise || []).map(item => `<article class="glass-card"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p></article>`).join('');

  const featured = document.querySelector('[data-render="featured-projects"]');
  if (featured) featured.innerHTML = (portfolioData.projects || []).filter(project => project.featured && validProjectVideos(project).length).slice(0, 5).map(featuredVideoCard).join('');

  const projects = document.querySelector('[data-render="projects"]');
  if (projects) {
    projects.innerHTML = (portfolioData.projects || []).map(projectCatalogueCard).join('');
    const count = document.querySelector('[data-render="project-count"]');
    if (count) count.textContent = `${portfolioData.projects.length} documented projects`;
  }

  const toolMap = document.querySelector('[data-render="tool-map"]');
  if (toolMap) toolMap.innerHTML = `<strong>Tool map:</strong>${tagList(portfolioData.skills?.toolMap)}`;

  const skillGrid = document.querySelector('[data-render="skills"]');
  if (skillGrid) {
    skillGrid.innerHTML = (portfolioData.skills?.groups || []).map(group => {
      const evidence = (portfolioData.skillEvidence || {})[group.title] || [];
      const tools = (group.tools || []).map(tool => {
        const name = Array.isArray(tool) ? tool[0] : tool;
        const detail = Array.isArray(tool) ? tool[1] : '';
        return `<li>
          <strong>${escapeHtml(name)}</strong>
          ${detail ? `<span>${escapeHtml(detail)}</span>` : ''}
        </li>`;
      }).join('');
      const relatedEvidence = evidence.length
        ? `<div class="skills-evidence">
            <strong>Related evidence</strong>
            <ul>${evidence.map(link => `<li><a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a></li>`).join('')}</ul>
          </div>`
        : '';
      return `<article class="skills-list-group">
        <h3>${escapeHtml(group.title)}</h3>
        <ul class="skills-tool-list">${tools}</ul>
        ${relatedEvidence}
      </article>`;
    }).join('');
  }

  const strengths = document.querySelector('[data-render="strengths"]');
  if (strengths) {
    strengths.innerHTML = (portfolioData.skills?.strengths || [])
      .map(strength => `<li>${escapeHtml(strength)}</li>`)
      .join('');
  }

  const machines = document.querySelector('[data-render="machines"]');
  if (machines) {
    machines.innerHTML = (portfolioData.machines || []).map(machine => {
      const category = machine.category || 'Industrial technology';
      const familiarity = machine.familiarity || machine.experience || '';
      const media = machine.image
        ? `<img src="${escapeHtml(machine.image)}" alt="${escapeHtml(machine.title)}" loading="lazy" decoding="async">`
        : `<div class="machine-no-media" aria-hidden="true"><span>${escapeHtml(category)}</span></div>`;
      return `<a class="machine-card" href="machine-detail.html?machine=${encodeURIComponent(machine.slug || machine.title)}">${media}<div><p class="eyebrow">${escapeHtml(category)}</p><h3>${escapeHtml(machine.title)}</h3><p>${escapeHtml(machine.description || '')}</p><p><strong>Familiarity:</strong> ${escapeHtml(familiarity)}</p><p><strong>Technical focus:</strong> ${escapeHtml(machine.technologies || '')}</p><span class="text-link">Open familiarity notes →</span></div></a>`;
    }).join('');
  }

  const industrialTech = document.querySelector('[data-render="industrial-technologies"]');
  if (industrialTech) industrialTech.innerHTML = tagList(portfolioData.industrialTechnologies);

  const gallery = document.querySelector('[data-render="gallery"]');
  if (gallery) {
    gallery.innerHTML = (portfolioData.gallery || [])
      .filter(item => item.image && !item.video && !youTubeId(item.youtube))
      .map(item => `<article class="gallery-item" data-category="${escapeHtml(item.filter)}">${galleryMedia(item)}<div class="gallery-caption"><p class="eyebrow">${escapeHtml(item.category)}</p><h3>${escapeHtml(item.title)}</h3></div></article>`)
      .join('');
    initYouTubeLite();
    initGalleryLightbox();
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
      const title = `<p class="eyebrow">${escapeHtml(cert.issuer)}</p><h3>${escapeHtml(cert.name)}</h3>`;
      const heading = cert.badge
        ? `<div class="cert-heading"><img class="cert-badge" src="${escapeHtml(cert.badge)}" alt="${escapeHtml(cert.name)} badge" width="72" height="72" loading="lazy" decoding="async"><div>${title}</div></div>`
        : title;
      return `<article class="glass-card cert-card">${thumb}${heading}<p>${escapeHtml(cert.detail)}</p>${link}</article>`;
    }).join('');
    document.querySelectorAll('.cert-thumb').forEach(b => {
      if (b.dataset.bound) return; b.dataset.bound='1';
      b.addEventListener('click', () => openLightbox('certificates', [b.dataset.certImg], 0));
    });
  }

  const contactList = document.querySelector('[data-render="contact"]');
  if (contactList && profile) {
    contactList.innerHTML = `<li><span>Email</span><a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a></li><li><span>LinkedIn</span><a href="${escapeHtml(profile.linkedin)}" target="_blank" rel="noopener noreferrer">${escapeHtml(profile.linkedinLabel)}</a></li><li><span>Location</span><strong>${escapeHtml(profile.location)}</strong></li>`;
  }

  const availableFor = document.querySelector('[data-render="available-for"]');
  if (availableFor) availableFor.innerHTML = tagList(portfolioData.availableFor);

  const machineDetail = document.querySelector('[data-render="machine-detail"]');
  if (machineDetail) {
    const slug = new URLSearchParams(window.location.search).get('machine');
    const machine = (portfolioData.machines || []).find(item => item.slug === slug) || portfolioData.machines?.[0];
    if (machine) {
      const category = machine.category || 'Industrial technology';
      const familiarity = machine.familiarity || machine.experience || '';
      document.title = `${machine.title} | Muditha Priyasad`;
      machineDetail.innerHTML = `<section class="project-detail-hero"><div><p class="eyebrow">${escapeHtml(category)}</p><h1>${escapeHtml(machine.title)}</h1><p>${escapeHtml(machine.description)}</p><div class="tag-row">${tagList(String(machine.technologies || '').split(',').map(item => item.trim()).filter(Boolean))}</div></div>${machine.image ? `<img src="${escapeHtml(machine.image)}" alt="${escapeHtml(machine.title)}" loading="eager" decoding="async">` : `<div class="machine-no-media" aria-hidden="true"><span>${escapeHtml(category)}</span></div>`}</section>
      <section class="detail-layout"><article class="glass-card detail-card"><h2>Technology Overview</h2><p>${escapeHtml(machine.description)}</p></article><article class="glass-card detail-card"><h2>My Familiarity</h2><p>${escapeHtml(familiarity)}</p></article><article class="glass-card detail-card"><h2>Technical Focus</h2><p>${escapeHtml(machine.technologies)}</p></article><article class="glass-card detail-card"><h2>Portfolio Boundary</h2><p>This entry records familiarity with the equipment or process. Machines I personally designed or built are documented separately on the Projects page.</p></article><article class="glass-card detail-card"><h2>Confidentiality</h2><p>Public-safe summary only. Detailed methods can be discussed during interviews without disclosing drawings, PLC logic, customer information or production data.</p></article></section>`;
    }
  }

  const projectDetail = document.querySelector('[data-render="project-detail"]');
  if (projectDetail) {
    const slug = new URLSearchParams(window.location.search).get('project');
    const project = (portfolioData.projects || []).find(item => item.slug === slug) || portfolioData.projects?.[0];
    if (project) {
      const tools = project.tools || [];
      document.title = `${project.title} | Muditha Priyasad`;
      const images = (project.images || []).filter(s => /\.(jpe?g|png|webp)$/i.test(s));
      const videos = (project.videos || []).filter(v => youTubeId(v.youtube));
      const evidenceParts = [];
      if (images.length) evidenceParts.push(`<div class="evidence-grid">${images.map((src, index) => `<a href="${escapeHtml(src)}" target="_blank" rel="noopener noreferrer"><img src="${escapeHtml(src)}" alt="${escapeHtml(project.title)} evidence ${index + 1}" loading="lazy" decoding="async"></a>`).join('')}</div>`);
      if (videos.length) evidenceParts.push(`<div class="project-video-grid">${videos.map(video => galleryMedia({ youtube: video.youtube, title: video.title || project.title, alt: video.title || project.title })).join('')}</div>`);
      if (project.doc) evidenceParts.push(`<p><a class="button secondary" href="${escapeHtml(project.doc)}" target="_blank" rel="noopener noreferrer">Open project document (PDF)</a></p>`);
      const evidence = evidenceParts.length ? evidenceParts.join('') : `<p>No additional public-safe media is published for this project. The engineering approach can be discussed during an interview while respecting confidentiality.</p>`;
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
      initYouTubeLite();
      const schema = document.createElement('script');
      schema.type = 'application/ld+json';
      schema.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'CreativeWork', name: project.title, creator: { '@type': 'Person', name: profile.name }, description: project.summary || project.oneLineProblem, url: window.location.href });
      document.head.appendChild(schema);
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
  const buttons = Array.from(document.querySelectorAll('.filter-btn'));
  const items = Array.from(container.children);
  const countTarget = document.querySelector(`[data-filter-count="${container.id}"]`);
  const apply = button => {
    const filter = button?.dataset.filter || 'all';
    buttons.forEach(btn => {
      const selected = btn === button;
      btn.classList.toggle('active', selected);
      btn.setAttribute('aria-pressed', String(selected));
    });
    items.forEach(item => {
      const cats = (item.dataset.category || '').toLowerCase();
      const filteredOut = filter !== 'all' && !cats.includes(filter);
      const collapsedOut = container.classList.contains('projects-collapsed') && item.dataset.secondary === 'true';
      item.hidden = filteredOut || collapsedOut;
      item.classList.toggle('hidden', filteredOut || collapsedOut);
    });
    if (countTarget) {
      const visibleCount = items.filter(item => !item.hidden).length;
      countTarget.textContent = `${visibleCount} ${visibleCount === 1 ? 'item' : 'items'}`;
    }
    const url = new URL(window.location.href);
    if (filter === 'all') url.searchParams.delete('filter'); else url.searchParams.set('filter', filter);
    history.replaceState({}, '', url);
  };
  buttons.forEach(button => button.addEventListener('click', () => apply(button)));
  const requested = new URLSearchParams(window.location.search).get('filter');
  const initial = buttons.find(btn => btn.dataset.filter === requested) || buttons.find(btn => btn.classList.contains('active')) || buttons[0];
  apply(initial);
}

function initProjectSummaries(){
  const mobileViewport = window.matchMedia('(max-width: 700px)');
  const entries = Array.from(document.querySelectorAll('.project-entry'));

  entries.forEach((entry, index) => {
    if (entry.dataset.summaryReady) return;
    const summary = entry.querySelector('.project-entry-summary');
    const facts = entry.querySelector('.project-facts');
    const tools = entry.querySelector('.project-tools');
    const title = entry.querySelector('h2')?.textContent?.trim() || `project ${index + 1}`;
    if (!summary || !facts) return;

    const details = document.createElement('div');
    details.className = 'project-entry-details';
    details.id = `project-entry-details-${index + 1}`;
    facts.before(details);
    details.appendChild(facts);
    if (tools) details.appendChild(tools);

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'project-summary-toggle';
    toggle.setAttribute('aria-controls', details.id);
    summary.insertAdjacentElement('afterend', toggle);

    const setExpanded = expanded => {
      details.hidden = !expanded;
      toggle.setAttribute('aria-expanded', String(expanded));
      toggle.textContent = expanded ? 'Hide engineering summary' : 'Show engineering summary';
      toggle.setAttribute('aria-label', `${expanded ? 'Hide' : 'Show'} problem, contribution and result for ${title}`);
    };

    toggle.addEventListener('click', () => setExpanded(toggle.getAttribute('aria-expanded') !== 'true'));
    const syncToViewport = event => setExpanded(!event.matches);
    if (mobileViewport.addEventListener) mobileViewport.addEventListener('change', syncToViewport);
    else mobileViewport.addListener(syncToViewport);
    entry.dataset.summaryReady = '1';
    setExpanded(!mobileViewport.matches);
  });
}

renderEditableContent();
initProjectSummaries();
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
  document.querySelectorAll('.project-media-action, .media-btn').forEach(btn => {
    if (btn.dataset.bound || btn.disabled) return; btn.dataset.bound='1';
    btn.addEventListener('click', () => {
      const type = btn.dataset.media;
      const parent = btn.closest('.project-media-actions, .media-btn-row');
      if (type === 'images') openLightbox('images', JSON.parse(decodeURIComponent(btn.dataset.items || parent?.dataset.images || '[]')), 0);
      else if (type === 'videos') openLightbox('videos', JSON.parse(decodeURIComponent(btn.dataset.items || parent?.dataset.videos || '[]')), 0);
      else if (type === 'document') openLightbox('document', [btn.dataset.doc || parent?.dataset.doc], 0);
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
  if (document.body.classList.contains('skills-page')) return;
  if (document.getElementById('contactBar')) return;
  const pf = (window.portfolioData && window.portfolioData.profile) || {};
  const bar = document.createElement('div');
  bar.id = 'contactBar';
  bar.className = 'contact-bar mobile-actions';
  bar.innerHTML = `<div class="cb-inner">
    <a href="projects.html"><span class="cb-ico" aria-hidden="true">▦</span><span class="cb-txt">Projects</span></a>
    <a class="cb-cv" href="${escapeHtml(pf.cv || 'cv-contact.html')}" download><span class="cb-ico" aria-hidden="true">↓</span><span class="cb-txt">CV</span></a>
    <a href="mailto:${escapeHtml(pf.email || '')}"><span class="cb-ico" aria-hidden="true">✉</span><span class="cb-txt">Email</span></a>
  </div>`;
  document.body.appendChild(bar);
  document.body.classList.add('has-contact-bar');
}
initContactBar();

/* ====== Testimonials display + comment form ====== */






/* ====== Homepage running project image strip (marquee) ====== */
function renderMarquee(){
  const track = document.querySelector('[data-render="marquee"]');
  if (!track) return;
  const items = (window.portfolioData && window.portfolioData.marquee) || [];
  if (!items.length){ track.closest('.proj-marquee')?.remove(); return; }
  const card = (item, duplicate = false) => {
    const data = typeof item === 'string' ? { image: item, title: 'Engineering project evidence', href: 'projects.html' } : item;
    if (!data.image && !data.src) return '';
    const title = data.title || 'Engineering project evidence';
    const duplicateAttrs = duplicate ? ' aria-hidden="true" tabindex="-1"' : '';
    return `<a class="pm-item" href="${escapeHtml(data.href || 'projects.html')}" aria-label="View ${escapeHtml(title)}"${duplicateAttrs}><img src="${escapeHtml(data.image || data.src)}" alt="${duplicate ? '' : escapeHtml(title)}" loading="lazy" decoding="async"><span>${escapeHtml(title)}</span></a>`;
  };
  track.innerHTML = items.map(item => card(item)).join('') + items.map(item => card(item, true)).join('');
  track.style.setProperty('--pm-count', items.length);
  track.style.setProperty('--pm-duration', `${Math.max(34, Math.round(items.length * 4.5))}s`);
}
renderMarquee();
/* ===== Accessible Home carousels on compact screens ===== */
function initHomeCarousels(){
  const mobileLayout = window.matchMedia('(max-width:700px)');
  document.querySelectorAll('[data-carousel-toolbar]').forEach(toolbar => {
    const track = document.getElementById(toolbar.dataset.carouselToolbar || '');
    const previous = toolbar.querySelector('[data-carousel-prev]');
    const next = toolbar.querySelector('[data-carousel-next]');
    if (!track || !previous || !next) return;

    const update = () => {
      const mobile = mobileLayout.matches;
      const maximum = Math.max(0, track.scrollWidth - track.clientWidth);
      track.tabIndex = mobile ? 0 : -1;
      previous.disabled = !mobile || track.scrollLeft <= 4;
      next.disabled = !mobile || track.scrollLeft >= maximum - 4;
    };
    const move = direction => {
      const distance = Math.max(240, track.clientWidth * .86);
      track.scrollBy({ left: direction * distance, behavior: 'smooth' });
    };

    previous.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));
    track.addEventListener('scroll', update, { passive:true });
    track.addEventListener('keydown', event => {
      if (!mobileLayout.matches || !['ArrowLeft','ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      move(event.key === 'ArrowRight' ? 1 : -1);
    });
    if (mobileLayout.addEventListener) mobileLayout.addEventListener('change', update);
    else mobileLayout.addListener(update);
    update();
  });
}
initHomeCarousels();

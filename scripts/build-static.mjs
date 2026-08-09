import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDirectory, '..');
const checkOnly = process.argv.includes('--check');

function loadPortfolioData() {
  const context = { window: {}, console };
  vm.createContext(context);
  for (const relativePath of [
    'data/project-image-library.js',
    'data/gallery-library.js',
    'data/portfolio-data.js'
  ]) {
    const source = fs.readFileSync(path.join(root, relativePath), 'utf8');
    vm.runInContext(source, context, { filename: relativePath });
  }
  return context.window.portfolioData;
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[character]);
}

function youTubeId(url) {
  if (!url) return '';
  const value = String(url).trim();
  if (/^[A-Za-z0-9_-]{11}$/.test(value)) return value;
  const match = value.match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : '';
}

function validProjectVideos(project) {
  return (project.videos || []).filter(video => video && youTubeId(video.youtube));
}

function projectImages(project) {
  return (project.images || []).filter(source => /\.(jpe?g|png|webp|gif|svg)$/i.test(source));
}

function tagList(items) {
  return (items || []).map(item => `<span>${escapeHtml(item)}</span>`).join('');
}

function featuredVideoCard(project, index) {
  const videos = validProjectVideos(project);
  const videoId = youTubeId(videos[0].youtube);
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

function projectCatalogueCard(project, index) {
  const images = projectImages(project);
  const videos = validProjectVideos(project);
  const documentPath = project.doc || '';
  const firstVideoId = videos.length ? youTubeId(videos[0].youtube) : '';
  const photo = images.find(source => /\.(jpe?g|png|webp|gif)$/i.test(source));
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

function replaceRenderedSection(html, renderName, content) {
  const expression = new RegExp(`(<section\\b[^>]*data-render=["']${renderName}["'][^>]*>)[\\s\\S]*?(<\\/section>)`, 'i');
  if (!expression.test(html)) throw new Error(`Could not find data-render="${renderName}" section`);
  const generated = `\n      <!-- Generated by scripts/build-static.mjs; JavaScript enhances this content. -->\n${content}\n    `;
  return html.replace(expression, `$1${generated}$2`);
}

function updateFile(relativePath, transform) {
  const filePath = path.join(root, relativePath);
  const original = fs.readFileSync(filePath, 'utf8');
  const updated = transform(original);
  if (checkOnly) {
    if (updated !== original) {
      console.error(`${relativePath} static content is stale. Run: node scripts/build-static.mjs`);
      process.exitCode = 1;
    }
    return;
  }
  if (updated !== original) fs.writeFileSync(filePath, updated, 'utf8');
}

const portfolioData = loadPortfolioData();
const featuredProjects = (portfolioData.projects || [])
  .filter(project => project.featured && validProjectVideos(project).length)
  .slice(0, 5);
const projectCards = (portfolioData.projects || []).map(projectCatalogueCard).join('\n');
const featuredCards = featuredProjects.map(featuredVideoCard).join('\n');

updateFile('index.html', html => replaceRenderedSection(html, 'featured-projects', featuredCards));
updateFile('projects.html', html => {
  const withCards = replaceRenderedSection(html, 'projects', projectCards);
  return withCards.replace(/(<strong\b[^>]*data-render=["']project-count["'][^>]*>)[\s\S]*?(<\/strong>)/i, `$1${portfolioData.projects.length} documented projects$2`);
});

if (!process.exitCode) {
  console.log(checkOnly
    ? `Static content is current: ${featuredProjects.length} featured projects, ${portfolioData.projects.length} catalogue projects.`
    : `Updated static content: ${featuredProjects.length} featured projects, ${portfolioData.projects.length} catalogue projects.`);
}

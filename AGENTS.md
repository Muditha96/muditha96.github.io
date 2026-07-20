# Repository Guidelines

## Project Structure & Module Organization
This workspace contains source assets and the publishable static portfolio. Treat `SITE-READY-TO-UPLOAD/` as the working site folder for GitHub Pages. Top-level `assets/`, `certificates/`, and `Gallary images/` are staging/reference assets; move only public-safe, optimized files into the site. Inside `SITE-READY-TO-UPLOAD/`, HTML pages live at the root, shared content is in `data/portfolio-data.js`, behavior is in `script.js`, and styling is split across `styles.css`, `recruiter.css`, and homepage-specific `homepage.css`. Public images and CV files belong under `assets/images/` and `assets/docs/`.

## Build, Test, and Development Commands
There is no build step, backend, database, login, or tracking script. Use:

```bash
cd SITE-READY-TO-UPLOAD
python -m http.server 8000
node --check script.js
node --check data/portfolio-data.js
git diff --check
```

The server command previews the site locally. The Node commands validate JavaScript syntax. `git diff --check` catches whitespace and patch problems.

## Coding Style & Naming Conventions
Use plain HTML, CSS, and vanilla JavaScript. Prefer two-space indentation, semantic HTML, accessible labels, and high-contrast text. Use lowercase hyphenated CSS classes; keep homepage-only selectors prefixed with `hp-`. The primary title must remain `Mechanical Design | Industrial Automation | R&D Engineer`. Use `Engineering in Practice`, not `Image Gallery`. Keep wording concise, recruiter-friendly, and focused on practical engineering evidence.

## Testing Guidelines
No formal test framework is used. Before marking work complete, open the site in a browser and check `1366x768`, `1440x900`, `1920x1080`, and `390px` mobile. Verify no horizontal overflow, no console errors, working navigation, project links, image/video rendering, and CV download behavior.

## Commit & Pull Request Guidelines
Use short imperative commit messages, for example `Rebuild desktop-first homepage` or `Update certification images`. Pull requests should include the purpose, files changed, desktop and mobile screenshots for layout work, tests run, and any content-safety notes.

## Security & Content Safety
Preserve existing links, project data, images, CV files, and routes unless explicitly asked. Do not add Supabase, backend services, analytics, login, or unnecessary dependencies. Never publish confidential CAD files, PLC programs, HMI sources, wiring diagrams, customer names, supplier names, factory layouts, production data, or internal financial data.

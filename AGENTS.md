# AGENTS.md — Project context for AI agents (Claude & Codex)

This file gives any AI agent the shared context needed to work on this project safely.
**Read this first, then read `COLLAB-LOG.md` for the running change log.**

## What this is
Static personal portfolio site for **Muditha Priyasad** — Mechanical Design, Automation & R&D Engineer.
- Live site: https://muditha96.github.io
- Hosting: GitHub Pages (repo: `muditha96/muditha96.github.io`)
- Stack: **plain static HTML + CSS + vanilla JS**. NO framework, NO build step, NO bundler.
- Goal: recruiter-friendly, evidence-based, professional. Light theme.

## Architecture (important)
- **`data/portfolio-data.js`** — single source of truth. Sets `window.portfolioData = {...}`
  containing: `profile`, `stats`, `projects[]`, `skills{}`, `machines[]`, `gallery[]`,
  `certifications[]`, `testimonials[]`, `marquee[]`, plus config keys
  (`commentsEndpoint`, `supabaseUrl`, `supabaseKey`).
- **`script.js`** — all behaviour. Reads `portfolioData`, renders into elements marked
  `data-render="..."` (e.g. `featured-projects`, `projects`, `machines`, `skills`,
  `certifications`, `testimonials`, `marquee`). Also: lightbox, video thumbnails,
  hero icon rail, mobile action bar, dev-notice banner, feedback (Supabase), unlock gate.
- **`styles.css`** — one big stylesheet. ⚠️ It has accumulated many overrides from
  iterative design. The **LAST matching rule wins** — when fixing layout, prefer appending
  a clean authoritative block at the END rather than editing scattered earlier rules.
  There is already an "AUTHORITATIVE HERO LAYOUT" block at the end — keep hero changes there.
- **HTML pages** (21): index, projects, skills, machines, certifications, cv-contact,
  gallery, about, machine-detail, project-detail, plus older standalone project-*.html.
  Nav is duplicated in each page's `<header>` (6 items: Home · Projects · Machines · Skills ·
  Certifications · Contact). If you change nav, change it on ALL pages consistently.

## Key features & how they work
- **Projects**: homepage shows `featured:true` only (5); Projects page shows all (12).
  Cards render as video thumbnails; real YouTube link → playable, else "Video coming soon".
- **Certifications**: 9 entries; those with an `image` field show a clickable thumbnail
  (opens lightbox). Images in `assets/certificates/img/`.
- **Feedback / recommendations**: Supabase backend. Table `feedback` (approved=false by
  default) + public view `feedback_public` (approved only, email hidden). Site shows only
  approved rows. Owner approves in Supabase dashboard. Project ref: `moavlqmeeaozautstdwo`.
- **Contact privacy (soft gate)**: phone + CV are hidden on cv-contact.html until a visitor
  submits name+email (`gate-unlocked` block, revealed by JS). Email/LinkedIn/Location are public.
- **Running image strip (marquee)**: homepage, `marquee[]` in data, rendered + duplicated
  by `renderMarquee()` for a seamless CSS loop.

## RULES — do not break these
1. Keep it static & GitHub-Pages compatible. No servers, no build tools, no npm deps in the site.
2. Don't expose confidential employer data. Public-safe summaries only (there's a confidentiality note).
3. Don't put the phone number or CV link anywhere PUBLIC — they live only inside the soft-gate
   `gate-unlocked` block on cv-contact.html. (The header CV button was removed on purpose.)
4. The Supabase **publishable key is public by design** — safe in the browser; security is via
   Row-Level Security. Do NOT add service_role/secret keys to the site.
5. Validate after edits: `node --check script.js` and `node --check data/portfolio-data.js`,
   and check for broken internal links before finishing.
6. Don't invent fake numbers, companies, results, or testimonials. Real CV figures only.
7. Two files are the "guides" the owner uses: HOW-TO-*.md — keep them accurate if behaviour changes.

## Working folder
`SITE-READY-TO-UPLOAD/` is the source of truth the owner copies to the GitHub repo folder
(`Documents/GitHub/muditha96.github.io`) and pushes via GitHub Desktop. Edit here.

## How to test quickly
- `node --check script.js` / `node --check data/portfolio-data.js`
- Grep for broken links (href/src pointing to missing local files).
- Open index.html in a browser for visual QA (do this for layout changes).

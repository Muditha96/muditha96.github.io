# Agent Handoff - Shared Portfolio Project

This repository is the live GitHub Pages portfolio for Muditha Priyasad.

## Source of truth

- Live repo: `C:\Users\rmmud\Documents\GitHub\muditha96.github.io`
- Live site: `https://muditha96.github.io`
- Main editable data file: `data/portfolio-data.js`
- Public CV path: `assets/docs/Muditha-Priyasad-CV.pdf`

Do not create a separate portfolio or parallel version. Continue improving this same repo and keep changes integrated.

## Current Codex homepage direction

Codex rebuilt the homepage as a desktop-first static page focused on the 1366x768 first viewport.

Current homepage structure:

- `index.html`: compact header, split hero, six-stat strip, Engineering in Practice bento preview, then normal below-fold sections.
- `homepage.css`: scoped homepage-only layout and styling for the desktop-first rebuild.
- `script.js`: skips the under-development notice only on `body.homepage-v2` so the first viewport can stay compact.

Before making overlapping homepage changes, inspect the current `git diff` and keep the same `homepage-v2` structure unless the user asks for another redesign.

## Safety rules

Do not publish confidential engineering data:

- PLC programs
- HMI source files
- wiring diagrams
- exact CAD dimensions
- customer or supplier names
- factory layouts
- internal production or financial data
- full machine drawings
- raw training reports
- editable Office files
- large raw videos or MOV files

Use only public-safe summaries, optimized images, simplified diagrams, selected public PDFs, and YouTube links for videos.

## Deployment workflow

1. Work in `C:\Users\rmmud\Documents\GitHub\muditha96.github.io`.
2. Check `git status --short` before editing.
3. Run syntax/safety checks before commit.
4. Commit only intended files.
5. Push to `origin main` when ready.

## Notes for collaboration

- If Claude changes `index.html`, `styles.css`, `script.js`, or `data/portfolio-data.js`, leave a short note here describing what changed.
- If Codex changes the same files later, Codex should read this file and the latest diff first.
- Keep README and how-to files aligned with actual behavior.

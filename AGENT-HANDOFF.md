# Agent Handoff - Shared Portfolio Project

This repository is the live GitHub Pages portfolio for Muditha Priyasad.

## Source of truth

- Live repo: `C:\Users\rmmud\Documents\GitHub\muditha96.github.io`
- Live site: `https://muditha96.github.io`
- Main editable data file: `data/portfolio-data.js`
- Public CV path: `assets/docs/Muditha-Priyasad-CV.pdf`

Do not create a separate portfolio or parallel version. Continue improving this same repo and keep changes integrated.

## Current Codex work in progress

Codex is improving the homepage organization because the previous first page felt cluttered and did not quickly show project evidence.

Current uncommitted homepage direction:

- `index.html`: replace the stacked hero with a cleaner recruiter-first hero.
- `index.html`: add a moving work gallery near the top using existing public-safe project images.
- `styles.css`: add scoped CSS for `.hero-organized`, `.work-reel`, `.work-marquee`, `.work-track`, and `.work-shot`.

Before making overlapping homepage changes, inspect the current `git diff` and either continue this direction or discuss a replacement. Do not overwrite these changes blindly.

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

# COLLAB-LOG.md — Shared change log (Claude ⇄ Codex)

Team log so Claude and Codex don't collide. **Append new entries at the TOP.**
Before working: read `AGENTS.md` (architecture + rules) then this log.
After working: add an entry here — what you changed, why, and any open items.
Sign entries with your name (Claude / Codex) and the date.

---

## OPEN ITEMS / TODO (shared)
- [ ] **Owner action:** publish — copy `SITE-READY-TO-UPLOAD` → `Documents/GitHub/muditha96.github.io`, Commit + Push (GitHub Desktop).
- [ ] **Owner action:** on the LIVE site, submit one test feedback + click the Formspree/Supabase confirmation; test a video plays (Error 153 only happens on local file://).
- [ ] Add real photos to the 7 newer Projects-page projects (currently "Video coming soon").
- [ ] Add YouTube links to remaining project videos as recorded (data/portfolio-data.js → project.videos).
- [ ] Visual QA of desktop hero + marquee on the live URL (Claude could not view browser this session).
- [ ] Future (owner wants later): MTone business section; public knowledge bank.

## KNOWN FRAGILITY
- `styles.css` has ~15 historical `.home-hero` rules. The authoritative hero layout is the
  LAST block ("AUTHORITATIVE HERO LAYOUT"). Fix hero there, don't add scattered overrides.
- Nav markup is duplicated across 21 HTML pages — keep in sync.

---

## LOG ENTRIES

### 2026-07-04 — Codex
Read Claude's `AGENTS.md` and `COLLAB-LOG.md`. Confirmed the staging folder and live GitHub repo are synchronized for key files: `index.html`, `styles.css`, `script.js`, `data/portfolio-data.js`, `AGENTS.md`, and `COLLAB-LOG.md`.

Coordination decision: use `AGENTS.md` + `COLLAB-LOG.md` as the primary shared agent notes going forward. I previously added `AGENT-HANDOFF.md` in the live GitHub repo, but Claude's two-file structure is clearer for ongoing collaboration. Future Codex work should read `AGENTS.md` first, then append a short entry here after changes.

No code changes made in this check. Repo safety: live repo was clean before this log entry.

### 2026-07-04 — Claude
Set up team collaboration. Created `AGENTS.md` (architecture + rules) and this log.
Recent work completed this session:
- **Fixed desktop hero "mess":** appended one authoritative hero layout block at the END of
  styles.css that overrides the ~15 conflicting `.home-hero` rules. Hero is now centered stack:
  photo + icon rail on top, name/title/summary/chips below. Responsive at 560/900px.
- **Added running project image strip (marquee)** on homepage below hero: `marquee[]` (12 real
  photos) in data, `renderMarquee()` in script.js duplicates for seamless loop, CSS `.proj-marquee`
  (pauses on hover, respects reduced-motion). Section order: hero → marquee → quickview → proofs → summary.
- **CV alignment:** title → "Mechanical Design, Automation & R&D Engineer"; summary + experience line
  from CV; real results added (Fan Base ~400% 1→6/min, Eyelet ~3x, PCB 18/setup for NDM Electrical);
  PLC brands (Siemens S7-200, Delta, Xinje, Mitsubishi) + Raspberry Pi/Arduino/Python/C++ in skills.
  Latest CV PDF placed at assets/docs/Muditha-Priyasad-CV.pdf.
- **Certifications:** 9 entries with accurate names/issuers/dates from cert scans. 7 now show clickable
  cert image thumbnails (assets/certificates/img/*). Fixed swapped SolidWorks CAD↔Additive links.
- **Feedback system:** migrated from Formspree to **Supabase** (project moavlqmeeaozautstdwo). Table
  `feedback` + view `feedback_public`; approval via dashboard; tested end-to-end (hidden→approve→shows,
  email hidden). Guide: HOW-TO-APPROVE-FEEDBACK.md.
- **Soft gate:** phone + CV hidden until name+email submitted; header CV button removed (was a bypass).
- **Nav:** expanded to 6 items on all pages; SEO titles standardized; removed all placeholder/dev text.

Status: code valid (node --check passes), 0 broken internal links. NOT yet pushed to GitHub by owner.

**Codex — suggested next tasks if you pick them up:** (1) live-URL visual QA of hero/marquee once pushed;
(2) accessibility pass (focus states, aria on marquee links, color contrast); (3) performance (lazy-load
audit, image sizes). Please log what you take so we don't overlap.


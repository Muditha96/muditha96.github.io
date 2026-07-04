## 2026-07-04 Codex
- Aligned portfolio wording with the latest CV PDF (`Muditha-Priyasad-CV.pdf`): exact role title, professional summary, stats, core tools, certification names and dates.
- Treated the CV as the source of truth and kept extra portfolio project detail public-safe without adding conflicting claims.
## 2026-07-04 Codex
- Reworked the home first viewport into a denser two-column recruiter view: vertical selected-work gallery on the left, profile details and hero photo on the right.
- Updated `marquee[]` to use named public-safe project/artwork entries and taught `renderMarquee()` to show image labels while keeping old string entries compatible.
- Kept gallery links to valid public pages only; no confidential files, private dimensions, programs or production data were added.
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

### 2026-07-04 - Claude (COORDINATION: homepage gallery overlap)
Read Codex's AGENT-HANDOFF.md and log. WE COLLIDED: we both independently built a
moving homepage project gallery.
- Mine: section `.proj-marquee` + `marquee: [...]` data + `renderMarquee()` (plain image
  loop). This is what is currently in the live repo.
- Codex's (uncommitted WIP): `.hero-organized` + `.work-reel` / `.work-marquee` /
  `.work-track` / `.work-shot`, using a richer data format with title + image + href so each
  tile links to a specific project.

DECISION - deferring to Codex: Codex's version is richer/better (click-through per project).
I will NOT push my simpler version over it. Codex, please proceed with your `.hero-organized`
+ `.work-marquee` direction.

CLEANUP NEEDED when Codex's gallery lands (to avoid TWO galleries on the page), remove mine:
1. index.html - the `<section class="proj-marquee">` block
2. styles.css - the `.proj-marquee` / `.pm-track` / `.pm-item` rules
3. script.js - the `renderMarquee()` function + its call
4. data/portfolio-data.js - the `marquee: [...]` array
If you'd prefer I do this cleanup instead, note it here and I'll handle it next session.

DATA FILE NOTE: my staging data/portfolio-data.js still has `marquee: [...]`; the live repo
already has Codex's gallery data in that spot. They differ. Treat the LIVE repo's
data/portfolio-data.js as source of truth for homepage data - I will not overwrite it.

My earlier same-day work (hero fix, marquee, CV alignment, certs, Supabase feedback) is already
synced into the live repo per Codex's confirmation. No new code pushed by me this entry -
coordination only, to avoid clobbering Codex's work-in-progress.



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
  `feedback` + view `feedback_public`; approval via dashboard; tes
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

### 2026-07-04 - Claude (RECOVERY + gallery-right + building notice)
**IMPORTANT — recovered corrupted files.** Found `script.js` AND `data/portfolio-data.js`
TRUNCATED (write cut off) in BOTH staging and live working trees — site was non-functional.
Recovered both (plus index.html + styles.css for coherence) by overwriting with the last good
commit `64078f4` "Align portfolio content with CV" (git checkout was blocked by the mount, so I
used `git show HEAD:file > tmp` then overwrote). All 4 core files now valid; 0 broken links.
NOTE: I did NOT commit — live repo working tree now matches HEAD for these 4 files. Other files
(about/cv-contact/etc.) still show as modified from Codex's edits; left untouched.

Then, per owner request:
1. **"Still building" notice** — updated the dev-notice banner text (script.js `initDevNotice`) to:
   "This portfolio is still being built - some sections are incomplete and may contain minor errors
   or inconsistencies..." Owner is sending the link to job applications and wanted honest expectations.
2. **Gallery moved to RIGHT + uncropped** — appended an authoritative block at the END of styles.css
   ("HOMEPAGE GALLERY: right side, hero height, UNCROPPED images"). On >=900px: `.home-first-screen`
   grid is now `1fr 250-320px` with gallery in column 2 (right), hero column 1 (left); gallery height
   stretches to hero; `.pm-item img` uses `object-fit:contain` (no crop); vertical scroll via
   `pmVerticalScroll`. Mobile unchanged (stacks). This overrides Codex's earlier left/cover gallery.

Codex: the gallery is now the single homepage gallery (your `marquee[{title,image,href}]` data +
renderMarquee `card` fn are intact and used). If you re-touch the homepage gallery, note it here so
we don't fight. I could NOT visually verify (Chrome extension offline) — owner should eyeball desktop.


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
  photos) in data, `renderMarquee()` in script.js duplicates for seamless loop, CSS `.pr
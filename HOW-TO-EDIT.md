# How to Edit & Update Your Portfolio

Everything here is plain text — you can update it anytime, forever. You don't need to rebuild anything. Edit a file, save, and re-upload to GitHub (or push). The live site refreshes in about a minute.

The one file you'll use most:
```
data/portfolio-data.js
```
It contains every project, machine, gallery item, certificate, and your contact info as simple lists.

---

## 1. Change text (title, summary, contact, etc.)
1. Open `data/portfolio-data.js` in any text editor (Notepad, VS Code, etc.).
2. Find the text you want to change (it's inside quotes `"like this"`).
3. Edit it, keeping the quotes and the comma at the end of the line.
4. Save → re-upload the file to GitHub.

---

## 2. Add a new project
1. In `data/portfolio-data.js`, find the `projects: [` list.
2. Copy one existing project block (from `{` to `},`) and paste it as a new entry.
3. Change its `title`, `summary`, `category`, `filter`, `image`, and `tools`.
4. Use a valid `filter` so it shows under a button: `automation`, `fixtures`, `printing`, `machine`, `robotics`, `software`, `calibration`, `thermal`, or `training`.
5. Save → re-upload.

---

## 3. Add a document (PDF) to a project
1. Put your PDF in `assets/docs/projects/` (e.g. `my-new-project.pdf`).
2. In that project's block in `data/portfolio-data.js`, add this line:
   ```js
   doc: "assets/docs/projects/my-new-project.pdf",
   ```
3. Save → upload both the PDF and the data file.
A **"📄 View document (PDF)"** button appears automatically on the card and case-study page.

> Tip: To convert a Word `.docx` to PDF, open it in Word and use **File → Save As → PDF**, or **File → Export → PDF**.

**Projects currently shown with documents:** Tensile Gripper, Combustion SCADA, Screen Printer, Oil Dripping Tray, Bonding Tape Machine, 3D Printer Build. As your other project write-ups are finished, convert each to PDF, drop it in `assets/docs/projects/`, and add the `doc:` line.

---

## 4. Add a video
See **HOW-TO-ADD-YOUTUBE-VIDEOS.md**. Upload to YouTube, paste the link into a gallery item's `youtube:` field.

---

## 5. Update your CV or certificates
- **CV:** replace `assets/docs/Muditha-Priyasad-CV.pdf` with your new one — keep the same filename so all Download CV buttons keep working.
- **Certificates:** add the PDF to `assets/certificates/`, then add an entry in the `certifications:` list in `data/portfolio-data.js`.

---

## 6. Re-publish after editing
- **Browser way:** go to your repo on GitHub → open the file → click the pencil ✏️ → paste changes → Commit. Or drag-and-drop to replace files.
- **Git way:** `git add . && git commit -m "Update" && git push`

Your live site updates automatically within ~1 minute.

---

## Safety reminder
Keep public content general. Don't publish PLC programs, wiring diagrams, exact CAD dimensions, customer/supplier names, or internal company data. Use cropped photos, renders, or blurred screenshots for sensitive work.


---

## 7. Project cards: rotating images + Images / Videos / Document buttons
Each project card shows its **name**, an **auto-rotating image** (loops through that project's photos), and up to **three buttons** underneath. A button only appears if that content exists.

In `data/portfolio-data.js`, a project can have:
```js
{
  title: "My Machine",
  image: "assets/images/projects-gallery/my-machine/01.jpg",   // first/cover image
  images: [                                                     // rotating set (no duplicates)
    "assets/images/projects-gallery/my-machine/01.jpg",
    "assets/images/projects-gallery/my-machine/02.jpg"
  ],
  videos: [ { youtube: "https://youtu.be/XXXX", title: "Machine running" } ],
  doc: "assets/docs/projects/my-machine.pdf",
  ...
}
```
- **Images button** → opens a popup gallery you can click through. Shows whenever `images` (or at least `image`) exists.
- **Videos button** → opens the YouTube player popup. Appears only after you replace `PASTE_YOUTUBE_LINK_OR_ID` with a real link.
- **Document button** → opens the PDF in a popup. Appears when `doc` is set.

**Rules:**
- Put a project's photos in `assets/images/projects-gallery/<project-name>/` and list them in `images`.
- Do **not** repeat the same image path twice — the rotation skips duplicates anyway, but keep the list clean.
- The first entry in `images` is the cover frame; keep `image` equal to `images[0]`.

# Muditha Priyasad — Engineering Portfolio Website

A static, multi-page portfolio website showcasing mechanical design, industrial automation, machine builds, robotics, and electronics projects. Built with plain HTML, CSS, and JavaScript — no build step required to run.

**Live site:** _enable GitHub Pages (see below) to get your public URL._

## Pages
- `index.html` — home / engineering dashboard
- `projects.html` — filterable project gallery
- `machines.html` — industrial machines worked with
- `gallery.html` — image & **YouTube video** evidence gallery
- `skills.html`, `certifications.html`, `about.html`, `contact.html`

## Editing content
Almost everything is data-driven from one file:

```
data/portfolio-data.js
```

Edit the `projects`, `machines`, `gallery`, `certifications`, and `profile` lists there, then refresh the browser.

## Adding your videos (YouTube)
See **HOW-TO-ADD-YOUTUBE-VIDEOS.md**. Short version: upload to YouTube (Unlisted is fine), copy the link, and paste it into the `youtube:` field of a gallery item in `data/portfolio-data.js`. The site shows a thumbnail and loads the player on click.

## Publish on GitHub Pages
1. Create a new repository on GitHub (Public).
2. Upload the contents of this folder (or push with git).
3. Repo **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, Folder = `/ (root)`, then **Save**.
4. Wait ~1 minute for the URL: `https://YOUR_USERNAME.github.io/REPO_NAME/`

## Notes
- No videos are bundled in this repo (kept small for GitHub). Videos are embedded from YouTube.
- Project/machine cards use real photos where available and clean placeholder diagrams for company-sensitive work.

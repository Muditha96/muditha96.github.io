# Publish Your Portfolio Website on GitHub Pages (Free)

This folder is your complete, ready-to-publish portfolio website. Follow these steps on your computer.

## Option A — Easiest (upload in the browser, no commands)
1. Go to https://github.com/new and create a **Public** repository named e.g. `portfolio` (do not add a README).
2. On the new repo page, click **uploading an existing file**.
3. Open this `portfolio-website-github` folder, select **all files and folders inside it**, and drag them into the browser. Wait for the upload to finish, then **Commit changes**.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**: Source = **Deploy from a branch**; Branch = **main**, folder = **/ (root)**; click **Save**.
6. Wait ~1 minute. Your live site appears at:
   `https://YOUR_USERNAME.github.io/portfolio/`

## Option B — With git (terminal)
Open a terminal **inside this folder**, then:

```bash
git init
git add .
git commit -m "Portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```
Then do steps 4–6 above to turn on GitHub Pages.

## After it's live
- Add your videos: see **HOW-TO-ADD-YOUTUBE-VIDEOS.md**, then re-upload `data/portfolio-data.js` (or push again).
- Edit any text/photos in `data/portfolio-data.js` and re-upload.

## Optional: custom domain
In **Settings → Pages → Custom domain**, enter a domain you own (e.g. `muditha.dev`) and follow GitHub's DNS instructions.

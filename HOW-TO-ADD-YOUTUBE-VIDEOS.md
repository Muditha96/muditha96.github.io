# How to Add Your Videos (YouTube)

Your portfolio embeds videos from YouTube so the GitHub repo stays small and fast.

## Steps
1. **Upload to YouTube.** Sign in at https://youtube.com → Create → Upload video.
   - Visibility: **Unlisted** is perfect for a portfolio (only people with the link can see it; it won't appear in search). **Public** also works.
2. **Copy the link.** On the video page, click **Share** and copy the URL, e.g.
   `https://youtu.be/AbCdEfGhIjK`
3. **Open** `data/portfolio-data.js` in a text editor.
4. Find the **VIDEO GALLERY** section near the top of the `gallery:` list. Each entry looks like:

   ```js
   { title: "CNC Plotter & PCB Drilling Machine", category: "video / automation",
     filter: "video automation machine", youtube: "PASTE_YOUTUBE_LINK_OR_ID",
     alt: "...", text: "..." },
   ```
5. **Replace** `PASTE_YOUTUBE_LINK_OR_ID` with your link (keep the quotes):

   ```js
   youtube: "https://youtu.be/AbCdEfGhIjK",
   ```
   Any of these formats work: full watch URL, `youtu.be` short link, `/shorts/` link, `/embed/` link, or the raw 11-character video ID.
6. **Save** the file and refresh the page (or push to GitHub). The video card shows a thumbnail and plays inline when clicked.

## Tips
- Edit the `title`, `text`, `category`, and `alt` to describe each video.
- To use a custom thumbnail instead of YouTube's, add `image: "assets/images/real/your-photo.jpg"` to the entry.
- Delete any placeholder video entries you don't need.
- The six placeholders provided match your existing machine videos: CNC/PCB drilling, fan base filling, LED bulb assembly, wire stripper, 3D printer, CNC laser.

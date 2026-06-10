# Comments / Recommendations — Setup & Approval Guide

Your portfolio has a **"Leave a comment"** form on the Contact page. People who know your work can submit a comment. **Nothing appears publicly until you approve it** by adding it to your data file. Here's how to turn it on and moderate it.

## Part 1 — Connect the form (one-time, ~5 minutes, free)
The site is static (GitHub Pages), so it needs a free form service to receive submissions by email. We use **Formspree**.

1. Go to **https://formspree.io** and sign up (free) with your email `muditha00@icloud.com`.
2. Click **+ New form**, name it "Portfolio comments".
3. Formspree gives you an **endpoint URL** like:
   ```
   https://formspree.io/f/abcdwxyz
   ```
4. Open `data/portfolio-data.js`, find this line near the bottom:
   ```js
   commentsEndpoint: "",
   ```
   Paste your URL inside the quotes:
   ```js
   commentsEndpoint: "https://formspree.io/f/abcdwxyz",
   ```
5. Save and re-upload `data/portfolio-data.js` to GitHub.

That's it — submissions now arrive in your email (and in your Formspree dashboard).
The free plan allows 50 submissions/month, which is plenty for a portfolio.

> Tip: The first time someone submits, Formspree may email you to confirm the form. Click the confirmation link once.

## Part 2 — Approve a comment (show it on the site)
When you get a comment you want to publish:

1. Open `data/portfolio-data.js` and find the `testimonials:` list near the bottom.
2. Add a new block (copy the sample, keep the comma between entries):
   ```js
   testimonials: [
     { name: "Real Person", role: "Manager at MARQO Industries", message: "Their exact comment text here.", date: "2026" },
     { name: "Sample Reviewer", role: "...", message: "...", date: "2026" }
   ]
   ```
3. Delete the "Sample Reviewer" entry once you have real ones.
4. Save → re-upload `data/portfolio-data.js`. The comment now shows on the Contact page under **Recommendations & comments**.

**You are always in control** — only comments you paste into this list appear. Spam or anything you don't like simply never gets added.

## What visitors fill in
- **Name** (shown)
- **Role / Company** (shown — how they know you)
- **Comment** (shown)
- **Email** (optional, private — only emailed to you so you can verify them; never displayed)

A hidden anti-spam field blocks most bots automatically.

## If you skip Part 1
If `commentsEndpoint` is left empty, the form politely tells visitors to email you instead — so nothing breaks.

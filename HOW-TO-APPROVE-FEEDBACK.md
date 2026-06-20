# How to Approve Feedback (Recommendations)

Your portfolio now uses **Supabase** to store recommendations. Nothing shows on your
site until **you approve it** — and approving is one click, with no code editing.

## How it works
1. A visitor fills the "Leave a comment" form on your Contact page.
2. Their recommendation is saved to your Supabase database with **approved = false** (hidden).
3. You review it and flip **approved → true**.
4. It appears on your live site instantly — no re-upload, no commit needed.

## How to approve (one minute)
1. Go to **https://supabase.com** and sign in (the account this was set up under).
2. Open the **muditha-portfolio** project.
3. Left sidebar → **Table Editor** → open the **feedback** table.
4. You'll see new rows. Read the `name`, `role`, `message` (and private `email`).
5. To publish one: click its **approved** cell and switch it to **true** (checked).
6. Done — it's now live on your site. To reject one, just leave it false or delete the row.

## Notes
- The visitor's **email is private** — it's stored for your reference but never shown on the site.
- Visitors can only submit; they cannot edit, delete, or approve anything (enforced by security rules).
- Free tier is generous; this is plenty for a portfolio.
- Your Supabase project: **muditha-portfolio** (region: Singapore).

## Project keys (already in your site — safe to be public)
- URL: `https://moavlqmeeaozautstdwo.supabase.co`
- Public key: `sb_publishable_USF5QpA9ILbcwtsBogC5DA_j5iEv0aN`
These are in `data/portfolio-data.js`. The public key is designed to be exposed in the
browser — security is enforced by database rules, not by hiding the key.

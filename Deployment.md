# Deploying CompliLedger to Vercel (Non‑Technical Guide)

This guide walks you through deploying the CompliLedger website to Vercel with simple, step‑by‑step instructions. No coding required.

---

## 1) What you need

- A GitHub account (free)
- A Vercel account (free) — sign up at https://vercel.com with your GitHub account
- This project pushed to a GitHub repository

If your code is only on your computer, create a new repo on GitHub and push the project folder `CompliLedger-website/` to it.

---

## 2) Connect the repo to Vercel (main step)

Use this if I’ve shared a GitHub link to the complete codebase with you. You won’t need to type any commands.

1) Open the project in Vercel
- Log in to Vercel → click **New Project**.
- Under **Import Git Repository**, locate the GitHub repo I shared with you and click **Import**.

2) Confirm basic settings (don’t change values unless told)
- **Framework Preset**: Vite
- **Install Command**: `npm install`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Root Directory**: select the folder that contains `index.html` and `package.json`.
  - If the repository has multiple folders, choose the one named `CompliLedger-website`.

3) Deploy
- Click **Deploy**. Vercel will automatically install dependencies, build the site, and publish it.
- Wait 1–2 minutes. You’ll get a live link like: `https://your-project-name.vercel.app`

4) Save the link and share
- Copy the URL from the success screen. This is your live website.
- Optional: click **Visit** to open it in a new tab.

Notes
- If any setting isn’t auto-filled, type it exactly as shown above.
- If you later see a white page on refresh on routes like `/about`, add the rewrite rule from Section 3 (one-time fix).

---

## 3) Single-Page App (React Router) routing

This project uses React Router. To make sure all routes (e.g., `/about`, `/blog`) work on refresh, add a rewrite rule so Vercel serves `index.html` for any unknown path.

Option A — Recommended (add `vercel.json`):

Create a file named `vercel.json` in the project root with:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
Commit and push to GitHub. Vercel will redeploy automatically.

Option B — Vercel UI:
- Go to Project → Settings → Functions/Routes (or Rewrites) → Add a rewrite:
  - Source: `/(.*)`
  - Destination: `/index.html`

---

## 4) Favicon and page title

Already configured in `index.html`. If you change the favicon file in `public/` (e.g., `favicon.ico`), update the link tags in `index.html` and redeploy. Browsers cache favicons — open DevTools and hard‑reload if you don’t see the new icon.

---

## 5) Environment variables (if needed later)

This site doesn’t require any secrets by default. If you add APIs later:
- Go to Project → Settings → Environment Variables
- Add your variables (e.g., `API_KEY`)
- Trigger a redeploy (Vercel does this automatically on push)

---

## 6) Custom domain (optional)

1. In Vercel, open your project → Settings → Domains.
2. Add your domain (e.g., `compliledger.com`).
3. Follow Vercel’s DNS instructions (either Nameservers or A/ALIAS/CNAME records at your domain registrar like GoDaddy/Namecheap).
4. Wait for propagation — Vercel will auto‑issue SSL (https) certificates.

---

## 7) Preview deployments (recommended)

Every GitHub pull request gets its own Preview URL automatically. Share the Preview link with teammates to review changes before they go live.

To make previews private: Project → Settings → Git → “Protect previews with a password”.

---

## 8) Common issues & fixes

- White page on refresh for nested routes:
  - Add `vercel.json` rewrite (see Section 3).
- Build fails on Vercel:
  - Ensure the root directory contains `package.json` and `index.html`.
  - Make sure you can run locally: `npm install` then `npm run build`.
- Favicon or title not updating:
  - Add a version query (e.g., `/favicon.ico?v=5`) in `index.html` and hard refresh.
- 404 on direct URL (e.g., `/about`):
  - Missing SPA rewrite. Add `vercel.json` as above.

---

## 9) How to update the site

- Make changes locally → commit → push to GitHub → Vercel redeploys automatically.
- Or edit directly on GitHub (small changes) → commit to `main` → redeploys automatically.

---

## 10) Roll back to a previous version

- In Vercel → Deployments → find a previous deployment → click the 3 dots → “Promote to Production”.

---

## 11) Support checklist

- Can you run `npm run build` locally without errors?
- Is the project imported with the correct root directory on Vercel?
- Do routes refresh correctly? If not, add the rewrite.
- Is the custom domain verified and pointing to Vercel?

You’re done! Your CompliLedger site should now be live and easy to update. If you want, share your Vercel project link and I can verify settings or set up the `vercel.json` file for you.

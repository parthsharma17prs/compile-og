# Cal.com Scheduling Integration Guide

This document explains how to configure, customize, and deploy the Cal.com scheduling modal used on the Demo page.

## Overview
- The booking experience is implemented as a Radix UI Dialog with an iframe to your Cal.com event type.
- Code location: `src/pages/Demo.tsx` (look for the comment "Booking Modal").
- The booking URL comes from the environment variable `VITE_CALCOM_URL`.

## Quick Start
1. Create or edit `.env` at the project root:

   ```bash
   VITE_CALCOM_URL=https://cal.com/<your-handle>/<event-type>
   ```
2. Restart the dev server so Vite picks up the new env:

   ```bash
   npm run dev
   ```
3. Visit the Demo page, fill the form, and click Schedule — the modal should open.

## Switching Cal.com Accounts
- Replace the value of `VITE_CALCOM_URL` with the new account’s booking link (from Cal.com → Event Type → Share/Copy Link).
- No code changes are required if only the URL changes.
- Optional: If you want the app to show the current org or event name in the UI, update the label in the top bar of the modal inside `src/pages/Demo.tsx`.

## Allowed Domains (Iframe)
- If the iframe shows a blank page or doesn’t load in production, Cal.com may be blocking embedding via `frame-ancestors`.
- In Cal.com:
  - Settings → Security/Developer → Allowed Embed Domains or Frame Ancestors
  - Add your domains (e.g., `https://yourdomain.com`, `https://*.vercel.app`).
- For local dev, embedding should work without allowlist, but confirm if needed: add `http://localhost:5173` (or your dev port).

## Prefilling Fields (optional)
`src/pages/Demo.tsx` constructs a `bookingUrl` with query params from the form. Supported params include:
- `name` (first + last)
- `email`
- `company`
- `job_title`
- `notes`

Example final URL (constructed automatically):
```
${VITE_CALCOM_URL}?name=Jane%20Doe&email=jane@acme.com&company=Acme&job_title=CTO&notes=Interested%20in%20a%20pilot
```

## Sizing and Layout
In `src/pages/Demo.tsx`, adjust the dialog container classes to change the modal size/aspect:
- Landscape default:
  ```tsx
  <DialogContent className="w-[96vw] sm:w-[94vw] md:w-[92vw] lg:w-[90vw] max-w-5xl h-[68vh] md:h-[70vh] p-0 overflow-hidden">
  ```
- Examples:
  - Smaller: `max-w-3xl h-[65vh]`
  - Larger: `max-w-6xl h-[80vh]`
  - Fullscreen: `w-screen h-screen max-w-none rounded-none`

The iframe inside uses `w-full h-full` so it always fills the container.

## Close Button and Accessibility
- The modal includes a clear close (X) button.
- We include visually hidden `DialogTitle` and `DialogDescription` to satisfy Radix accessibility requirements.
- You can change the title text in the top bar and/or adjust styles (e.g., white bar with `bg-white`, border or shadow).

## Environment Management
- Vite only reads env at startup. Restart your dev server after editing `.env`.
- For Vercel:
  - Go to Project → Settings → Environment Variables
  - Add `VITE_CALCOM_URL` for each environment (Production/Preview/Development)
  - Redeploy to apply.
- For Netlify:
  - Site settings → Build & deploy → Environment
  - Add `VITE_CALCOM_URL`, then trigger a deploy.

## Deployment Notes
- The app is a Vite + React + TypeScript project; standard Vercel deployment works out of the box.
- Ensure your production domain is added in Cal.com allowed embed domains.
- Mixed content warnings can occur locally if your site is `http://` and the iframe is `https://` — this is safe to ignore in development. In production, use `https://` for your site.

## Troubleshooting
- Nothing happens on click:
  - Ensure required form fields are valid.
  - Confirm `import.meta.env.VITE_CALCOM_URL` is defined (restart dev server after editing `.env`).
- Modal opens but iframe is blank:
  - Check browser console for `frame-ancestors`/CSP errors.
  - Add your domain(s) to Cal.com allowed embed list.
- A11y warnings about DialogTitle/Description:
  - We already include visually hidden components. If you customize, keep a title/description present or screen-reader-only.
- Source map 404s in console:
  - These are dev-only warnings from third-party bundles. They don’t affect functionality and won’t appear in production builds.

## Where to Change Things
- Booking URL: `.env` → `VITE_CALCOM_URL`
- Modal size/style: `src/pages/Demo.tsx` → `DialogContent` className and top bar section
- Fallback behavior (open new tab): add a button or link near the close button:
  ```tsx
  <a href={bookingUrl} target="_blank" rel="noreferrer" className="text-sm underline">
    Open in new tab
  </a>
  ```

## Future Enhancements (optional)
- Use Cal.com Webhooks to listen for bookings and trigger internal workflows.
- Initialize Cal.com embed script for advanced callbacks.
- Persist form data in localStorage so returning users don’t retype.

---
If you change accounts or deploy to a new domain, update `VITE_CALCOM_URL` and allowed embed domains. That’s it.

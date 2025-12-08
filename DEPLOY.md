## Deployment and Backend Connection

This file explains how to connect the frontend to the Supabase backend, run a production build, and deploy using GitHub Actions → Netlify (the repo already contains a `deploy-netlify.yml` workflow).

Important environment variables (GitHub Secrets):

- `VITE_SUPABASE_URL` — Your Supabase project URL (starts with `https://...`)
- `VITE_SUPABASE_ANON_KEY` — Your Supabase anon/public key
- `NETLIFY_AUTH_TOKEN` — Netlify personal access token (for the Netlify Actions deployment)
- `NETLIFY_SITE_ID` — Netlify site ID (found in Site settings → Site information)

Add these in GitHub: Repository → Settings → Secrets and variables → Actions → New repository secret.

CI / Build notes
- The CI workflow will include `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` into the build if they are present as GitHub Secrets, so production bundles will be configured for your Supabase project.
- If those `VITE_` secrets are missing, the app currently falls back to an internal mock Supabase-like client and the `useApi` hooks return mock data (this enables local preview without a backend).

Netlify deploy workflow
- The Netlify workflow (`.github/workflows/deploy-netlify.yml`) will fail early if `NETLIFY_AUTH_TOKEN` or `NETLIFY_SITE_ID` are missing.
- The workflow also warns when `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` are not set — the site will still build but in mock mode.

Manual local build & preview
1. Install deps:
```powershell
npm ci
```
2. Build production:
```powershell
npm run build
```
3. Preview locally (Vite):
```powershell
npm run preview
```
or serve `dist/` with a static server:
```powershell
npx http-server .\dist -p 5173
```

Quick checklist before enabling live backend and automatic deploys:
1. Create a Supabase project and copy the `URL` and `anon` key.
2. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` as GitHub Secrets.
3. In Netlify, create a site (or use existing) and add `NETLIFY_AUTH_TOKEN` (from your Netlify personal tokens) and `NETLIFY_SITE_ID` as GitHub Secrets.
4. Push to `main` to trigger the `deploy-netlify.yml` workflow. The workflow will build and deploy `dist/` to Netlify.

If you want, I can:
- add a small banner in the UI indicating "Mock mode" when Supabase envs are missing,
- or add a separate GitHub Actions job that writes a `build-info.json` manifest with environment indicators into `dist/` so the deployed site reports whether it was built with real Supabase envs.

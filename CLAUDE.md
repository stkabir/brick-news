# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server (localhost:4321)
pnpm build        # Production build
pnpm preview      # Preview built output
```

No test runner is configured. No linter is configured.

## Architecture

**Stack:** Astro 5 (SSR) + TailwindCSS 4 + `@astrojs/node` standalone adapter. No React — all UI is Astro components with vanilla JS `<script>` blocks.

**Data source:** All content comes from a Laravel REST API at `LARAVEL_API_URL` (default: `http://127.0.0.1:8000`). There is no local content layer. The `src/utils/api.ts` module exports typed fetch helpers (`getArticles`, `getArticle`, `getCategories`, `getSections`) used in every page's frontmatter.

**Bilingual system:** Every piece of user-visible text exists in two fields: `titleEn`/`titleEs`, `summaryEn`/`summaryEs`, etc. Locale is toggled client-side via `data-locale` on `<html>`. CSS shows/hides `.lang-en` / `.lang-es` spans accordingly. The active locale is persisted in `localStorage` under key `brickell-news-locale`.

**Pages:**
- `src/pages/index.astro` — Homepage with hero grid, banner, "More News", and trending carousel (Splide.js)
- `src/pages/[category]/index.astro` — Category listing page
- `src/pages/[category]/[slug].astro` — Article detail page
- `src/pages/api/health.ts` — `GET /api/health` endpoint
- `src/pages/api/debug.json.ts` — Debug endpoint

**Layout:** `src/layouts/BaseLayout.astro` is the single shared layout. It handles the header (logo, nav, search box, lang toggle, mobile menu), footer, newsletter strip, Astro `<ClientRouter>` (view transitions with `fade()`), and the inline `<script>` for locale toggling, mobile menu, and search.

**Search:** Header search box calls `GET /api/search?q=` on the Laravel API (proxied through `LARAVEL_API_URL`). Results render in a dropdown via DOM manipulation in the inline script.

**Styling:** TailwindCSS 4 via `@tailwindcss/vite` plugin — no `tailwind.config.js`. Custom design tokens are defined in `src/styles/global.css` under `@theme {}`. The site has a newspaper aesthetic with paper/ink color palette and Playfair Display / Source Sans 3 typography.

**Middleware:** `src/middleware.ts` adds security headers to every response (CSP-adjacent headers, HSTS, etc.). No auth is implemented in the frontend — auth for admin routes (if any) lives in the Laravel backend.

**Deployment:** Docker single-stage build (Node 22 alpine), exposes port 4321, runs `node ./dist/server/entry.mjs`. Deployed to Dokploy on GoDaddy VPS via the `main` branch for production and `dev` branch for development. Domain: `brickell.news` (production) and `dev.brickell.news` (development).

## Key env var

`LARAVEL_API_URL` — base URL for the backend API, used at build time and runtime. Set this in `.env` for local dev pointing to a running Laravel instance.

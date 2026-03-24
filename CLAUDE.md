# CLAUDE.md — Portfolio Codebase Context

## Overview
Static portfolio site: Astro 5.x + Tailwind CSS v4 + TypeScript. No React/Vue — pure `.astro` components with vanilla JS for interactivity. Deployed as a Docker container (Nginx) behind a Caddy reverse proxy on Oracle Cloud.

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Build static site to `dist/`
- `npm run preview` — Preview built site
- `./build.sh` — Build Docker image and push to ghcr.io/pman47/portfolio

## Architecture

### Content
All site content is in `src/data/site.ts` — a single file with hardcoded data (experiences, projects, skills, education, social links, site config). To change content, edit this file only.

### Styling
Tailwind v4 with NO `tailwind.config.js`. All theming is via `@theme {}` in `src/styles/global.css`:
- Custom colors: `--color-ember`, `--color-bg-deep`, `--color-bg-surface`, `--color-forge-red`, `--color-spark`
- Font families: `--font-display` (Space Grotesk), `--font-sans` (Inter), `--font-mono` (JetBrains Mono)
- Uses `@tailwindcss/vite` plugin, NOT `@astrojs/tailwind`

### Interactive Effects
All JS is consolidated in a single `<script>` block in `src/layouts/BaseLayout.astro`:
- `body::before` + `--mouse-x`/`--mouse-y` — mouse spotlight
- `[data-scroll-progress]` — scroll progress bar
- `[data-reveal]` / `[data-reveal-stagger]` — IntersectionObserver scroll animations
- `[data-tilt]` — 3D perspective card tilt on hover
- `[data-magnetic]` — button follows cursor
- `[data-typewriter]` — character-by-character typing

### Page Structure
Single page (`src/pages/index.astro`) with stacked sections:
Hero → About → Experience → Skills → Projects → Education → Contact

### Components
- `src/components/sections/` — Full-width page sections (7 files)
- `src/components/` — Reusable cards, badges, links (6 files)
- All components are `.astro` files, no client-side framework components

## Conventions
- Inline SVG icons (no icon library)
- `data-*` attributes for JS hooks (not classes)
- CSS animations defined in `global.css`, not in components
- Path alias: `@/*` maps to `src/*`
- All interactive effects use CSS transforms (GPU-accelerated)

## Deployment
- **Dockerfile**: Multi-stage (node:20-alpine build → nginx:1.27-alpine serve)
- **docker-compose.yml**: Pulls from GHCR, port 6969:80, shared `web` Docker network
- **caddy/**: Reverse proxy with auto HTTPS for pman47.cc
- **nginx.conf**: Gzip, caching (1yr immutable for `/_astro/`, 10min for HTML), security headers

## Key Files
- `src/data/site.ts` — ALL content lives here
- `src/styles/global.css` — Theme tokens, animations, utility classes
- `src/layouts/BaseLayout.astro` — Layout + all JS interactions
- `src/pages/index.astro` — Page composition (imports all sections)
- `nginx.conf` — Production Nginx config
- `build.sh` — Docker build + GHCR push script

# Manish Prajapati — Portfolio

Personal portfolio site built with Astro 5 and Tailwind CSS v4, featuring a warm dark "Forge" theme with interactive effects.

**Live**: [pman47.cc](https://pman47.cc)

## Tech Stack

- **Astro 5.x** — Static site generation (SSG)
- **Tailwind CSS v4** — Utility-first CSS with `@theme` config (no `tailwind.config.js`)
- **TypeScript** — Type-safe content and configuration
- **Vanilla JS** — All interactivity without frameworks
- **Docker + Nginx** — Containerized deployment
- **Caddy** — Reverse proxy with automatic HTTPS

## Features

### Design — "Forge" Theme
- Warm dark palette: charcoal (#0D0B09), ember (#E8913A), forge-red (#C75B3A), spark (#FFD699)
- Typography: Space Grotesk (headings), Inter (body), JetBrains Mono (mono)
- Full-width stacked sections with gradient dividers

### Interactive Effects
| Effect | Trigger | Description |
|--------|---------|-------------|
| Mouse Spotlight | Cursor move | Radial gradient glow following the cursor |
| Scroll Progress | Page scroll | Top progress bar showing scroll position |
| Scroll Reveal | Scroll into view | Elements fade/slide in via IntersectionObserver |
| 3D Card Tilt | Hover on cards | Perspective transform tracking cursor position |
| Magnetic Button | Hover on CTA | Button follows cursor with dampened movement |
| Typewriter | Page load | Character-by-character tagline typing |

### Performance
- Static HTML pre-rendered at build time
- Gzip compression (level 6)
- Aggressive caching: 1 year for hashed assets, 10 min for HTML
- Security headers: X-Content-Type-Options, X-Frame-Options, Referrer-Policy
- Final Docker image: ~45MB (nginx:alpine)

## Project Structure

```
src/
  data/site.ts              — All content (experiences, projects, skills, etc.)
  styles/global.css         — Tailwind @theme tokens, animations, effects
  layouts/BaseLayout.astro  — HTML layout + all JS interactions
  pages/index.astro         — Single page: Hero → About → Experience → Skills → Projects → Education → Contact
  components/
    sections/               — Hero, About, Experience, Skills, Projects, Education, Contact
    ExperienceCard.astro    — Timeline card with tech stack badges
    ProjectCard.astro       — 3D tilt card with links
    SkillBadge.astro        — Interactive skill pill
    SocialLink.astro        — Icon button (GitHub, LinkedIn, Email)
    SEOHead.astro           — Meta, Open Graph, Twitter Card tags
    Footer.astro            — Simple footer

caddy/
  Caddyfile                 — Reverse proxy config (pman47.cc → portfolio:80)
  docker-compose.yml        — Caddy container

Dockerfile                  — Multi-stage: node:20-alpine build → nginx:1.27-alpine serve
docker-compose.yml          — Portfolio container (GHCR image, port 6969)
nginx.conf                  — Gzip, caching, security headers
build.sh                    — Build and push Docker image to GHCR
```

## Getting Started

### Prerequisites
- Node.js 20+
- npm

### Development
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
npm run preview
```

### Editing Content
All site content lives in `src/data/site.ts`. Edit experiences, projects, skills, education, and personal info there — no need to touch component files.

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for the full deployment guide.

### Quick Reference
```bash
# Build and push Docker image to GHCR
./build.sh

# On server: pull and run
docker compose pull && docker compose up -d
```

### Infrastructure
- **Server**: Oracle Cloud VPS (Ubuntu)
- **Domain**: pman47.cc (Hostinger DNS → A record to server IP)
- **HTTPS**: Caddy with automatic Let's Encrypt certificates
- **Registry**: GitHub Container Registry (ghcr.io/pman47/portfolio)

## License

This project is personal and not licensed for redistribution.

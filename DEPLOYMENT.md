# Deployment Guide

## Architecture

```
Browser --> Caddy (ports 80/443, auto HTTPS) --> Portfolio (Nginx, port 80 internal)
                  |                                    |
                  |-- Let's Encrypt SSL cert           |-- Static Astro build
                  |-- Redirects www -> root             |-- Gzip, caching, security headers
                  |-- Redirects HTTP -> HTTPS
```

- **Domain**: pman47.cc (Hostinger)
- **Server**: Oracle Cloud VPS (144.24.126.230, Ubuntu)
- **Registry**: GitHub Container Registry (ghcr.io/pman47/portfolio)

## Docker Setup

### Images
| Container | Image | Port | Purpose |
|-----------|-------|------|---------|
| portfolio | ghcr.io/pman47/portfolio:latest | 6969:80 | Nginx serving static Astro build |
| caddy | caddy:2-alpine | 80:80, 443:443 | Reverse proxy + auto HTTPS |

### Shared Network
Both containers communicate via the `web` Docker network. Caddy proxies `pman47.cc` to `portfolio:80`.

### Files
```
portfolio/
  Dockerfile          - Multi-stage: node:20-alpine builds, nginx:1.27-alpine serves
  docker-compose.yml  - Portfolio container config (pulls from GHCR)
  nginx.conf          - Gzip, caching (1yr for /_astro/, 10min for HTML), security headers
  build.sh            - Builds and pushes Docker image to GHCR
  .dockerignore       - Excludes node_modules, .git, dist from build context
  caddy/
    Caddyfile           - Reverse proxy config + www redirect
    docker-compose.yml  - Caddy container config
```

## How to Deploy (First Time)

### 1. DNS (Hostinger)
- A record: `@` -> `144.24.126.230` (TTL 3600)
- CNAME: `www` -> `pman47.cc` (already exists)

### 2. Oracle Cloud Security List
Open ingress rules for ports: **80**, **443**, **6969** (TCP, source 0.0.0.0/0)

### 3. GHCR Login (Local Machine, One-Time)
```bash
# Create a GitHub PAT with write:packages scope at:
# https://github.com/settings/tokens
echo <YOUR_TOKEN> | docker login ghcr.io -u pman47 --password-stdin
```

### 4. Build & Push (Local Machine)
```bash
./build.sh
```

### 5. Server Setup
```bash
# Create shared Docker network
sudo docker network create web

# Start portfolio
cd ~/projects/portfolio
sudo docker compose up -d

# Start Caddy (handles HTTPS automatically)
cd ~/projects/caddy
sudo docker compose up -d
```

## How to Update (After Code Changes)

### Local Machine
```bash
./build.sh
```

### Server
```bash
cd ~/projects/portfolio
sudo docker compose pull
sudo docker compose up -d
```

## Useful Commands

```bash
# View running containers
sudo docker ps

# View portfolio logs
sudo docker logs portfolio

# View Caddy logs
sudo docker logs caddy

# Check health status
sudo docker inspect --format='{{.State.Health.Status}}' portfolio

# Check which containers are on the web network
sudo docker network inspect web --format '{{range .Containers}}{{.Name}} {{end}}'

# Restart portfolio
sudo docker restart portfolio

# Full rebuild on server
sudo docker compose pull && sudo docker compose up -d --force-recreate

# Check image sizes
sudo docker images

# Remove unused images to free space
sudo docker image prune -f
```

## Caching Strategy (nginx.conf)

| Path | Cache Duration | Rationale |
|------|---------------|-----------|
| `/_astro/*` | 1 year (immutable) | Filenames are content-hashed, safe to cache forever |
| `*.svg, *.pdf, *.txt` | 1 hour | Static root assets, not hash-versioned |
| HTML pages | 10 minutes | Need to pick up new deploys relatively quickly |

## Troubleshooting

### Container shows "unhealthy"
```bash
sudo docker inspect --format='{{json .State.Health}}' portfolio | python3 -m json.tool
```

### Caddy can't reach portfolio
Ensure both are on the `web` network:
```bash
sudo docker network inspect web
```

### DNS not resolving
Check propagation: `dig pman47.cc` or use https://dnschecker.org

### Port not accessible
Oracle Cloud has two firewalls:
1. **Security List** (cloud console) - ingress rules
2. **iptables** (OS level) - Docker handles this automatically via FORWARD chain; server reboot applies rules

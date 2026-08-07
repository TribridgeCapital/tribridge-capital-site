# Agent notes — Tribridge Capital site

This repo is a **Next.js static-export** site hosted on **GitHub Pages** (same pattern as mileclerk-site).

- Live app: repository root (`src/`, `public/`, `next.config.ts`)
- Archive: [`legacy/lovable-tanstack/`](legacy/lovable-tanstack/) — previous Lovable / TanStack Start project; not deployed
- Deploy: `.github/workflows/deploy.yml` on push to `main`

**Disconnect Lovable in the Lovable UI** (agents cannot do this). Then do not reconnect it to this repository — Git sync would fight the static Next.js stack. If Lovable is needed again, use a separate repository.

Preserve 506(b) constraints: `noindex` / `nofollow` and disallow-all robots.

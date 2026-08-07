# Tribridge Capital site

This repository is a **Next.js static-export** marketing site for Tribridge Capital, deployed via **GitHub Actions → GitHub Pages**.

It is no longer a Lovable-managed project. The previous Lovable / TanStack Start snapshot is archived under [`legacy/lovable-tanstack/`](legacy/lovable-tanstack/).

**Manual step:** Disconnect GitHub sync in the Lovable project UI (this cannot be done from the repo). Do not reconnect Lovable to this repository without creating a new repo first — two-way sync would overwrite the static stack.

## Stack

- Next.js (App Router) + React 19
- Material UI 5 + Emotion
- TypeScript
- Static export (`output: "export"`) → `out/`
- GitHub Pages via `.github/workflows/deploy.yml`

## Development

```sh
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```sh
npm run build   # writes static site to out/
npm run lint
```

## Deployment

Pushes to `main` build and deploy automatically.

**GitHub Pages settings (required once):**

1. Repository → **Settings → Pages**
2. **Build and deployment → Source:** GitHub Actions (not “Deploy from a branch”)
3. Custom domain: `tribridge.capital` (already configured in DNS; re-verify after the first Actions deploy)
4. Enable **Enforce HTTPS** when the certificate is ready

## Compliance

This site is for a 506(b) fund and is not supposed to publicly solicit. The site is `noindex, nofollow` and `robots.txt` disallows all crawlers. Keep those settings when editing.

## Archive

See [`legacy/lovable-tanstack/README.md`](legacy/lovable-tanstack/README.md) for the frozen Lovable TanStack Start source and binary assets (logo, partner photos).

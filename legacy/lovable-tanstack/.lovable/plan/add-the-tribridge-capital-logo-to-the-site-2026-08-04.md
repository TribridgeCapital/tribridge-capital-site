# Add the Tribridge Capital logo to the site

The deck contains the gold bridge + wordmark logo on a navy field. Extract it, clean it up, and use it as the site's visual mark.

## What changes

1. **Extract the logo** from the presentation's embedded media and remove its navy background so it sits cleanly on any section (transparent PNG). Register it as a hosted asset so no binary lives in the repo.
2. **Header** — replace the text "Tribridge / Capital" lockup with the logo mark at a small, restrained height (~32px), keeping the same link to the top of the page. Text wordmark remains as the image `alt` for accessibility.
3. **Hero** — no logo (keeps the hero typographic and uncluttered), unless you'd prefer it there.
4. **Footer** — small logo above the contact line, muted opacity, for a closing brand signature.
5. **Favicon** — generate a square, padded version of the bridge mark and set it as the site favicon, replacing the default.

## Compliance note

The logo is firm-level branding (Tribridge Capital), so it does not change the 506(b) posture of the page. `noindex` and `robots.txt` stay as-is.

## Technical details

- Unzip `ppt/media/image2.png` from the uploaded `.pptx`, trim and background-remove into a transparent PNG.
- Upload via `lovable-assets create` → `src/assets/tribridge-logo.png.asset.json`; import the pointer and use `.url` in `site-header.tsx` and `contact-footer.tsx`.
- Favicon: downscale to a padded 64x64 `public/favicon.png`, reference from `head().links` in `src/routes/__root.tsx`, delete `public/favicon.ico`.

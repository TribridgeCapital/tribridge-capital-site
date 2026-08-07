# Brighter body text site-wide

Section headings use the full-brightness foreground color (near-white `#F2F4F8`). Most body copy uses a dimmer muted tone (~78% lightness), which reads low-contrast on the deep navy background — noticeably so for the focus/approach/team paragraphs, the legal block, and the footer line.

## What changes

1. **Raise the muted text token.** In `src/styles.css`, lift `--muted-foreground` from `oklch(0.78 0.012 260)` to about `oklch(0.90 0.010 260)`. This single change brightens every paragraph, bio, and caption across Focus, Approach, Team, Contact, Footer, and Hero at once, while staying a step below headings so hierarchy is preserved.

2. **Promote the lead paragraphs to full foreground.** The one-line intro under each section heading (Focus, Approach, Team) and the hero subhead move to the heading-level text color at slightly reduced opacity (`text-foreground/90`), so the top of each section reads as bright as its title.

3. **Brighten the small caps label.** `label-caps` currently uses the muted gold (`--gold-muted`); switch it to the full `--gold` used by section accents so "General Partner" and "Legal" don't look washed out.

4. **Legal / footer copy** stays on the muted token, which is now brighter — no separate override needed.

## Result

Every text element lands in one of three brightness levels: headings and lead paragraphs at full foreground, supporting copy at the new brighter muted tone, gold accents at full gold. Nothing drops below a comfortable contrast ratio on the navy background.

## Technical notes

- Files: `src/styles.css` (token values), `src/components/hero.tsx`, `focus.tsx`, `approach.tsx`, `team.tsx` (lead paragraph classes only).
- No hardcoded colors; all changes go through existing semantic tokens.

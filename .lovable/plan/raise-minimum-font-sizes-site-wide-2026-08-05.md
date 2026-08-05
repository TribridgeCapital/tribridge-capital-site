# Raise minimum font sizes site-wide

Smallest text today is 11px (`label-caps`) and 12px (`text-xs` legal/footer copy) — below the 11pt (~15px) floor requested. Body copy sits at 14px.

## Changes

**New floor: nothing smaller than ~15px.**

- `label-caps` utility in `src/styles.css`: 11px → 15px, with slightly reduced letter-spacing so the wider glyphs stay tidy.
- Footer legal paragraph and copyright line (`contact-footer.tsx`): `text-xs` → `text-base` (16px).
- All body/intro paragraphs currently `text-sm` (hero sub-copy, focus, approach, team intros, partner bios, credentials, address): → `text-base` (16px), keeping existing `md:` bumps where present.
- Header nav links and "Get in touch" link: `text-sm` → `text-base`.
- Hero CTA button labels: `text-sm` → `text-base`.
- Partner email links and section body copy: `text-sm` → `text-base`.

## Additional proposed adjustments for balance

Once body copy is 16px, a few headings need a nudge so hierarchy stays clear:

- Focus / Approach / Team card headings (`text-xl`) → `text-2xl`.
- Approach numeral markers (`text-2xl`) → `text-3xl` to stay proportional.
- Section headings (`text-3xl`) → `text-3xl md:text-4xl` so they still read as the top level on desktop.
- Hero: leave the 5xl/7xl H1 and 2xl fund line as-is; bump the hero support paragraph to `text-base md:text-lg`.

No copy, layout, or color changes.

# Unify page background

The hero uses the deeper navy (page background), while later sections use a slightly lighter navy. Make every section match the hero.

## Changes

- `src/components/focus.tsx`, `src/components/approach.tsx`, `src/components/team.tsx`, `src/components/contact-footer.tsx`: replace `bg-navy` with `bg-background` (the deep navy used behind the hero).
- `src/components/approach.tsx`: the numbered belief grid uses `bg-border` gaps with `bg-navy` cells — switch cells to `bg-background` so the hairline grid still reads but the fill matches.

Header, gold accents, and hairline borders stay as they are, so the site keeps one continuous navy canvas top to bottom.

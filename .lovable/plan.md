# Make section headings consistent

The Approach section is the odd one out: it opens with a small all-caps "Approach" eyebrow plus a large serif sentence in a two-column intro block, while Focus, Team, and Contact all open with a plain serif heading followed by a short intro paragraph.

## Change

Bring Approach in line with the other sections:

- Replace the "Approach" eyebrow + long serif sentence with a single serif heading: `Approach` (same size/weight as "Core focus areas", "General partners", "Contact").
- Move "Where scientific and technical depth meet scalable markets." into the intro paragraph, merged with the existing "Five beliefs shape every decision..." line, styled like the Focus intro paragraph.
- Drop the two-column intro grid so the heading and intro stack left-aligned like the other sections; keep the numbered five-belief grid and the geography line below unchanged.

Then verify the other three: Focus, Team, and Contact headings already share `font-display text-3xl text-foreground` — keep them, and align the intro paragraph spacing/size across all four sections so they match.

## Technical notes

- Edit `src/components/approach.tsx` only for the structural change; small class tweaks in `focus.tsx`, `team.tsx`, `contact-footer.tsx` if intro spacing differs.
- No content beyond the reflowed subtitle text changes; no offering language added.

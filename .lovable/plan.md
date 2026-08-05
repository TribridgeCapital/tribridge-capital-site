# Center the hero within the same content column as other sections

On wide screens the hero content hugs the left edge because it has no centered max-width container, while Focus, Approach, Team, and Contact all wrap their content in `mx-auto max-w-6xl`.

## Change

- In `src/components/hero.tsx`, wrap the hero text block in a `mx-auto w-full max-w-6xl` container so it aligns to the same centered column as every other section.
- Keep the existing inner max-widths for the headline and paragraphs so line lengths stay unchanged.
- Leave the background gradient full-bleed across the section.

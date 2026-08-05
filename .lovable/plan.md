# Remove gold dash markers from section headings

Delete the short gold rule that sits to the left of each section heading, so headings start flush with the section's left margin.

## Changes

- `src/components/focus.tsx` — remove the gold dash span before "Core focus areas" and drop the now-unneeded flex wrapper.
- `src/components/team.tsx` — same for "General partners".
- `src/components/contact-footer.tsx` — same for "Contact".
- `src/styles.css` — remove the unused `rule-gold` utility (no longer referenced anywhere).

## Not changed

- The "Approach" heading uses a small caps label, not a dash, so it stays as is.
- Full-width hairline dividers between sections remain.

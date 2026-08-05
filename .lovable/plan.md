# Consistent layout + full GP bios

## 1. Align every section to one column

Today the sections don't share a column:

- Focus, Team, Contact, Footer: page padding sits outside the max-width wrapper, so content is a full 1152px wide.
- Approach: padding sits inside the wrapper, so its content is ~960px on large screens — visibly narrower.
- Header: only has small side padding, so the logo/nav sit wider than everything below.

Fix: use one shared pattern everywhere — `px-6 lg:px-24` on the outer band, then `mx-auto max-w-6xl` inside. Applies to hero, focus, approach, team, contact, footer, and the header bar, so the logo, all headings, and all body copy line up on the same left and right edges at any screen width.

Vertical rhythm also gets normalized: `py-24 lg:py-32` for content sections.

## 2. Remove GP portraits

Drop both headshots from the Team section, along with the image column. Each partner becomes a single full-width text block under the shared column, keeping the name, credentials, "General Partner" label, and email link. The image asset pointers stay in the repo but are no longer referenced.

## 3. Full bios

Replace the shortened bios with the complete three-paragraph text supplied for each partner, verbatim:

- David Hui Shao, PhD, MBA, CFA, CPA — Kamunting/Mehta background paragraph, CFO/CEO/CBO paragraph, credentials paragraph.
- Harry Huang, PhD, MBA — role/background paragraph, Amazon/AWS/EV/Bloomberg paragraph, credentials paragraph.

Long paragraphs get a readable measure (max ~72ch) so lines don't run the full width.

## Technical notes

- Files: `src/components/site-header.tsx`, `hero.tsx`, `focus.tsx`, `approach.tsx`, `team.tsx`, `contact-footer.tsx`.
- No data/backend changes; presentation and copy only.

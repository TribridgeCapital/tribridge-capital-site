# Update landing page title to mention fund name

Change the public landing page title to include the fund name as requested, while keeping the rest of the page in firm-level compliance posture.

## Changes

- Update `src/routes/index.tsx`:
  - Set page `title` to: `Tribridge Capital | Tribridge Pioneer Opportunity Fund`
  - Update `og:title` to match the new title
  - Leave all other meta tags, description, robots, canonical, and JSON-LD unchanged

## What stays the same

- No offer language, terms, minimums, or performance claims on the page
- `robots: noindex, nofollow` and `public/robots.txt Disallow: /` remain in place
- All other sections (Hero, Philosophy, Focus, Approach, Team, Contact/Footer) remain unchanged

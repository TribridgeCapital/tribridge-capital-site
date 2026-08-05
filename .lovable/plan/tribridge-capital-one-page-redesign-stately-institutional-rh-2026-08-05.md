# Tribridge Capital — one-page redesign (Stately institutional rhythm)

Rebuild the existing single-page site to match the new brief and the chosen design direction, keeping 506(b) constraints intact.

## Design system (locked)

- Surfaces: base navy `#102033`, raised navy `#1A2C45`, text `#F2F4F8`
- Accent: gold `#FFC000` (rules, numerals, primary button)
- Type: Libre Baskerville headings, IBM Plex Sans body (already loaded)
- Layout: full-width stacked bands, hairline dividers, generous vertical rhythm
- Tokens updated in `src/styles.css` — no hardcoded hex in components

## Page structure

1. **Header** — Tribridge Capital logo + anchor nav: Focus · Approach · Team · Contact
2. **Hero** — gold eyebrow "Tribridge Pioneer Opportunity Fund", Libre Baskerville "Tribridge Capital" wordmark, subhead ("A New York–based investment firm focused on sought-after pre-IPO and IPO technology unicorns, artificial intelligence, and biotechnology."), investor supporting line, CTAs: solid gold "Get in touch" → Contact, outlined "Our approach" → Approach
3. **Focus** — raised navy band, gold rule + "Core focus areas", three numbered columns with the exact LP theme copy: Pre-IPO & IPO technology · Artificial intelligence · Biotechnology. No allocation percentages.
4. **Approach** — centered band: intro line, five beliefs (execution over narrative, domain depth, durable advantage, capital as a scarce resource, partnership beyond the check) as rule-separated lines, closing geography line in gold caps
5. **Team** — two GP blocks (headshot + full bio) for David Hui Shao and Harry Huang, firm General Partner titles, direct emails
6. **Contact** — light: email `ir@tribridge.capital` and 1760 2nd Ave, New York, NY 10128. No form.
7. **Footer** — logo, © year, short disclaimer: informational only, not an offer or solicitation, offers only via confidential documents to eligible persons, investing involves risk of loss

## Compliance

- Nothing about fees, carry, minimums, fund size, term, MOIC, or return scenarios
- No Invest / Subscribe / Now raising CTAs, no downloadable LPA or deck
- `noindex, nofollow` meta and `robots.txt Disallow: /` stay in place
- Long footer disclosure replaced with the short brief version

## Technical

- Edit `src/styles.css` tokens to the exact navy/gold hexes (converted to oklch)
- Rewrite `hero.tsx`, `focus.tsx`, `approach.tsx`, `team.tsx`, `contact-footer.tsx`, `site-header.tsx`
- Remove the current Philosophy section (its content folds into Approach) and drop it from `src/routes/index.tsx`
- Keep route title `Tribridge Capital | Tribridge Pioneer Opportunity Fund`; update description to "New York investment firm focused on pre-IPO and IPO technology, artificial intelligence, and biotechnology."

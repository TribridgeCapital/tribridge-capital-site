# Tribridge Capital — Public Landing Page

A single-page site for Tribridge Capital, written to stay on the safe side of the 506(b) no-public-solicitation rule: it describes the **firm**, never a specific security or its terms.

## Compliance posture (drives all copy)

Public page includes:
- Firm identity, mission, and investment philosophy
- Generic sector focus: growth-stage/pre-IPO technology, artificial intelligence, biotechnology — described qualitatively, with no allocation percentages
- Approach: sourcing, diligence, co-investment structures, portfolio support, reporting and transparency practices
- Governance and alignment described at the firm level (GP invests alongside investors, LP advisory committee oversight, concentration discipline) — no fee or carry numbers
- GP bios with headshots and credentials
- "Request an introduction" CTA framed as starting a relationship
- Full disclosure footer: not an offer to sell or solicitation to buy; information for persons with a pre-existing relationship

Deliberately excluded from the public page:
- Fund name paired with terms; "$100,000 minimum"; 2% / 10% fee and carry; 60%/AI/biotech allocation split; 5-year term; Delaware LP details
- Any "invest now", "open for investment", or close-date framing
- Downloadable LPA, PPM, deck, or subscription documents
- Return or performance figures

Search engines: `noindex, nofollow` on the route, and `robots.txt` set to disallow all crawlers.

## Page structure

1. **Header** — Tribridge Capital wordmark, anchor links (Approach, Focus, Team, Contact), quiet "Request an introduction" mailto link
2. **Hero** — firm positioning line, navy field with gold rule detail; subline about private investment vehicles for accredited investors
3. **Philosophy** — 3–4 short statements: conviction in category-leading private companies, long-term horizon, alignment with investors, disciplined concentration
4. **Focus areas** — three cards: Growth-stage & pre-IPO technology, Artificial intelligence, Biotechnology. Qualitative descriptions only, no percentages
5. **Approach** — sourcing and institutional co-investment access, diligence, structuring flexibility (preferred equity, SAFEs, convertible notes, SPVs), follow-on support, reporting and transparency practices
6. **Governance & alignment** — GP commits alongside investors on the same terms; carry paid only on realized profits with clawback (described as a principle, no numbers); advisory committee oversight; concentration limits
7. **Team** — David Hui Shao (PhD, MBA, CFA, CPA) and Harry Huang (PhD, MBA), headshots from the bios document, condensed bios, individual email links
8. **Contact** — 1760 2nd Ave, New York, NY 10128 and `ir@tribridge.capital` mailto, framed as "request an introduction"
9. **Footer** — legal disclosure block, copyright

## Design

Navy and gold, carried from the source documents — deep navy field, warm gold accents on rules, small caps labels, and numerals. Serif display headings paired with a clean sans for body; generous spacing, restrained motion, editorial institutional feel rather than startup-marketing.

## Technical notes

- Rewrite `src/routes/index.tsx` as the landing page; sections split into components under `src/components/`
- Navy/gold tokens added to `src/styles.css` as oklch semantic tokens (no hardcoded color utilities)
- Two GP headshots extracted from the bios PDF, registered via the asset CLI and imported
- Route `head()`: title "Tribridge Capital", firm-level description, og/twitter tags, `robots: noindex, nofollow`; `public/robots.txt` set to `Disallow: /`
- No backend; CTA is a `mailto:` link

## Note

If you later want the fund-specific material (terms, minimum, allocation, LPA) online, that belongs behind a real gate with human-reviewed prequalification — a separate build, not part of this page.

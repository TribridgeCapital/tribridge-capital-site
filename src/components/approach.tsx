const STEPS = [
  {
    title: "Sourcing",
    body: "Opportunities reach us through operator, founder, and institutional relationships built over two decades on Wall Street and inside large technology organizations.",
  },
  {
    title: "Diligence",
    body: "Fundamental research on the business, the technology, and the capital structure — informed by direct experience executing transactions, licensing deals, and public listings.",
  },
  {
    title: "Structuring",
    body: "We express conviction in whichever instrument fits the opportunity: preferred equity, SAFEs, convertible notes, co-investments, and special purpose vehicles.",
  },
  {
    title: "Support & follow-on",
    body: "Capital is reserved for pro rata participation and follow-on rounds so that early conviction can be maintained as companies scale.",
  },
];

const GOVERNANCE = [
  "General partners commit alongside investors, pari passu and on the same terms.",
  "Incentive economics are earned only on realized profits, after each investment's cost and any prior losses are recovered, with an end-of-life clawback.",
  "Concentration discipline limits exposure to any single company, and borrowing at the vehicle level is constrained.",
  "An advisory committee of investors reviews conflicts of interest, valuation matters, and other key decisions.",
  "Investors receive periodic reporting, portfolio company updates, and annual tax packages through a dedicated investor account.",
];

export function Approach() {
  return (
    <section id="approach" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <div>
          <p className="label-caps">Approach</p>
          <h2 className="mt-6 font-display text-3xl leading-snug md:text-4xl">
            From first conversation to realization.
          </h2>
          <div className="mt-12 space-y-10">
            {STEPS.map((s, i) => (
              <div key={s.title} className="flex gap-6">
                <span className="font-display text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-border bg-navy p-8 md:p-10">
          <p className="label-caps">Governance & alignment</p>
          <h3 className="mt-6 font-display text-2xl leading-snug text-foreground">
            Structure that protects investors.
          </h3>
          <ul className="mt-8 space-y-5">
            {GOVERNANCE.map((g) => (
              <li key={g} className="flex gap-4 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2.5 h-px w-4 shrink-0 bg-gold" />
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

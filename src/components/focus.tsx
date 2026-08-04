const AREAS = [
  {
    label: "Theme I",
    title: "Growth-stage & pre-IPO technology",
    body: "Category-leading late-stage private companies, accessed through institutional co-investments and other strategic opportunities as they approach the public markets.",
    points: ["Late-stage private equity", "Institutional co-investment", "Secondary and SPV structures"],
  },
  {
    label: "Theme II",
    title: "Artificial intelligence",
    body: "Infrastructure and developer tooling, agents and workflow automation, and vertical applications where domain depth compounds into defensibility.",
    points: ["AI infrastructure & tooling", "Agents and automation", "Vertical applications"],
  },
  {
    label: "Theme III",
    title: "Biotechnology",
    body: "Companies with long-term growth potential across anti-aging, innovative therapeutics, diagnostics, and the platforms that enable them.",
    points: ["Innovative therapeutics", "Diagnostics", "Enabling platforms"],
  },
];

export function Focus() {
  return (
    <section id="focus" className="border-y border-border bg-navy">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="label-caps">Where we invest</p>
        <h2 className="mt-6 max-w-3xl font-display text-3xl leading-snug md:text-4xl">
          Three sectors, one underwriting standard.
        </h2>
        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {AREAS.map((a) => (
            <article key={a.title} className="flex flex-col bg-navy p-8">
              <span className="label-caps">{a.label}</span>
              <h3 className="mt-5 font-display text-xl leading-snug text-foreground">{a.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              <ul className="mt-7 space-y-2 border-t border-border pt-5">
                {a.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 h-px w-3 shrink-0 bg-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

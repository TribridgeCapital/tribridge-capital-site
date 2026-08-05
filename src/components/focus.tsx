const AREAS = [
  {
    n: "01",
    title: "Pre-IPO & IPO technology",
    body: "Participate in the growth of leading technology unicorns via institutional co-investment channels and other strategic opportunities. Primary focus on sought-after pre-IPO and IPO technology companies.",
  },
  {
    n: "02",
    title: "Artificial intelligence",
    body: "AI infrastructure and developer tools, AI agents and workflow automation, and vertical AI applications.",
  },
  {
    n: "03",
    title: "Biotechnology",
    body: "Companies with attractive long-term growth potential across anti-aging, innovative therapeutics, diagnostics, and enabling platforms.",
  },
];

export function Focus() {
  return (
    <section id="focus" className="bg-navy px-6 py-24 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl text-foreground md:text-4xl">Core focus areas</h2>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">

          Focused on long-term capital appreciation with disciplined risk diversification across
          three complementary themes.
        </p>
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {AREAS.map((a) => (
            <article key={a.n} className="group">
              <span className="block font-display text-4xl text-gold opacity-60 transition-opacity group-hover:opacity-100">
                {a.n}
              </span>
              <h3 className="mt-6 text-2xl font-semibold tracking-wide text-foreground">
                {a.title}
              </h3>
              <p className="mt-4 font-light leading-relaxed text-muted-foreground">{a.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

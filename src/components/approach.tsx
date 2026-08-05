const BELIEFS = [
  {
    n: "01",
    title: "Execution over narrative",
    body: "We underwrite what a company has actually built and shipped, not the story told around it.",
  },
  {
    n: "02",
    title: "Domain depth matters",
    body: "Our partners have built, financed, and operated in the sectors we invest in, and diligence the science and the software directly.",
  },
  {
    n: "03",
    title: "Durable advantage",
    body: "We look for defensibility that compounds — technical moats, data advantages, and hard-won distribution.",
  },
  {
    n: "04",
    title: "Capital as a scarce resource",
    body: "A small number of decisions, sized deliberately, with reserves held for the companies that earn them.",
  },
  {
    n: "05",
    title: "Partnership beyond the check",
    body: "We stay close to the companies we back, contributing judgment, networks, and operating experience over the long horizon.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="border-t border-border bg-navy">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-24 lg:py-32">
        <div className="grid gap-10 border-b border-border pb-14 md:grid-cols-[1fr_1.15fr] md:items-end md:gap-16">
          <div>
            <p className="label-caps">Approach</p>
            <h2 className="mt-6 font-display text-3xl leading-snug text-foreground md:text-4xl">
              Where scientific and technical depth meet scalable markets.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Five beliefs shape every decision we make — how we source, how we diligence, how we
            size, and how we stay with a company once we are in.
          </p>
        </div>

        <ol className="grid gap-px overflow-hidden bg-border md:grid-cols-2">
          {BELIEFS.map((b, i) => (
            <li
              key={b.n}
              className={`flex gap-6 bg-navy px-2 py-10 md:px-8 ${
                i === BELIEFS.length - 1 && BELIEFS.length % 2 === 1 ? "md:col-span-2" : ""
              }`}
            >
              <span className="font-display text-2xl leading-none text-gold/70">{b.n}</span>
              <div>
                <h3 className="font-display text-xl leading-snug text-foreground">{b.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {b.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-14 border-t border-border pt-8 font-display text-base tracking-wide text-gold">
          Primarily United States · Selective opportunities globally
        </p>
      </div>
    </section>
  );
}

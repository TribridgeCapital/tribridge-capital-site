const PRINCIPLES = [
  {
    n: "01",
    title: "Access over noise",
    body: "We concentrate on category-leading private companies that are difficult to reach — institutional co-investments and strategic opportunities sourced through long-standing relationships rather than intermediated processes.",
  },
  {
    n: "02",
    title: "Technical diligence",
    body: "Our partners have built and financed the kinds of companies we back. We underwrite the science and the software directly, not only the deck around them.",
  },
  {
    n: "03",
    title: "A long horizon",
    body: "Durable outcomes in private markets take years, not quarters. We size positions and reserve capital so that we can stay with a company as it compounds.",
  },
  {
    n: "04",
    title: "Alignment first",
    body: "The general partners invest on the same terms as the investors they serve, and incentive economics are earned only on realized profits after cost is recovered.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <p className="label-caps">Philosophy</p>
      <h2 className="mt-6 max-w-3xl font-display text-3xl leading-snug md:text-4xl">
        A small number of decisions, made carefully.
      </h2>
      <div className="mt-16 grid gap-x-14 gap-y-12 md:grid-cols-2">
        {PRINCIPLES.map((p) => (
          <div key={p.n} className="border-t border-border pt-6">
            <span className="font-display text-sm text-gold">{p.n}</span>
            <h3 className="mt-4 text-xl text-foreground">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

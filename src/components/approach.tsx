const BELIEFS = [
  "Execution over narrative.",
  "Domain depth matters.",
  "Durable advantage.",
  "Capital as a scarce resource.",
  "Partnership beyond the check.",
];

export function Approach() {
  return (
    <section id="approach" className="border-t border-border px-6 py-24 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="label-caps">Approach</p>
        <h2 className="mt-6 font-display text-4xl italic leading-snug text-foreground">
          Where scientific and technical depth meet scalable markets.
        </h2>
        <div className="mt-16 space-y-12">
          {BELIEFS.map((b) => (
            <div key={b} className="border-b border-border pb-8">
              <p className="text-lg font-light italic text-foreground/80">{b}</p>
            </div>
          ))}
        </div>
        <p className="mt-20 text-sm font-medium uppercase tracking-[0.3em] text-gold">
          Primarily United States · Selective opportunities globally
        </p>
      </div>
    </section>
  );
}

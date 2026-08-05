

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-border px-6 py-32 lg:px-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(110% 80% at 80% 6%, color-mix(in oklab, var(--gold) 12%, transparent) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-6xl">
        <h2 className="font-display text-xl tracking-wide text-gold md:text-2xl">
          Tribridge Pioneer Opportunity Fund
        </h2>
        <h1 className="mt-6 font-display text-5xl leading-tight tracking-tight text-foreground md:text-7xl">
          Tribridge Capital
        </h1>
        <p className="mt-8 max-w-3xl text-xl font-light leading-relaxed text-foreground/90 md:text-2xl">
          A New York–based investment firm focused on sought-after pre-IPO and IPO technology
          unicorns, artificial intelligence, and biotechnology.
        </p>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          We combine deep technical judgment with capital-markets experience to help investors
          build diversified private-market portfolios with long-term growth potential.
        </p>
        <div className="mt-12 flex flex-wrap gap-6">
          <a
            href="#contact"
            className="bg-gold px-8 py-4 text-base font-semibold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-parchment"
          >
            Get in touch
          </a>
          <a
            href="#approach"
            className="border border-border px-8 py-4 text-base font-semibold uppercase tracking-widest text-foreground transition-colors hover:border-gold hover:text-gold"
          >
            Our approach
          </a>
        </div>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(120% 90% at 78% 8%, color-mix(in oklab, var(--gold) 16%, transparent) 0%, transparent 58%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-40 md:pb-36 md:pt-52">
        <p className="label-caps">Private investment management · New York</p>
        <h1 className="mt-8 max-w-4xl font-display text-4xl leading-[1.15] text-foreground md:text-6xl md:leading-[1.1]">
          Conviction capital for the companies
          <span className="text-gold"> defining the next decade.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Tribridge Capital manages private investment vehicles for accredited investors, with a
          focus on growth-stage and pre-IPO technology, artificial intelligence, and biotechnology.
          Our partnerships are private and relationship-based.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
          <a
            href="mailto:ir@tribridge.capital?subject=Introduction%20to%20Tribridge%20Capital"
            className="inline-flex items-center bg-gold px-7 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-parchment"
          >
            Request an introduction
          </a>
          <a href="#philosophy" className="text-sm text-muted-foreground hover:text-gold">
            How we invest
          </a>
        </div>
      </div>
      <div className="mx-auto h-px max-w-6xl bg-border" />
    </section>
  );
}

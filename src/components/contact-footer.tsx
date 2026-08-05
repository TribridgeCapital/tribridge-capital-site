import logoAsset from "@/assets/tribridge-logo.png.asset.json";

export function ContactFooter() {
  return (
    <>
      <section id="contact" className="border-t border-border px-6 py-24 lg:px-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl text-foreground md:text-4xl">Contact</h2>
          <address className="mt-12 not-italic">
            <a
              href="mailto:ir@tribridge.capital"
              className="border-b border-gold/50 pb-1 text-xl text-gold transition-colors hover:text-parchment"
            >
              ir@tribridge.capital
            </a>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Tribridge Capital
              <br />
              1760 2nd Ave, New York, NY 10128
            </p>
          </address>
        </div>
      </section>

      <footer id="legal" className="border-t border-border bg-navy px-6 py-14 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="label-caps">Legal</p>
          <p className="mt-5 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            This website is for informational purposes only and does not constitute an offer to
            sell or a solicitation of an offer to buy any securities. Any offer, if made, will be
            made only pursuant to confidential documents and only to eligible persons under
            applicable securities laws. Investing involves risk, including possible loss of
            capital.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <img src={logoAsset.url} alt="Tribridge Capital" className="h-10 w-auto opacity-80" />
            <span className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Tribridge Capital · 1760 2nd Ave, New York, NY 10128 ·{" "}
              <a href="mailto:ir@tribridge.capital" className="text-gold hover:text-parchment">
                ir@tribridge.capital
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

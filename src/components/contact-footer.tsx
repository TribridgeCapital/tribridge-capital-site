export function ContactFooter() {
  return (
    <>
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <p className="label-caps">Contact</p>
            <h2 className="mt-6 font-display text-3xl leading-snug md:text-4xl">
              Our work begins with a conversation.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Tribridge Capital works privately, with investors we know. If you would like to
              introduce yourself and learn more about the firm, we would welcome the conversation.
            </p>
            <a
              href="mailto:ir@tribridge.capital?subject=Introduction%20to%20Tribridge%20Capital"
              className="mt-10 inline-flex items-center bg-gold px-7 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-parchment"
            >
              Request an introduction
            </a>
          </div>
          <address className="not-italic">
            <p className="label-caps">Tribridge Capital</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              1760 2nd Ave
              <br />
              New York, NY 10128
            </p>
            <a
              href="mailto:ir@tribridge.capital"
              className="mt-4 inline-block border-b border-gold/50 pb-0.5 text-sm text-gold hover:text-parchment"
            >
              ir@tribridge.capital
            </a>
          </address>
        </div>
      </section>

      <footer className="border-t border-border bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="label-caps">Important disclosures</p>
          <p className="mt-5 max-w-4xl text-xs leading-relaxed text-muted-foreground">
            This website is provided for informational purposes only and describes Tribridge
            Capital as a firm. It is not an offer to sell or a solicitation of an offer to buy any
            security, and no security is offered or sold through this website. Any interests in
            private investment vehicles managed by Tribridge Capital are offered only to accredited
            investors with a pre-existing, substantive relationship with the firm, in private
            transactions exempt from registration under the Securities Act of 1933, and only by
            means of confidential offering documents that control in all respects. Investing in
            private companies involves substantial risk, including illiquidity and the loss of
            capital, and is suitable only for investors able to bear such risk for an extended
            period. Nothing here should be construed as investment, legal, or tax advice. Not an
            offer where unlawful.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <span className="font-display text-sm text-foreground">Tribridge Capital</span>
            <span className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Tribridge Capital. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

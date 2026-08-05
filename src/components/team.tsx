import davidAsset from "@/assets/david-shao.jpg.asset.json";
import harryAsset from "@/assets/harry-huang.jpg.asset.json";

const PARTNERS = [
  {
    photo: davidAsset.url,
    name: "David Hui Shao",
    creds: "PhD, MBA, CFA, CPA",
    email: "david.shao@tribridge.capital",
    paras: [
      "David brings a rare combination of deep technical expertise and financial acumen, with over two decades at the intersection of transaction execution and global capital markets. As Senior Biotech Analyst and Portfolio Manager at Kamunting Street Asset Management, he ran a multi-strategy approach across pre-IPO, IPO, event-driven, M&A, debt, equity, and hybrid instruments, managing a $200 million portfolio of U.S. and European equities and convertible bonds. His research discipline was further refined at Mehta Partners across long/short equity, PIPEs, venture capital, and market-neutral strategies.",
      "As a CFO, CEO, and CBO he secured over $300 million through equity and debt offerings between 2012 and 2024 and played a leadership role in executing both Nasdaq and NYSE listings — structuring complex transactions, evaluating licensing and partnership deals, and articulating investment theses to sophisticated investors.",
      "He holds an MBA in Finance and Accounting from NYU Stern and a PhD in Bioorganic Chemistry from UC San Diego, and is both a CFA charterholder and a Certified Public Accountant — a combination that lets him speak fluently with scientists, investors, and regulators alike.",
    ],
  },
  {
    photo: harryAsset.url,
    name: "Harry Huang",
    creds: "PhD, MBA",
    email: "harry.huang@tribridge.capital",
    paras: [
      "Harry leads investment strategy, portfolio construction, and execution. He is a former Group Manager at Amazon Web Services and Amazon Retail, a technology-startup executive, a software engineer at Bloomberg Trading Solutions, and an active angel investor in AI, green energy, and consumer technology. He brings more than 20 years of software engineering experience and nearly a decade leading large engineering and product organizations across AI applications, IoT, SaaS, FinTech, and high performance computing.",
      "At AWS he led development of AI agent foundations and data platforms used by teams across contact centers, supply chain, healthcare, life sciences, and security. At Amazon Retail his organizations supported an e-commerce business generating more than $10 billion in annual revenue at over 30% year-over-year growth. At an EV charging startup he was the software architect behind the platform and its consumer applications, and earlier in his career he built institutional trading systems — positions management, P&L, and risk analysis — used by sell-side fixed income firms on Wall Street.",
      "He holds a PhD in Computer Science from the University of Wyoming and an Executive MBA from Quantic School of Business and Technology.",
    ],
  },
];

export function Team() {
  return (
    <section id="team" className="bg-navy px-6 py-24 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl text-foreground md:text-4xl">General partners</h2>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">

          Tribridge General Partners bring financial and technology expertise spanning Wall Street,
          AI, internet, and biotechnology.
        </p>
        <div className="mt-16 space-y-20">
          {PARTNERS.map((p) => (
            <article
              key={p.name}
              className="grid gap-8 border-t border-border pt-12 md:grid-cols-[200px_1fr] md:gap-14"
            >
              <div>
                <img
                  src={p.photo}
                  alt={`Portrait of ${p.name}, General Partner at Tribridge Capital`}
                  width={200}
                  height={200}
                  loading="lazy"
                  className="w-40 border border-gold/30 md:w-full"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground">{p.name}</h3>
                <p className="mt-2 text-base text-gold">{p.creds}</p>
                <p className="label-caps mt-4">General Partner</p>
                <div className="mt-6 space-y-4">
                  {p.paras.map((t, i) => (
                    <p key={i} className="text-base font-light leading-relaxed text-muted-foreground">
                      {t}
                    </p>
                  ))}
                </div>
                <a
                  href={`mailto:${p.email}`}
                  className="mt-6 inline-block border-b border-gold/50 pb-0.5 text-base text-gold hover:text-parchment"
                >
                  {p.email}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { tokens } from "@/theme/tokens";

const PARTNERS = [
  {
    name: "David Hui Shao",
    creds: "PhD, MBA, CFA, CPA",
    email: "david.shao@tribridge.capital",
    paras: [
      "David Shao brings a rare combination of deep technical expertise and sophisticated financial acumen to asset management and investment strategy, with over two decades of leadership at the intersection of transaction executions and global capital markets. As a Senior Biotech Analyst and Portfolio Manager at Kamunting Street Asset Management, he employed a multi-strategy approach—including pre-IPO, IPO, event-driven, M&A, debt, equity, and hybrid instruments—managing a $200 million portfolio of U.S. and European equities and convertible bonds, and generating proprietary investment ideas that enhanced fund performance. His analytical rigor was further refined at Mehta Partners, where he provided fundamental research across long/short equity, PIPEs, venture capital, and market-neutral strategies. This experience managing substantial public and private portfolios has given him a comprehensive understanding of risk-return dynamics across the business lifecycle.",
      "This investment perspective has been integral to his corporate executive roles as CFO, CEO, and CBO, where he secured over $300 million through equity and debt offerings between 2012 and 2024 and played a leadership role in executing both Nasdaq and NYSE IPO listings. His ability to bridge technology, business, and finance enables him to structure complex transactions, evaluate licensing and partnership deals, and articulate compelling investment theses to sophisticated investors—positioning him as a uniquely valuable leader for any investment venture.",
      "David Shao holds an MBA in Finance and Accounting from NYU Stern and a Ph.D. in Bioorganic Chemistry from UC San Diego, providing a multidisciplinary foundation across the physical sciences, life sciences, and quantitative finance. He is also a CFA charterholder and a Certified Public Accountant (CPA)—a rare trifecta that underscores his commitment to financial analysis, accounting rigor, and scientific integrity, enabling him to speak fluently the language of scientists, investors, and regulators alike.",
    ],
  },
  {
    name: "Harry Huang",
    creds: "PhD, MBA",
    email: "harry.huang@tribridge.capital",
    paras: [
      "Harry Huang, PhD, MBA, is the General Partner of Tribridge Capital, where he leads the firm's investment strategy, portfolio construction, and execution. He is a former Group Manager at Amazon Web Services (AWS) and Amazon Retail, a tech executive at a technology startup, a software engineer at Bloomberg Trading Solutions, and an active angel investor in AI, green energy, and consumer technology. With more than 20 years of software engineering experience and nearly a decade leading large engineering and product organizations, his expertise spans AI-powered applications, Internet of Things (IoT), Software as a Service (SaaS), Financial Technology (FinTech), and High Performance Computing (HPC).",
      "Harry spent nearly a decade in senior technology and product leadership roles (Sr Manager of Software Development, Principal Product Manager-Technical) at Amazon, leading large cross-functional organizations of software engineers, solution architects, frontend engineers, technical program managers, software development managers, and product managers. His teams built AI-powered enterprise applications, IoT and digital twin solutions, and large-scale e-commerce supply chain platforms. At AWS, he led the development of AI agent foundations and data platforms that enabled multiple AWS teams to build AI agents across domains including contact centers, supply chain, healthcare, life sciences, and security. At Amazon Retail, his organizations supported a major e-commerce business generating more than $10 billion in annual revenue, achieving over 30% year-over-year growth while processing millions of customer orders daily. In an electric vehicle (EV) charging solution startup, he served as the software architect and led a team to build an EV charging management platform and its consumer-facing mobile applications from the ground up, while advising the CEO and CTO on strategy. Earlier in his career, he developed institutional trading systems — including positions management, P&L, and risk analysis — at Bloomberg Trading Solutions, used by sell-side fixed income firms on Wall Street.",
      "Harry holds a PhD in Computer Science from the University of Wyoming and an Executive MBA (EMBA) from Quantic School of Business and Technology.",
    ],
  },
];

export default function Team() {
  return (
    <Box
      component="section"
      id="team"
      sx={{ bgcolor: tokens.navyDeep, px: { xs: 3, lg: 12 }, py: { xs: 12, lg: 16 } }}
    >
      <Box sx={{ mx: "auto", maxWidth: 1152 }}>
        <Typography
          component="h2"
          sx={{
            fontFamily: 'var(--font-display), "Libre Baskerville", Georgia, serif',
            fontSize: { xs: "1.875rem", md: "2.25rem" },
            color: tokens.foreground,
          }}
        >
          General partners
        </Typography>
        <Typography
          sx={{
            mt: 4,
            maxWidth: 672,
            fontSize: "1rem",
            lineHeight: 1.625,
            color: tokens.mutedForeground,
          }}
        >
          Tribridge General Partners bring financial and technology expertise spanning Wall Street,
          AI, internet, and biotechnology.
        </Typography>
        <Box sx={{ mt: 8, display: "flex", flexDirection: "column", gap: 10 }}>
          {PARTNERS.map((p) => (
            <Box
              key={p.name}
              component="article"
              sx={{ borderTop: `1px solid ${tokens.border}`, pt: 6 }}
            >
              <Typography
                component="h3"
                sx={{
                  fontFamily: 'var(--font-display), "Libre Baskerville", Georgia, serif',
                  fontSize: "1.5rem",
                  color: tokens.foreground,
                }}
              >
                {p.name}
              </Typography>
              <Typography sx={{ mt: 1, fontSize: "1rem", color: tokens.gold }}>{p.creds}</Typography>
              <Typography
                sx={{
                  mt: 2,
                  fontFamily: 'var(--font-sans), "IBM Plex Sans", system-ui, sans-serif',
                  fontSize: "0.9375rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: tokens.goldMuted,
                }}
              >
                General Partner
              </Typography>
              <Box sx={{ mt: 3, maxWidth: "72ch", display: "flex", flexDirection: "column", gap: 2 }}>
                {p.paras.map((t, i) => (
                  <Typography
                    key={i}
                    sx={{
                      fontSize: "1rem",
                      fontWeight: 300,
                      lineHeight: 1.625,
                      color: tokens.mutedForeground,
                    }}
                  >
                    {t}
                  </Typography>
                ))}
              </Box>
              <Link
                href={`mailto:${p.email}`}
                underline="none"
                sx={{
                  mt: 3,
                  display: "inline-block",
                  borderBottom: "1px solid rgba(255, 192, 0, 0.5)",
                  pb: 0.25,
                  fontSize: "1rem",
                  color: tokens.gold,
                  "&:hover": { color: tokens.parchment },
                }}
              >
                {p.email}
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

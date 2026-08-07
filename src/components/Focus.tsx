import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { tokens } from "@/theme/tokens";

const AREAS = [
  {
    n: "1",
    title: "Pre-IPO & IPO technology",
    body: "Participate in the growth of leading technology unicorns via institutional co-investment channels and other strategic opportunities. Primary focus on sought-after pre-IPO and IPO technology companies.",
  },
  {
    n: "2",
    title: "Artificial intelligence",
    body: "AI infrastructure and developer tools, AI agents and workflow automation, and vertical AI applications.",
  },
  {
    n: "3",
    title: "Biotechnology",
    body: "Companies with attractive long-term growth potential across anti-aging, innovative therapeutics, diagnostics, and enabling platforms.",
  },
];

export default function Focus() {
  return (
    <Box
      component="section"
      id="focus"
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
          Core focus areas
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
          Focused on long-term capital appreciation with disciplined risk diversification across
          three complementary themes.
        </Typography>
        <Box
          sx={{
            mt: 8,
            display: "grid",
            gap: 6,
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          }}
        >
          {AREAS.map((a) => (
            <Box
              key={a.n}
              component="article"
              sx={{
                "&:hover .area-num": { opacity: 1 },
              }}
            >
              <Typography
                className="area-num"
                sx={{
                  display: "block",
                  fontFamily: 'var(--font-display), "Libre Baskerville", Georgia, serif',
                  fontSize: "2.25rem",
                  color: tokens.gold,
                  opacity: 0.6,
                  transition: "opacity 0.2s",
                }}
              >
                {a.n}
              </Typography>
              <Typography
                component="h3"
                sx={{
                  mt: 3,
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  letterSpacing: "0.025em",
                  color: tokens.foreground,
                }}
              >
                {a.title}
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  fontWeight: 300,
                  lineHeight: 1.625,
                  color: tokens.mutedForeground,
                }}
              >
                {a.body}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

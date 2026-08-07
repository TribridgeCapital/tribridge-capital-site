import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { tokens } from "@/theme/tokens";

const BELIEFS = [
  {
    n: "1",
    title: "Execution over narrative",
    body: "We underwrite what a company has actually built and shipped, not the story told around it.",
  },
  {
    n: "2",
    title: "Domain depth matters",
    body: "Our partners have built, financed, and operated in the sectors we invest in, and diligence the science and the software directly.",
  },
  {
    n: "3",
    title: "Durable advantage",
    body: "We look for defensibility that compounds — technical moats, data advantages, and hard-won distribution.",
  },
  {
    n: "4",
    title: "Capital as a scarce resource",
    body: "A small number of decisions, sized deliberately, with reserves held for the companies that earn them.",
  },
  {
    n: "5",
    title: "Partnership beyond the check",
    body: "We stay close to the companies we back, contributing judgment, networks, and operating experience over the long horizon.",
  },
];

export default function Approach() {
  return (
    <Box
      component="section"
      id="approach"
      sx={{
        borderTop: `1px solid ${tokens.border}`,
        bgcolor: tokens.navyDeep,
        px: { xs: 3, lg: 12 },
        py: { xs: 12, lg: 16 },
      }}
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
          Approach
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
          Where scientific and technical depth meet scalable markets. Five beliefs shape every
          decision we make — how we source, how we diligence, how we size, and how we stay with a
          company once we are in.
        </Typography>

        <Box
          component="ol"
          sx={{
            mt: 8,
            m: 0,
            p: 0,
            listStyle: "none",
            display: "grid",
            gap: "1px",
            overflow: "hidden",
            bgcolor: tokens.border,
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
          }}
        >
          {BELIEFS.map((b, i) => (
            <Box
              key={b.n}
              component="li"
              sx={{
                display: "flex",
                gap: 3,
                bgcolor: tokens.navyDeep,
                px: { xs: 1, md: 4 },
                py: 5,
                gridColumn: {
                  xs: "auto",
                  md: i === BELIEFS.length - 1 && BELIEFS.length % 2 === 1 ? "1 / -1" : "auto",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-display), "Libre Baskerville", Georgia, serif',
                  fontSize: "1.875rem",
                  lineHeight: 1,
                  color: "rgba(255, 192, 0, 0.7)",
                }}
              >
                {b.n}
              </Typography>
              <Box>
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: 'var(--font-display), "Libre Baskerville", Georgia, serif',
                    fontSize: "1.5rem",
                    lineHeight: 1.375,
                    color: tokens.foreground,
                  }}
                >
                  {b.title}
                </Typography>
                <Typography
                  sx={{
                    mt: 1.5,
                    maxWidth: 576,
                    fontSize: "1rem",
                    lineHeight: 1.625,
                    color: tokens.mutedForeground,
                  }}
                >
                  {b.body}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Typography
          sx={{
            mt: 7,
            borderTop: `1px solid ${tokens.border}`,
            pt: 4,
            fontFamily: 'var(--font-display), "Libre Baskerville", Georgia, serif',
            fontSize: "1rem",
            letterSpacing: "0.025em",
            color: tokens.gold,
          }}
        >
          Primarily United States · Selective opportunities globally
        </Typography>
      </Box>
    </Box>
  );
}

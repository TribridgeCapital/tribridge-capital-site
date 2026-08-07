import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { tokens } from "@/theme/tokens";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <Box
      component="section"
      id="top"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        overflow: "hidden",
        borderBottom: `1px solid ${tokens.border}`,
        px: { xs: 3, lg: 12 },
        py: 16,
      }}
    >
      <Box
        aria-hidden
        sx={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          opacity: 0.6,
          background:
            "radial-gradient(110% 80% at 80% 6%, rgba(255, 192, 0, 0.12) 0%, transparent 60%)",
        }}
      />
      <Box sx={{ position: "relative", mx: "auto", width: "100%", maxWidth: 1152 }}>
        <Typography
          component="h2"
          sx={{
            fontFamily: 'var(--font-display), "Libre Baskerville", Georgia, serif',
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            letterSpacing: "0.025em",
            color: tokens.gold,
          }}
        >
          {siteConfig.fundName}
        </Typography>
        <Typography
          component="h1"
          sx={{
            mt: 3,
            fontFamily: 'var(--font-display), "Libre Baskerville", Georgia, serif',
            fontSize: { xs: "3rem", md: "4.5rem" },
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
            color: tokens.foreground,
          }}
        >
          {siteConfig.name}
        </Typography>
        <Typography
          sx={{
            mt: 4,
            maxWidth: 768,
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            fontWeight: 300,
            lineHeight: 1.625,
            color: "rgba(242, 244, 248, 0.9)",
          }}
        >
          A New York–based investment firm focused on sought-after pre-IPO and IPO technology
          unicorns, artificial intelligence, and biotechnology.
        </Typography>
        <Typography
          sx={{
            mt: 4,
            maxWidth: 672,
            fontSize: { xs: "1rem", md: "1.125rem" },
            lineHeight: 1.625,
            color: tokens.mutedForeground,
          }}
        >
          We combine deep technical judgment with capital-markets experience to help investors build
          diversified private-market portfolios with long-term growth potential.
        </Typography>
        <Box sx={{ mt: 6, display: "flex", flexWrap: "wrap", gap: 3 }}>
          <Button
            href="#contact"
            variant="contained"
            sx={{
              bgcolor: tokens.gold,
              color: tokens.navyDeep,
              px: 4,
              py: 1.75,
              fontSize: "1rem",
              letterSpacing: "0.1em",
              "&:hover": { bgcolor: tokens.parchment },
            }}
          >
            Get in touch
          </Button>
          <Button
            href="#approach"
            variant="outlined"
            sx={{
              borderColor: tokens.border,
              color: tokens.foreground,
              px: 4,
              py: 1.75,
              fontSize: "1rem",
              letterSpacing: "0.1em",
              "&:hover": {
                borderColor: tokens.gold,
                color: tokens.gold,
                bgcolor: "transparent",
              },
            }}
          >
            Our approach
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

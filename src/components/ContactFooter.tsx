import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { tokens } from "@/theme/tokens";
import { siteConfig } from "@/lib/site-config";

export default function ContactFooter() {
  const year = new Date().getFullYear();

  return (
    <>
      <Box
        component="section"
        id="contact"
        sx={{
          borderTop: `1px solid ${tokens.border}`,
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
            Contact
          </Typography>
          <Box component="address" sx={{ mt: 6, fontStyle: "normal" }}>
            <Link
              href={`mailto:${siteConfig.email}`}
              underline="none"
              sx={{
                borderBottom: "1px solid rgba(255, 192, 0, 0.5)",
                pb: 0.5,
                fontSize: "1.25rem",
                color: tokens.gold,
                transition: "color 0.2s",
                "&:hover": { color: tokens.parchment },
              }}
            >
              {siteConfig.email}
            </Link>
            <Typography
              sx={{
                mt: 4,
                fontSize: "1rem",
                lineHeight: 1.625,
                color: tokens.mutedForeground,
              }}
            >
              {siteConfig.name}
              <br />
              {siteConfig.address.line}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        component="footer"
        id="legal"
        sx={{
          borderTop: `1px solid ${tokens.border}`,
          bgcolor: tokens.navyDeep,
          px: { xs: 3, lg: 12 },
          py: 7,
        }}
      >
        <Box sx={{ mx: "auto", maxWidth: 1152 }}>
          <Typography
            sx={{
              fontFamily: 'var(--font-sans), "IBM Plex Sans", system-ui, sans-serif',
              fontSize: "0.9375rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: tokens.goldMuted,
            }}
          >
            Legal
          </Typography>
          <Typography
            sx={{
              mt: 2.5,
              maxWidth: 768,
              fontSize: "1rem",
              lineHeight: 1.625,
              color: tokens.mutedForeground,
            }}
          >
            This website is for informational purposes only and does not constitute an offer to sell
            or a solicitation of an offer to buy any securities. Any offer, if made, will be made
            only pursuant to confidential documents and only to eligible persons under applicable
            securities laws. Investing involves risk, including possible loss of capital.
          </Typography>
          <Box
            sx={{
              mt: 5,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
              borderTop: `1px solid ${tokens.border}`,
              pt: 3,
            }}
          >
            <Box
              component="img"
              src="/tribridge-logo.png"
              alt="Tribridge Capital"
              sx={{ height: 40, width: "auto", opacity: 0.8 }}
            />
            <Typography sx={{ fontSize: "1rem", color: tokens.mutedForeground }}>
              © {year} {siteConfig.name} · {siteConfig.address.line} ·{" "}
              <Link
                href={`mailto:${siteConfig.email}`}
                underline="none"
                sx={{ color: tokens.gold, "&:hover": { color: tokens.parchment } }}
              >
                {siteConfig.email}
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { tokens } from "@/theme/tokens";

const LINKS = [
  { href: "#focus", label: "Focus" },
  { href: "#approach", label: "Approach" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        insetInline: 0,
        top: 0,
        zIndex: 50,
        transition: "background-color 0.3s, border-color 0.3s",
        bgcolor: scrolled ? "rgba(16, 32, 51, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? `1px solid ${tokens.border}` : "1px solid transparent",
      }}
    >
      <Box sx={{ px: { xs: 3, lg: 12 }, py: 2.5 }}>
        <Box
          sx={{
            mx: "auto",
            maxWidth: 1152,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="#top" aria-label="Tribridge Capital" sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src="/tribridge-logo.png"
              alt="Tribridge Capital"
              sx={{ height: { xs: 36, md: 40 }, width: "auto" }}
            />
          </Link>

          <Box
            component="nav"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 4.5,
            }}
          >
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                underline="none"
                sx={{
                  fontSize: "1rem",
                  color: tokens.mutedForeground,
                  transition: "color 0.2s",
                  "&:hover": { color: tokens.gold },
                }}
              >
                {l.label}
              </Link>
            ))}
          </Box>

          <Link
            href="#contact"
            underline="none"
            sx={{
              fontSize: "1rem",
              color: tokens.gold,
              borderBottom: `1px solid rgba(255, 192, 0, 0.6)`,
              pb: 0.25,
              transition: "color 0.2s, border-color 0.2s",
              "&:hover": {
                color: tokens.parchment,
                borderBottomColor: tokens.gold,
              },
            }}
          >
            Get in touch
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

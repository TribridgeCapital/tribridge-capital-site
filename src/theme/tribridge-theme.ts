"use client";

import { createTheme } from "@mui/material/styles";
import { tokens } from "./tokens";

const tribridgeTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: tokens.gold,
      contrastText: tokens.navyDeep,
    },
    background: {
      default: tokens.navyDeep,
      paper: tokens.navy,
    },
    text: {
      primary: tokens.foreground,
      secondary: tokens.mutedForeground,
    },
    divider: tokens.border,
  },
  typography: {
    fontFamily: 'var(--font-sans), "IBM Plex Sans", system-ui, sans-serif',
    h1: {
      fontFamily: 'var(--font-display), "Libre Baskerville", Georgia, serif',
      fontWeight: 400,
    },
    h2: {
      fontFamily: 'var(--font-display), "Libre Baskerville", Georgia, serif',
      fontWeight: 400,
    },
    h3: {
      fontFamily: 'var(--font-display), "Libre Baskerville", Georgia, serif',
      fontWeight: 400,
    },
    button: {
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: tokens.navyDeep,
          color: tokens.foreground,
          WebkitFontSmoothing: "antialiased",
        },
        a: {
          color: "inherit",
          textDecoration: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
  },
});

export default tribridgeTheme;

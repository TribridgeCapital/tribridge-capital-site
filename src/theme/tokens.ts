/** Hex tokens for MUI (cannot use CSS var() with alpha()). */
export const tokens = {
  navyDeep: "#102033",
  navy: "#1A2C45",
  navySoft: "#243652",
  gold: "#FFC000",
  goldMuted: "#D4A017",
  parchment: "#F5F0E6",
  foreground: "#F2F4F8",
  mutedForeground: "#B8C0CC",
  border: "rgba(242, 244, 248, 0.12)",
  radius: "0.25rem",
} as const;

export type Tokens = typeof tokens;

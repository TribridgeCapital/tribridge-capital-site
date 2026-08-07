import Box from "@mui/material/Box";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import Focus from "@/components/Focus";
import Approach from "@/components/Approach";
import Team from "@/components/Team";
import ContactFooter from "@/components/ContactFooter";
import { tokens } from "@/theme/tokens";

export default function HomePage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: tokens.navyDeep }}>
      <SiteHeader />
      <Box component="main">
        <Hero />
        <Focus />
        <Approach />
        <Team />
        <ContactFooter />
      </Box>
    </Box>
  );
}

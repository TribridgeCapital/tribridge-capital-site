import type { Metadata } from "next";
import { Libre_Baskerville, IBM_Plex_Sans } from "next/font/google";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { siteConfig } from "@/lib/site-config";
import { organizationJsonLd } from "@/lib/structured-data";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.png" },
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${ibmPlexSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
      </head>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}

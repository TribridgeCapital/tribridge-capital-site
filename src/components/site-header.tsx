import { useEffect, useState } from "react";
import logoAsset from "@/assets/tribridge-logo.png.asset.json";

const LINKS = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#focus", label: "Focus" },
  { href: "#approach", label: "Approach" },
  { href: "#team", label: "Team" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-navy-deep/95 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-display text-lg tracking-wide text-foreground">Tribridge</span>
          <span className="label-caps hidden sm:inline">Capital</span>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:ir@tribridge.capital?subject=Introduction%20to%20Tribridge%20Capital"
          className="border-b border-gold/60 pb-0.5 text-sm text-gold transition-colors hover:border-gold hover:text-parchment"
        >
          Request an introduction
        </a>
      </div>
    </header>
  );
}

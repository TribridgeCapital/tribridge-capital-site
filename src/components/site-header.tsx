import { useEffect, useState } from "react";
import logoAsset from "@/assets/tribridge-logo.png.asset.json";

const LINKS = [
  { href: "#focus", label: "Focus" },
  { href: "#approach", label: "Approach" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
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
      <div className="px-6 py-5 lg:px-24">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="Tribridge Capital">
          <img src={logoAsset.url} alt="Tribridge Capital" className="h-9 w-auto md:h-10" />
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base text-muted-foreground transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="border-b border-gold/60 pb-0.5 text-base text-gold transition-colors hover:border-gold hover:text-parchment"
        >
          Get in touch
        </a>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#approach", label: "Approach" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#tierradex", label: "TierraDex" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When unscrolled, the nav floats over the dark hero — use cream/ink-foreground text.
  // When scrolled, the nav has a white backdrop — switch to ink (black) text.
  const textClass = scrolled ? "text-paper-foreground" : "text-ink-foreground";
  const linkClass = scrolled
    ? "text-paper-foreground/70 hover:text-paper-foreground"
    : "text-ink-foreground/80 hover:text-ink-foreground";
  const hamburgerClass = scrolled ? "bg-paper-foreground" : "bg-ink-foreground";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-[color:var(--rule)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex h-[72px] items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2 group">
            <span
              className={`display-sm text-xl md:text-2xl tracking-tight transition-colors ${textClass}`}
            >
              Caribbean Investment Holdings
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-[13px] font-medium transition-colors ${linkClass}`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="https://tierradex.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium tracking-wide transition-colors ${
                scrolled
                  ? "bg-ink text-ink-foreground hover:bg-accent hover:text-accent-foreground"
                  : "bg-paper text-paper-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
              data-tooltip="Open TierraDex — our tokenization partner where accredited investors subscribe"
            >
              Invest via TierraDex
              <span aria-hidden>→</span>
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden inline-flex flex-col gap-1.5"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-[1.5px] w-6 transition-all ${hamburgerClass} ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 transition-all ${hamburgerClass} ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 transition-all ${hamburgerClass} ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 border-t border-[color:var(--rule)] -mx-6 px-6 pt-6 bg-paper">
            <nav className="flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-paper-foreground/80"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://tierradex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center bg-ink text-ink-foreground px-5 py-3 text-sm font-medium"
              >
                Invest via TierraDex →
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

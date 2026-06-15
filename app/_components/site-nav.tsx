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
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div className="mx-auto w-[min(100%-1.5rem,1180px)] mt-3 md:mt-4 pointer-events-auto">
        <div
          className={`rounded-full border transition-all duration-400 ${
            scrolled
              ? "border-[rgba(233,238,246,0.12)] bg-[rgba(10,22,38,0.72)] backdrop-blur-xl shadow-[0_18px_50px_-24px_rgba(0,0,0,0.7)]"
              : "border-transparent bg-transparent"
          }`}
        >
          <div className="flex h-[60px] items-center justify-between gap-4 pl-5 pr-2 md:pl-7 md:pr-3">
            {/* Wordmark */}
            <a href="#top" className="flex items-center gap-2.5 shrink-0">
              <span
                aria-hidden
                className="grid h-7 w-7 place-items-center rounded-full border border-[color:var(--accent-bright)]/50 text-[11px] font-medium text-accent-bright mono"
              >
                CIH
              </span>
              <span className="hidden sm:block text-[13px] font-medium tracking-tight text-ink-foreground/90">
                Caribbean Investment Holdings
              </span>
            </a>

            {/* Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[12.5px] font-medium text-ink-foreground/65 hover:text-ink-foreground transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <a
                href="https://tierradex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-solid !py-2.5 !px-5 !text-[12.5px]"
                data-tooltip="Open TierraDex — accredited investors subscribe via our tokenization partner"
              >
                Invest via TierraDex
                <span aria-hidden>→</span>
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label="Toggle menu"
              className="md:hidden inline-flex flex-col gap-1.5 p-2"
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className={`block h-[1.5px] w-6 bg-ink-foreground transition-all ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-6 bg-ink-foreground transition-all ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-6 bg-ink-foreground transition-all ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="md:hidden mx-2 mb-2 rounded-2xl border border-[rgba(233,238,246,0.12)] bg-[rgba(10,22,38,0.95)] backdrop-blur-xl px-5 py-5">
              <nav className="flex flex-col gap-4">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-ink-foreground/80"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="https://tierradex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-solid justify-center mt-2"
                >
                  Invest via TierraDex →
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

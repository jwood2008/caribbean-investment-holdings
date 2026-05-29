import { HeroSlideshow } from "./hero-slideshow";

export function Hero() {
  return (
    <section
      id="top"
      className="section-ink relative overflow-hidden min-h-[94vh] grid grid-cols-1 lg:grid-cols-[2fr_3fr]"
    >
      {/* LEFT — solid black text column */}
      <div className="relative z-10 flex items-start pt-[120px] pb-[80px] md:pt-[140px] md:pb-[110px] px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="w-full max-w-[560px]">
          <div className="flex items-center gap-3 fade-up">
            <span className="h-px w-10 bg-accent" />
            <span className="eyebrow">Holding Company — Est. 2024</span>
          </div>

          <h1 className="display mt-8 text-[44px] sm:text-[56px] md:text-[68px] lg:text-[72px] xl:text-[88px] fade-up leading-[0.98]">
            <span className="block">Old-world assets.</span>
            <span
              className="block italic whitespace-nowrap mt-8 sm:mt-10 lg:mt-12 pl-[1.4em] sm:pl-[1.8em] lg:pl-[2em]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
            >
              New-world access.
            </span>
          </h1>

          <p className="mt-48 md:mt-56 max-w-[52ch] text-[16px] md:text-[18px] leading-[1.55] text-ink-foreground/75 fade-up">
            Caribbean Investment Holdings is a private holding company
            building durable, income-producing assets across the Caribbean
            basin. We underwrite, develop, and operate — then tokenize equity
            access for accredited investors through{" "}
            <a
              href="https://tierradex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-foreground underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
            >
              TierraDex
            </a>
            .
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4 fade-up">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-3 bg-paper text-paper-foreground px-7 py-4 text-[14px] font-medium tracking-wide hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              View the portfolio
              <span aria-hidden>→</span>
            </a>
            <a
              href="https://tierradex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-[color:var(--rule-strong)] text-ink-foreground px-7 py-4 text-[14px] font-medium tracking-wide hover:bg-paper hover:text-paper-foreground transition-colors"
            >
              Invest via TierraDex
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT — slideshow column */}
      <div className="relative min-h-[60vh] lg:min-h-0">
        <HeroSlideshow variant="panel" />
      </div>

      {/* Gold seam between the black column and the slideshow */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-[60vh] lg:top-0 lg:bottom-0 lg:left-[40%] lg:right-auto lg:w-[2px] lg:h-auto h-[2px] w-full z-30 pointer-events-none"
        style={{ background: "var(--accent)" }}
      />
    </section>
  );
}

import { HeroSlideshow } from "./hero-slideshow";

export function Hero() {
  return (
    <section
      id="top"
      className="section-ink relative overflow-hidden min-h-[94vh] grid grid-cols-1 lg:grid-cols-[minmax(0,1.85fr)_minmax(0,3.15fr)]"
    >
      {/* LEFT — solid black text column */}
      <div className="relative z-10 flex items-start pt-[96px] pb-[40px] md:pt-[108px] md:pb-[48px] pl-6 md:pl-10 lg:pl-12 xl:pl-16 pr-4">
        <div className="w-full max-w-[560px]">
          <div className="flex items-center gap-3 fade-up">
            <span className="h-px w-10 bg-accent" />
            <span className="eyebrow">Holding Company — Est. 2024</span>
          </div>

          <h1 className="display mt-8 text-[44px] sm:text-[56px] md:text-[68px] lg:text-[44px] xl:text-[54px] 2xl:text-[66px] fade-up leading-[0.98]">
            <span className="block">Old-world assets.</span>
            <span
              className="block italic mt-4 sm:mt-5 lg:mt-6 pl-[1.4em] sm:pl-[1.8em] lg:pl-[0.8em]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
            >
              New-world access.
            </span>
          </h1>

          <p className="mt-20 md:mt-28 max-w-[52ch] text-[14px] md:text-[15px] leading-[1.6] text-ink-foreground/80">
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

          <div className="mt-10 flex flex-wrap items-center gap-4 fade-up">
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
      <div className="relative min-h-[40vh] lg:min-h-0">
        <HeroSlideshow variant="panel" />
      </div>

      {/* Gold seam between columns */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-[40vh] lg:top-0 lg:bottom-0 lg:left-[37%] lg:right-auto lg:w-[2px] lg:h-auto h-[2px] w-full z-30 pointer-events-none"
        style={{ background: "var(--accent)" }}
      />
    </section>
  );
}

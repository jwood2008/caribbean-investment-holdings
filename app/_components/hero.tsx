import { HeroSlideshow } from "./hero-slideshow";

export function Hero() {
  return (
    <section
      id="top"
      className="section-ink relative overflow-hidden min-h-[100svh] grid grid-cols-1 lg:grid-cols-[minmax(0,1.85fr)_minmax(0,3.15fr)]"
    >
      {/* Blueprint grid wash behind the text column */}
      <div
        aria-hidden
        className="grid-texture absolute inset-0 lg:right-[63%] pointer-events-none opacity-70"
      />

      {/* LEFT — navy text column */}
      <div className="relative z-10 flex items-center pt-[120px] pb-[56px] md:pt-[128px] md:pb-[64px] pl-6 md:pl-10 lg:pl-12 xl:pl-16 pr-4">
        <div className="w-full max-w-[560px]">
          <div className="flex items-center gap-3 fade-up">
            <span className="h-px w-10 bg-accent-bright" />
            <span className="eyebrow">Holding Company — Est. 2026</span>
          </div>

          <h1 className="display mt-8 text-[46px] sm:text-[58px] md:text-[70px] lg:text-[46px] xl:text-[56px] 2xl:text-[68px] leading-[0.98]">
            <span className="hero-line">
              <span>Old-world assets.</span>
            </span>
            <span className="hero-line mt-3 sm:mt-4">
              <span
                className="italic text-accent-bright pl-[0.06em]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
              >
                New-world access.
              </span>
            </span>
          </h1>

          <p className="mt-10 max-w-[52ch] text-[14px] md:text-[15px] leading-[1.7] text-ink-foreground/75 fade-up [animation-delay:0.6s]">
            A private holding company building durable, income-producing real
            assets across the Caribbean basin. We underwrite, develop, and
            operate — then tokenize equity access for accredited investors
            through{" "}
            <a
              href="https://tierradex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-foreground underline decoration-accent-bright decoration-2 underline-offset-4 hover:text-accent-bright transition-colors"
            >
              TierraDex
            </a>
            .
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 fade-up [animation-delay:0.75s]">
            <a href="#portfolio" className="btn-pill btn-solid">
              View the portfolio
              <span aria-hidden>→</span>
            </a>
            <a
              href="https://tierradex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-ghost"
            >
              Invest via TierraDex
              <span aria-hidden>↗</span>
            </a>
          </div>

          {/* Ledger strip — technical/fintech detail */}
          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-[color:var(--rule)] pt-7 max-w-[460px] fade-up [animation-delay:0.9s]">
            {[
              ["Flagship", "Grenada"],
              ["Structure", "Reg D 506(c)"],
              ["Settlement", "XRP Ledger"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="mono text-[10px] uppercase tracking-wider text-ink-foreground/45">
                  {k}
                </dt>
                <dd className="mt-1.5 text-[14px] text-ink-foreground/90">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* RIGHT — slideshow column */}
      <div className="relative min-h-[42vh] lg:min-h-0">
        <HeroSlideshow variant="panel" />
      </div>

      {/* Steel seam between columns */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-[42vh] lg:top-0 lg:bottom-0 lg:left-[37%] lg:right-auto lg:w-px lg:h-auto h-px w-full z-30 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent, var(--accent-bright) 30%, var(--accent-bright) 70%, transparent)",
        }}
      />

      {/* Scroll cue */}
      <a
        href="#approach"
        aria-label="Scroll to approach"
        className="hidden lg:flex absolute bottom-7 left-12 xl:left-16 z-30 items-center gap-3 text-ink-foreground/45 hover:text-ink-foreground transition-colors"
      >
        <span className="mono text-[10px] uppercase tracking-widest">Scroll</span>
        <span className="relative grid h-9 w-5 place-items-start justify-center rounded-full border border-current pt-1.5">
          <span className="h-1.5 w-px bg-current animate-bounce" />
        </span>
      </a>
    </section>
  );
}

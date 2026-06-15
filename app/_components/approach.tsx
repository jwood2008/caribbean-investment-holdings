import { Reveal } from "./reveal";

const pillars = [
  {
    n: "01",
    label: "Underwriting",
    title: "Underwrite for the cycle",
    body:
      "We acquire and develop assets we'd be comfortable holding through any market — coastal real estate, hospitality, and adjacent infrastructure with structural demand and limited substitution.",
    points: ["Coastal real estate", "Hospitality", "Adjacent infrastructure"],
  },
  {
    n: "02",
    label: "Operations",
    title: "Operate, don't speculate",
    body:
      "Our economics come from running buildings, not flipping paper. Every asset has a long-dated business plan, on-site management, and a clear path from lease-up to stabilized yield.",
    points: ["Long-dated business plans", "On-site management", "Stabilized yield"],
  },
  {
    n: "03",
    label: "Access",
    title: "Access through tokenization",
    body:
      "We partner with TierraDex to issue compliant, accredited-investor-only digital securities — modernizing how investors subscribe, hold, and report on private positions.",
    points: ["Reg D 506(c)", "On-chain cap table", "Accredited only"],
  },
];

export function Approach() {
  return (
    <section
      id="approach"
      className="section-paper py-24 md:py-32 border-b border-[color:var(--rule)]"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Reveal className="max-w-[680px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="eyebrow">Approach</span>
          </div>
          <h2 className="display mt-7 text-[40px] md:text-[64px] leading-[0.98]">
            Patient capital,
            <br />
            <span className="italic text-accent">disciplined</span> execution.
          </h2>
          <p className="mt-7 text-[16px] leading-[1.65] text-paper-foreground/65 max-w-[46ch]">
            Three principles guide every asset we acquire, build, and operate.
            Scroll through the stack.
          </p>
        </Reveal>

        {/* Scroll-stacking deck */}
        <div className="mt-16 md:mt-20 flex flex-col gap-6 md:gap-8 pb-[10vh]">
          {pillars.map((p, i) => (
            <article
              key={p.n}
              className="stack-card"
              style={{ ["--i" as string]: i }}
            >
              <div className="section-ink overflow-hidden rounded-[28px] border border-[color:var(--rule-strong)] shadow-[0_30px_80px_-40px_rgba(10,22,38,0.6)]">
                <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] gap-8 md:gap-14 p-8 md:p-12 lg:p-14 min-h-[56vh] md:min-h-[60vh]">
                  {/* Left — index + label */}
                  <div className="flex flex-col justify-between border-b md:border-b-0 md:border-r border-[color:var(--rule)] pb-8 md:pb-0 md:pr-12">
                    <div className="display text-[88px] md:text-[120px] leading-none text-accent-bright/90 tabular-nums">
                      {p.n}
                    </div>
                    <div className="mt-8 md:mt-0">
                      <div className="eyebrow">{p.label}</div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.points.map((pt) => (
                          <span
                            key={pt}
                            className="mono text-[10px] uppercase tracking-wider text-ink-foreground/55 border border-[color:var(--rule)] rounded-full px-3 py-1.5"
                          >
                            {pt}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right — copy */}
                  <div className="flex flex-col justify-center">
                    <h3 className="display-sm text-[30px] md:text-[44px] leading-[1.02] text-ink-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-6 text-[16px] md:text-[18px] leading-[1.65] text-ink-foreground/70 max-w-[52ch]">
                      {p.body}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

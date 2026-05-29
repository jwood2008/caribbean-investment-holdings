const pillars = [
  {
    n: "01",
    title: "Underwrite for the cycle",
    body:
      "We acquire and develop assets we'd be comfortable holding through any market — coastal real estate, hospitality, and adjacent infrastructure with structural demand and limited substitution.",
  },
  {
    n: "02",
    title: "Operate, don't speculate",
    body:
      "Our economics come from running buildings, not flipping paper. Every asset has a long-dated business plan, on-site management, and a clear path from lease-up to stabilized yield.",
  },
  {
    n: "03",
    title: "Access through tokenization",
    body:
      "We partner with TierraDex to issue compliant, accredited-investor-only digital securities — modernizing how investors subscribe, hold, and report on private positions.",
  },
];

export function Approach() {
  return (
    <section
      id="approach"
      className="section-paper py-24 md:py-36 border-b border-[color:var(--rule)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-paper-foreground/30" />
              <span className="eyebrow text-paper-foreground/50">Approach</span>
            </div>
            <h2 className="display mt-8 text-[40px] md:text-[60px] leading-[0.98] max-w-[12ch]">
              Patient capital,
              <br />
              <span className="italic">disciplined</span> execution.
            </h2>
            <p className="mt-8 text-[15px] leading-[1.65] text-paper-foreground/65 max-w-[42ch]">
              Three principles guide every asset we acquire, build, and
              operate.
            </p>
          </div>

          <div>
            <ol className="divide-y divide-[color:var(--rule)] border-y border-[color:var(--rule)]">
              {pillars.map((p) => (
                <li
                  key={p.n}
                  className="grid grid-cols-[auto_1fr] gap-8 md:gap-14 py-10 md:py-14"
                >
                  <div className="display-sm text-3xl md:text-4xl text-paper-foreground/30 tabular-nums">
                    {p.n}
                  </div>
                  <div>
                    <h3 className="display-sm text-2xl md:text-3xl text-paper-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-[15px] md:text-[16px] leading-[1.65] text-paper-foreground/70 max-w-[58ch]">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

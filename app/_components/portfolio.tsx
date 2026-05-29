export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-ink py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="eyebrow">Portfolio</span>
            </div>
            <h2 className="display mt-6 text-[40px] md:text-[60px] leading-[0.98]">
              One flagship.
              <br />
              <span className="italic">A platform</span> behind it.
            </h2>
          </div>
          <p className="max-w-[40ch] text-[15px] leading-[1.65] text-ink-foreground/60">
            We are intentionally concentrated. Our first asset is operating;
            the platform is built to add a second and third on the same
            underwriting and operating discipline.
          </p>
        </div>

        {/* Flagship card */}
        <article className="mt-16 md:mt-20 border border-[color:var(--rule-strong)] bg-[#0e0e0e]">
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            {/* Image side */}
            <div
              className="relative min-h-[360px] lg:min-h-[560px] overflow-hidden"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, #1a1a1a, #050505 70%)",
              }}
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 70% 80%, rgba(185,151,91,0.35), transparent 50%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="eyebrow text-accent/80 mb-6">
                    Flagship — Active
                  </div>
                  <div
                    className="display text-[clamp(40px,7vw,96px)] text-ink-foreground leading-none"
                  >
                    Conception
                    <br />
                    <span className="italic">Grenada</span>
                  </div>
                  <div className="mt-6 text-sm tracking-widest uppercase text-ink-foreground/55">
                    Point Saline · West Indies
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 h-px bg-[color:var(--rule)]" />
            </div>

            {/* Detail side */}
            <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-between gap-10">
              <div>
                <p className="text-[16px] md:text-[17px] leading-[1.65] text-ink-foreground/85">
                  A coastal retreat at Point Saline, Grenada — fourteen
                  villas, a wellness clinic, and a private stretch of
                  Caribbean coast. Cosmetic surgery, recovery, and lifestyle
                  hospitality under one operator.
                </p>

                <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-[color:var(--rule)] pt-10">
                  {[
                    ["Offering", "Reg D 506(c)"],
                    ["Raise", "$16M"],
                    ["Target yield", "5–8% / yr"],
                    ["Class B tokens", "8M @ $2"],
                    ["Minimum", "$4,000"],
                    ["Lockup", "366 days"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-[11px] tracking-widest uppercase text-ink-foreground/45">
                        {k}
                      </dt>
                      <dd className="mt-2 display-sm text-xl md:text-2xl text-ink-foreground tabular-nums">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://conceptiongrenada.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-paper text-paper-foreground px-6 py-3.5 text-[13px] font-medium tracking-wide hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Visit Conception Grenada
                  <span aria-hidden>↗</span>
                </a>
                <a
                  href="https://tierradex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-[color:var(--rule-strong)] text-ink-foreground px-6 py-3.5 text-[13px] font-medium tracking-wide hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                  data-tooltip="Accredited investors only. Subscription and KYC handled by TierraDex."
                >
                  Subscribe on TierraDex
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Pipeline placeholder */}
        <div className="mt-16 grid md:grid-cols-2 gap-4">
          {[
            {
              tag: "In diligence",
              title: "Caribbean coastal hospitality — Asset II",
              body:
                "Second income-producing hospitality position under evaluation. Underwriting Q3 2026.",
            },
            {
              tag: "Pipeline",
              title: "Wellness & medical tourism platform",
              body:
                "Platform-level investment thesis extending the Grenada operating model across the basin.",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="border border-[color:var(--rule-strong)] p-8 md:p-10 hover:border-accent transition-colors"
            >
              <div className="eyebrow text-accent">{p.tag}</div>
              <h3 className="display-sm mt-6 text-xl md:text-2xl text-ink-foreground">
                {p.title}
              </h3>
              <p className="mt-4 text-[14px] leading-[1.65] text-ink-foreground/55">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TierraDex() {
  return (
    <section
      id="tierradex"
      className="section-paper py-24 md:py-36 border-y border-[color:var(--rule)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-paper-foreground/30" />
              <span className="eyebrow text-paper-foreground/50">
                Capital partner
              </span>
            </div>
            <h2 className="display mt-8 text-[40px] md:text-[60px] leading-[0.98]">
              Tokenization,
              <br />
              <span className="italic">handled.</span>
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-[17px] md:text-[19px] leading-[1.6] text-paper-foreground/85 max-w-[60ch]">
              Caribbean Investment Holdings raises capital through{" "}
              <a
                href="https://tierradex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper-foreground underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
              >
                TierraDex
              </a>
              , a compliant private-market platform built on the XRP Ledger.
              TierraDex handles accreditation, KYC, subscription, custody, and
              investor reporting — so we stay focused on operating assets, and
              you get a modern, transparent way to hold a position.
            </p>

            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4 pt-6 border-t border-[color:var(--rule)]">
              {[
                "Accredited-investor verification",
                "On-chain cap table & transfer agent",
                "Quarterly investor reporting",
                "Optional secondary market windows",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 text-[14px] leading-[1.6] text-paper-foreground/75"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {line}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="https://tierradex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-ink text-ink-foreground px-6 py-3.5 text-[13px] font-medium tracking-wide hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Go to TierraDex
                <span aria-hidden>↗</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-paper-foreground px-6 py-3.5 text-[13px] font-medium tracking-wide hover:text-accent transition-colors"
              >
                Speak with us first
                <span aria-hidden>→</span>
              </a>
            </div>

            <p className="pt-6 text-[12px] leading-[1.6] text-paper-foreground/45 max-w-[58ch]">
              Securities offerings made under Rule 506(c) of Regulation D are
              available to verified accredited investors only. Nothing on this
              site constitutes an offer to sell or a solicitation to buy
              securities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

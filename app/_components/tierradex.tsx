import { Reveal } from "./reveal";

export function TierraDex() {
  return (
    <section
      id="tierradex"
      className="section-paper py-24 md:py-32 border-y border-[color:var(--rule)]"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="eyebrow">Capital partner</span>
            </div>
            <h2 className="display mt-8 text-[40px] md:text-[60px] leading-[0.98]">
              Tokenization,
              <br />
              <span className="italic text-accent">handled.</span>
            </h2>
            <div className="mt-9 inline-flex items-center gap-3 rounded-full border border-[color:var(--rule)] bg-[color:var(--muted)] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="mono text-[11px] uppercase tracking-wider text-paper-foreground/70">
                Settled on the XRP Ledger
              </span>
            </div>
          </Reveal>

          <Reveal delay={1} className="space-y-8">
            <p className="text-[17px] md:text-[19px] leading-[1.6] text-paper-foreground/85 max-w-[60ch]">
              Caribbean Investment Holdings raises capital through{" "}
              <a
                href="https://tierradex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper-foreground underline decoration-accent decoration-2 underline-offset-4 hover:text-accent transition-colors"
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
                className="btn-pill btn-solid"
              >
                Go to TierraDex
                <span aria-hidden>↗</span>
              </a>
              <a
                href="#contact"
                className="btn-pill btn-ghost"
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}

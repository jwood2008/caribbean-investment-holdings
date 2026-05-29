export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="section-ink border-t border-[color:var(--rule)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="display-sm text-2xl">
              Caribbean Investment Holdings
            </div>
            <p className="mt-4 max-w-[40ch] text-[14px] leading-[1.65] text-ink-foreground/55">
              A private holding company. Tokenized access for accredited
              investors via TierraDex.
            </p>
          </div>

          <div>
            <div className="eyebrow text-ink-foreground/40">Company</div>
            <ul className="mt-4 space-y-3 text-[14px] text-ink-foreground/70">
              <li>
                <a href="#approach" className="hover:text-accent">
                  Approach
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-accent">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-accent">
                  Leadership
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="eyebrow text-ink-foreground/40">Capital</div>
            <ul className="mt-4 space-y-3 text-[14px] text-ink-foreground/70">
              <li>
                <a
                  href="https://tierradex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  TierraDex ↗
                </a>
              </li>
              <li>
                <a
                  href="https://conceptiongrenada.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  Conception Grenada ↗
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent">
                  Investor relations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="eyebrow text-ink-foreground/40">Contact</div>
            <ul className="mt-4 space-y-3 text-[14px] text-ink-foreground/70">
              <li>
                <a
                  href="mailto:investors@caribbeaninvestmentholdings.com"
                  className="hover:text-accent break-all"
                >
                  investors@cih.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[color:var(--rule)] flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] text-ink-foreground/45">
          <div>© {year} Caribbean Investment Holdings LLC. All rights reserved.</div>
          <div className="max-w-[64ch] leading-[1.6]">
            This site is for informational purposes only and does not
            constitute an offer to sell or a solicitation to buy securities.
            Securities offered only to verified accredited investors via
            TierraDex.
          </div>
        </div>
      </div>
    </footer>
  );
}

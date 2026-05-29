export function Contact() {
  return (
    <section
      id="contact"
      className="section-paper py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-paper-foreground/30" />
              <span className="eyebrow text-paper-foreground/50">Inquiries</span>
            </div>
            <h2 className="display mt-8 text-[40px] md:text-[60px] leading-[0.98] max-w-[14ch]">
              A short
              <br />
              <span className="italic">conversation</span> first.
            </h2>
            <p className="mt-8 text-[16px] leading-[1.65] text-paper-foreground/70 max-w-[48ch]">
              We work with a small group of accredited investors, family
              offices, and operating partners. Reach out — we'll set up a call
              before pointing you to TierraDex for accreditation and
              subscription.
            </p>
          </div>

          <div className="border border-[color:var(--rule)] bg-[color:var(--muted)]/40 p-8 md:p-12">
            <dl className="space-y-8">
              <div className="flex flex-col gap-2 border-b border-[color:var(--rule)] pb-8">
                <dt className="eyebrow text-paper-foreground/50">
                  Investor relations
                </dt>
                <dd>
                  <a
                    href="mailto:investors@caribbeaninvestmentholdings.com"
                    className="display-sm text-xl md:text-2xl text-paper-foreground hover:text-accent transition-colors break-all"
                  >
                    investors@caribbeaninvestmentholdings.com
                  </a>
                </dd>
              </div>

              <div className="flex flex-col gap-2 border-b border-[color:var(--rule)] pb-8">
                <dt className="eyebrow text-paper-foreground/50">General</dt>
                <dd>
                  <a
                    href="mailto:hello@caribbeaninvestmentholdings.com"
                    className="display-sm text-xl md:text-2xl text-paper-foreground hover:text-accent transition-colors break-all"
                  >
                    hello@caribbeaninvestmentholdings.com
                  </a>
                </dd>
              </div>

              <div className="flex flex-col gap-2">
                <dt className="eyebrow text-paper-foreground/50">
                  Subscribe via partner
                </dt>
                <dd>
                  <a
                    href="https://tierradex.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="display-sm text-xl md:text-2xl text-paper-foreground hover:text-accent transition-colors"
                  >
                    tierradex.com ↗
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

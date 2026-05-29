import Image from "next/image";

export function Leadership() {
  return (
    <section
      id="leadership"
      className="section-ink py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="eyebrow">Leadership</span>
            </div>
            <h2 className="display mt-6 text-[40px] md:text-[60px] leading-[0.98]">
              Operators,
              <br />
              <span className="italic">not allocators.</span>
            </h2>
          </div>
          <p className="max-w-[40ch] text-[15px] leading-[1.65] text-ink-foreground/60">
            A small team that signs every check, sits in every diligence
            meeting, and stands by every operating decision.
          </p>
        </div>

        <div className="mt-16 md:mt-20 grid lg:grid-cols-2 gap-px bg-[color:var(--rule)]">
          {/* Gavin */}
          <article className="bg-ink p-8 md:p-12">
            <div className="flex flex-col sm:flex-row items-start gap-8">
              <div className="relative h-[180px] w-[180px] md:h-[200px] md:w-[200px] shrink-0 overflow-hidden border border-[color:var(--rule-strong)]">
                <Image
                  src="/images/gavin.jpg"
                  alt="Gavin Stassen, Founder & CEO of Caribbean Investment Holdings"
                  fill
                  sizes="200px"
                  className="object-cover grayscale"
                  priority
                />
                <div
                  aria-hidden
                  className="absolute inset-0 ring-1 ring-inset ring-[color:var(--rule)]"
                />
              </div>
              <div className="pt-1">
                <div className="eyebrow text-ink-foreground/45">Founder &amp; CEO</div>
                <h3 className="display-sm mt-3 text-3xl md:text-4xl text-ink-foreground">
                  Gavin Stassen
                </h3>
                <div className="mt-4 flex items-center gap-3 text-[12px] tracking-widest uppercase text-ink-foreground/45">
                  <span className="h-px w-6 bg-accent" />
                  South Africa · 2024–
                </div>
              </div>
            </div>
            <p className="mt-10 text-[15px] md:text-[16px] leading-[1.7] text-ink-foreground/75 max-w-[60ch]">
              Founder of Caribbean Investment Holdings. Gavin leads
              acquisitions, capital strategy, and operating oversight across
              the portfolio. He sources opportunities through long-standing
              relationships in Caribbean hospitality, medical, and
              construction sectors, and underwrites every position himself.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-[color:var(--rule)] pt-8">
              <div>
                <dt className="eyebrow text-ink-foreground/40">Focus</dt>
                <dd className="mt-2 text-[14px] text-ink-foreground/80">
                  Real assets · Hospitality · Health
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-ink-foreground/40">Based</dt>
                <dd className="mt-2 text-[14px] text-ink-foreground/80">
                  South Africa
                </dd>
              </div>
            </dl>
          </article>

          {/* Placeholder for next hire */}
          <article className="bg-ink p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row items-start gap-8">
                <div
                  className="h-[180px] w-[180px] md:h-[200px] md:w-[200px] shrink-0 border border-dashed border-[color:var(--rule-strong)] flex items-center justify-center text-ink-foreground/25 text-5xl font-light"
                  aria-hidden
                >
                  +
                </div>
                <div className="pt-1">
                  <div className="eyebrow text-ink-foreground/45">
                    Joining 2026
                  </div>
                  <h3 className="display-sm mt-3 text-3xl md:text-4xl text-ink-foreground/55">
                    Lead clinician &amp; medical director
                  </h3>
                  <div className="mt-4 flex items-center gap-3 text-[12px] tracking-widest uppercase text-ink-foreground/35">
                    <span className="h-px w-6 bg-ink-foreground/25" />
                    To be announced
                  </div>
                </div>
              </div>
              <p className="mt-10 text-[15px] leading-[1.7] text-ink-foreground/55 max-w-[60ch]">
                A senior cosmetic surgeon will lead clinical operations at the
                flagship asset. Announcement to follow on close of the current
                hiring process.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 text-[13px] font-medium text-accent hover:text-ink-foreground transition-colors w-fit"
            >
              Interested in joining? Get in touch
              <span aria-hidden>→</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

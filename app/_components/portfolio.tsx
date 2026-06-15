"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Slide = {
  tag: string;
  status: "active" | "diligence" | "pipeline";
  name: string;
  location: string;
  body: string;
  stats?: [string, string][];
  links?: { href: string; label: string; primary?: boolean; tooltip?: string }[];
};

const slides: Slide[] = [
  {
    tag: "Flagship — Active",
    status: "active",
    name: "Conception\nGrenada",
    location: "Point Saline · West Indies",
    body:
      "A coastal retreat at Point Saline, Grenada — fourteen villas, a wellness clinic, and a private stretch of Caribbean coast. Cosmetic surgery, recovery, and lifestyle hospitality under one operator.",
    stats: [
      ["Offering", "Reg D 506(c)"],
      ["Raise", "$16M"],
      ["Target yield", "5–8% / yr"],
      ["Class B tokens", "8M @ $2"],
      ["Minimum", "$4,000"],
      ["Lockup", "366 days"],
    ],
    links: [
      {
        href: "https://conceptiongrenada.com",
        label: "Visit Conception Grenada",
        primary: true,
      },
      {
        href: "https://tierradex.com",
        label: "Subscribe on TierraDex",
        tooltip:
          "Accredited investors only. Subscription and KYC handled by TierraDex.",
      },
    ],
  },
  {
    tag: "In diligence",
    status: "diligence",
    name: "Caribbean coastal\nhospitality — Asset II",
    location: "Basin-wide · Underwriting Q3 2026",
    body:
      "Second income-producing hospitality position under evaluation, sourced through the same operating relationships behind the flagship. Underwriting opens Q3 2026.",
    stats: [
      ["Stage", "Diligence"],
      ["Type", "Hospitality"],
      ["Target", "Q3 2026"],
    ],
  },
  {
    tag: "Pipeline",
    status: "pipeline",
    name: "Wellness & medical\ntourism platform",
    location: "Platform thesis · Caribbean basin",
    body:
      "A platform-level investment thesis extending the Grenada operating model — clinical hospitality and recovery — across the basin on the same underwriting discipline.",
    stats: [
      ["Stage", "Pipeline"],
      ["Type", "Platform"],
      ["Model", "Grenada-led"],
    ],
  },
];

const statusDot: Record<Slide["status"], string> = {
  active: "bg-accent-bright",
  diligence: "bg-[#e3b341]",
  pipeline: "bg-ink-foreground/35",
};

export function Portfolio() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const children = Array.from(track.children) as HTMLElement[];
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    children.forEach((c, i) => {
      const cCenter = c.offsetLeft + c.offsetWidth / 2;
      const d = Math.abs(cCenter - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(slides.length - 1, i));
    const child = track.children[clamped] as HTMLElement | undefined;
    if (child) {
      track.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="section-ink relative py-24 md:py-32 overflow-hidden">
      <div
        aria-hidden
        className="grid-texture absolute inset-0 pointer-events-none opacity-40"
      />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-[640px]">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent-bright" />
              <span className="eyebrow">Portfolio</span>
            </div>
            <h2 className="display mt-6 text-[40px] md:text-[64px] leading-[0.98]">
              One flagship.
              <br />
              <span className="italic text-accent-bright">A platform</span> behind it.
            </h2>
            <p className="mt-7 max-w-[46ch] text-[15px] leading-[1.65] text-ink-foreground/60">
              We are intentionally concentrated. Our first asset is operating;
              the platform is built to add a second and third on the same
              underwriting and operating discipline.
            </p>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous asset"
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
              className="grid h-12 w-12 place-items-center rounded-full border border-[color:var(--rule-strong)] text-ink-foreground transition-all hover:border-accent-bright hover:text-accent-bright disabled:opacity-30 disabled:hover:border-[color:var(--rule-strong)] disabled:hover:text-ink-foreground"
            >
              <span aria-hidden className="text-lg">←</span>
            </button>
            <button
              type="button"
              aria-label="Next asset"
              onClick={() => goTo(active + 1)}
              disabled={active === slides.length - 1}
              className="grid h-12 w-12 place-items-center rounded-full border border-[color:var(--rule-strong)] text-ink-foreground transition-all hover:border-accent-bright hover:text-accent-bright disabled:opacity-30 disabled:hover:border-[color:var(--rule-strong)] disabled:hover:text-ink-foreground"
            >
              <span aria-hidden className="text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          className="no-scrollbar mt-12 md:mt-16 -mx-6 md:-mx-10 px-6 md:px-10 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-px-6 md:scroll-px-10"
        >
          {slides.map((s, i) => (
            <article
              key={s.name}
              className={`snap-start shrink-0 w-[88%] sm:w-[80%] lg:w-[68%] rounded-[28px] border bg-[color:var(--ink-soft)] transition-colors duration-500 ${
                i === active
                  ? "border-accent-bright/40"
                  : "border-[color:var(--rule-strong)]"
              }`}
            >
              <div className="grid lg:grid-cols-[1.05fr_1fr] h-full">
                {/* Visual / title side */}
                <div
                  className="relative min-h-[300px] lg:min-h-[520px] overflow-hidden rounded-t-[28px] lg:rounded-l-[28px] lg:rounded-tr-none"
                  style={{
                    background:
                      "radial-gradient(circle at 28% 28%, #14304d, #081019 70%)",
                  }}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 72% 78%, rgba(106,168,239,0.30), transparent 52%)",
                    }}
                  />
                  <div className="grid-texture absolute inset-0 opacity-50" aria-hidden />
                  <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
                    <div className="flex items-center gap-2.5">
                      <span className={`h-2 w-2 rounded-full ${statusDot[s.status]}`} />
                      <span className="eyebrow">{s.tag}</span>
                    </div>
                    <div>
                      <div className="display text-[clamp(34px,5vw,64px)] text-ink-foreground leading-[0.96] whitespace-pre-line">
                        {s.name}
                      </div>
                      <div className="mt-5 mono text-[11px] tracking-wider uppercase text-ink-foreground/55">
                        {s.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detail side */}
                <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-between gap-8">
                  <div>
                    <p className="text-[15px] md:text-[16px] leading-[1.65] text-ink-foreground/80">
                      {s.body}
                    </p>
                    {s.stats && (
                      <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-[color:var(--rule)] pt-8">
                        {s.stats.map(([k, v]) => (
                          <div key={k}>
                            <dt className="mono text-[10px] tracking-wider uppercase text-ink-foreground/45">
                              {k}
                            </dt>
                            <dd className="mt-1.5 display-sm text-lg md:text-xl text-ink-foreground tabular-nums">
                              {v}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </div>

                  {s.links && (
                    <div className="flex flex-wrap gap-3">
                      {s.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`btn-pill ${l.primary ? "btn-solid" : "btn-ghost"}`}
                          {...(l.tooltip ? { "data-tooltip": l.tooltip } : {})}
                        >
                          {l.label}
                          <span aria-hidden>↗</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="mt-8 flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.name}
              type="button"
              aria-label={`Go to ${s.name.replace("\n", " ")}`}
              onClick={() => goTo(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === active ? "w-10 bg-accent-bright" : "w-5 bg-ink-foreground/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

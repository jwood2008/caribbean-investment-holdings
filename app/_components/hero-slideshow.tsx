"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/hero-resort-aerial-day.png",
    alt: "Aerial view of the Grenada resort property",
  },
  {
    src: "/images/grenada-coast-real.png",
    alt: "Turquoise Grenadian coast",
  },
  {
    src: "/images/resort-aerial-sunset.png",
    alt: "Resort property at sunset",
  },
  {
    src: "/images/beach-twilight-lounges.png",
    alt: "Beachfront lounges at twilight",
  },
  {
    src: "/images/ocean-view-sailboats.png",
    alt: "Sailboats off the property at golden hour",
  },
  {
    src: "/images/grenada-coast-from-sea.png",
    alt: "Grenada coastline viewed from the sea",
  },
];

const SLIDE_MS = 4200;

type Props = {
  /** "full" = old behavior (heavy overlays, text on top). "panel" = right-side panel, minimal overlay. */
  variant?: "full" | "panel";
};

export function HeroSlideshow({ variant = "full" }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, []);

  const isPanel = variant === "panel";

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {slides.map((s, i) => (
        <div
          key={s.src}
          className="absolute inset-0 transition-opacity duration-[1600ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes={isPanel ? "(min-width: 1024px) 50vw, 100vw" : "100vw"}
            className="object-cover"
          />
        </div>
      ))}

      {isPanel ? (
        <>
          {/* Subtle vignette so panel edges blend into the black column */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0) 55%, rgba(10,10,10,0.06) 80%, rgba(10,10,10,0.25) 100%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,10,10,0.25) 0%, rgba(10,10,10,0) 25%, rgba(10,10,10,0) 75%, rgba(10,10,10,0.35) 100%)",
            }}
          />
        </>
      ) : (
        <>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.55) 35%, rgba(10,10,10,0.65) 70%, rgba(10,10,10,0.92) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 20% 30%, rgba(10,10,10,0.0) 0%, rgba(10,10,10,0.45) 70%)",
            }}
          />
        </>
      )}

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((s, i) => (
          <span
            key={s.src}
            className={`h-[2px] transition-all duration-700 ${
              i === active
                ? "w-8 bg-accent"
                : "w-4 bg-[rgba(245,244,240,0.35)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

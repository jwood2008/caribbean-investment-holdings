"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Stagger delay step: 1–4 maps to .d1–.d4 */
  delay?: 1 | 2 | 3 | 4;
  /** Render element. Defaults to a div. */
  as?: ElementType;
  className?: string;
};

/**
 * Wraps content and reveals it (fade + rise) the first time it scrolls into
 * view. Honors prefers-reduced-motion via CSS (.reveal rules in globals.css).
 */
export function Reveal({ children, delay, as, className = "" }: Props) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  const delayClass = delay ? ` d${delay}` : "";

  return (
    <Tag
      ref={ref}
      className={`reveal${shown ? " in" : ""}${delayClass} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}

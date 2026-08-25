"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  target: number;
  label: string;
  format: (value: number) => string;
};

const stats: Stat[] = [
  { target: 15, label: "Years Experience", format: (n) => `${Math.round(n)}+` },
  { target: 50, label: "Countries Served", format: (n) => `${Math.round(n)}+` },
  {
    target: 10000,
    label: "Shipments Delivered",
    format: (n) => `${Math.round(n / 1000)}K+`,
  },
  {
    target: 98,
    label: "Customer Satisfaction",
    format: (n) => `${Math.round(n)}%`,
  },
];

const DURATION_MS = 1600;

function easeOutCubic(progress: number) {
  return 1 - (1 - progress) ** 3;
}

function CountUp({
  stat,
  active,
  delay,
}: {
  stat: Stat;
  active: boolean;
  delay: number;
}) {
  const [progress, setProgress] = useState(0);
  const display = active
    ? stat.format(stat.target * easeOutCubic(progress))
    : stat.format(stat.target);

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    const delayId = window.setTimeout(() => {
      setProgress(0);
      const startedAt = performance.now();

      const tick = (now: number) => {
        const next = Math.min(1, (now - startedAt) / DURATION_MS);
        setProgress(next);

        if (next < 1) {
          frame = window.requestAnimationFrame(tick);
        }
      };

      frame = window.requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(delayId);
      window.cancelAnimationFrame(frame);
    };
  }, [active, delay]);

  return (
    <div className="rounded-xl bg-background px-4 py-6 text-center ring-1 ring-border/70">
      <p className="text-4xl font-bold tabular-nums text-foreground md:text-5xl">
        {display}
      </p>

      <p className="mt-2 text-sm font-medium text-primary">{stat.label}</p>
    </div>
  );
}

const AnimatedStats = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const hasPlayed = useRef(false);

  useEffect(() => {
    if (hasPlayed.current) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const node = rootRef.current;
    if (!node) return;

    const play = () => {
      if (hasPlayed.current) return;
      hasPlayed.current = true;
      setActive(true);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        play();
        observer.disconnect();
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="grid grid-cols-2 gap-8 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <CountUp
          key={stat.label}
          stat={stat}
          active={active}
          delay={index * 100}
        />
      ))}
    </div>
  );
};

export default AnimatedStats;

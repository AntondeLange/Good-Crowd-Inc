"use client";

import { useEffect, useRef } from "react";

const JOURNEY_PATH =
  "M640 40 C900 180 940 440 650 540 C370 638 270 410 450 300 C650 178 878 314 840 540 C804 760 450 766 360 980 C270 1198 650 1286 820 1450 C1034 1654 884 1950 574 1918 C290 1888 210 1606 424 1492 C650 1372 940 1554 904 1840 C862 2184 312 2140 270 2470 C236 2748 782 2744 880 3070 C968 3368 530 3466 380 3206 C228 2944 690 2788 872 3028 C1062 3278 766 3688 470 3614 C248 3558 318 3284 548 3316 C854 3360 1000 3942 600 4056 C404 4112 250 3994 294 3822 C344 3628 754 3652 874 3934 C994 4216 724 4510 430 4618";

const JOURNEY_SPARKS = [
  { cx: 682, cy: 528, r: 3.2 },
  { cx: 836, cy: 1452, r: 2.8 },
  { cx: 276, cy: 2472, r: 3 },
  { cx: 596, cy: 4056, r: 3.4 },
] as const;

export function InfinityJourney() {
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shell = shellRef.current;

    if (!shell) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      shell.style.setProperty("--journey-progress", "1");
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = shell.getBoundingClientRect();
      const viewport = window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(0.08, (viewport - rect.top) / (rect.height + viewport)),
      );

      shell.style.setProperty("--journey-progress", progress.toFixed(3));
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <div
      ref={shellRef}
      aria-hidden="true"
      className="journey-shell pointer-events-none absolute inset-0 z-[1] overflow-hidden"
    >
      <svg
        viewBox="0 0 1200 4700"
        preserveAspectRatio="none"
        className="absolute left-1/2 top-0 h-full w-[1320px] max-w-none -translate-x-1/2 opacity-90 md:w-full"
        focusable="false"
      >
        <defs>
          <linearGradient
            id="journey-gold"
            x1="220"
            y1="90"
            x2="1010"
            y2="4560"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="var(--color-gold-deep)" stopOpacity="0.12" />
            <stop offset="0.18" stopColor="var(--color-champagne)" stopOpacity="0.52" />
            <stop offset="0.34" stopColor="var(--color-gold)" stopOpacity="0.7" />
            <stop
              offset="0.52"
              stopColor="var(--color-warm-ivory)"
              stopOpacity="0.58"
            />
            <stop offset="0.68" stopColor="var(--color-gold)" stopOpacity="0.68" />
            <stop offset="0.86" stopColor="var(--color-champagne)" stopOpacity="0.42" />
            <stop offset="1" stopColor="var(--color-earth)" stopOpacity="0.16" />
          </linearGradient>
          <linearGradient
            id="journey-glow"
            x1="180"
            y1="70"
            x2="980"
            y2="4600"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="var(--color-gold)" stopOpacity="0.04" />
            <stop offset="0.5" stopColor="var(--color-champagne)" stopOpacity="0.38" />
            <stop offset="1" stopColor="var(--color-gold-deep)" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient
            id="journey-highlight"
            x1="300"
            y1="120"
            x2="900"
            y2="4540"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="var(--color-champagne)" stopOpacity="0" />
            <stop offset="0.28" stopColor="var(--color-warm-ivory)" stopOpacity="0.72" />
            <stop offset="0.54" stopColor="var(--color-champagne)" stopOpacity="0.58" />
            <stop offset="0.76" stopColor="var(--color-warm-ivory)" stopOpacity="0.64" />
            <stop offset="1" stopColor="var(--color-gold)" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="journey-spark">
            <stop offset="0" stopColor="var(--color-warm-ivory)" />
            <stop offset="0.55" stopColor="var(--color-champagne)" stopOpacity="0.76" />
            <stop offset="1" stopColor="var(--color-gold)" stopOpacity="0" />
          </radialGradient>
          <filter
            id="journey-light-blur"
            x="-25%"
            y="-4%"
            width="150%"
            height="108%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>
        <path
          className="journey-path-base-glow"
          d={JOURNEY_PATH}
          fill="none"
          stroke="url(#journey-glow)"
          strokeLinecap="round"
          strokeWidth="22"
          filter="url(#journey-light-blur)"
          vectorEffect="non-scaling-stroke"
        />
        <path
          className="journey-path-base"
          d={JOURNEY_PATH}
          fill="none"
          stroke="url(#journey-gold)"
          strokeLinecap="round"
          strokeWidth="7"
          vectorEffect="non-scaling-stroke"
        />
        <path
          className="journey-path-progress journey-path-progress-glow"
          pathLength="1"
          d={JOURNEY_PATH}
          fill="none"
          stroke="url(#journey-glow)"
          strokeLinecap="round"
          strokeWidth="14"
          filter="url(#journey-light-blur)"
          vectorEffect="non-scaling-stroke"
        />
        <path
          className="journey-path-progress journey-path-progress-main"
          pathLength="1"
          d={JOURNEY_PATH}
          fill="none"
          stroke="url(#journey-gold)"
          strokeLinecap="round"
          strokeWidth="3.8"
          vectorEffect="non-scaling-stroke"
        />
        <path
          className="journey-path-progress-segment journey-path-progress-highlight"
          pathLength="1"
          d={JOURNEY_PATH}
          fill="none"
          stroke="url(#journey-highlight)"
          strokeDasharray="0.04 0.17 0.08 0.24 0.045 0.425"
          strokeLinecap="round"
          strokeWidth="1.45"
          vectorEffect="non-scaling-stroke"
        />
        {JOURNEY_SPARKS.map((spark) => (
          <circle
            key={`${spark.cx}-${spark.cy}`}
            className="journey-spark"
            cx={spark.cx}
            cy={spark.cy}
            r={spark.r}
            fill="url(#journey-spark)"
          />
        ))}
      </svg>
    </div>
  );
}

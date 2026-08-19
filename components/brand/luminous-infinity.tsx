import { useId } from "react";

export type LuminousInfinityVariant =
  | "hero"
  | "background"
  | "partial"
  | "photo"
  | "corner"
  | "founder"
  | "footer"
  | "streak";

type LuminousInfinityProps = {
  className?: string;
  variant?: LuminousInfinityVariant;
  sparkles?: boolean;
};

const INFINITY_PATH =
  "M72 160 C72 84 178 70 300 160 C422 250 568 236 568 160 C568 84 462 70 340 160 C218 250 72 236 72 160";

const STREAK_PATH = "M36 202 C168 120 252 214 350 160 C452 104 530 92 604 116";

const SPARKS = [
  { cx: 126, cy: 126, r: 2.4 },
  { cx: 214, cy: 204, r: 1.5 },
  { cx: 334, cy: 158, r: 2.1 },
  { cx: 454, cy: 112, r: 1.6 },
  { cx: 528, cy: 184, r: 2 },
] as const;

export function LuminousInfinity({
  className,
  variant = "background",
  sparkles,
}: LuminousInfinityProps) {
  const id = useId().replace(/:/g, "");
  const goldGradientId = `luminous-gold-${id}`;
  const glowGradientId = `luminous-glow-${id}`;
  const highlightGradientId = `luminous-highlight-${id}`;
  const sparkGradientId = `luminous-spark-${id}`;
  const glowFilterId = `luminous-filter-${id}`;
  const path = variant === "streak" ? STREAK_PATH : INFINITY_PATH;
  const showSparkles =
    sparkles ?? (variant === "hero" || variant === "photo" || variant === "founder");

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 640 320"
      preserveAspectRatio="xMidYMid meet"
      className={[
        "luminous-infinity",
        `luminous-infinity--${variant}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <defs>
        <linearGradient
          id={goldGradientId}
          x1="52"
          y1="242"
          x2="590"
          y2="76"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="var(--color-gold-deep)" />
          <stop offset="0.28" stopColor="var(--color-gold)" />
          <stop offset="0.48" stopColor="var(--color-champagne)" />
          <stop offset="0.62" stopColor="var(--color-warm-ivory)" />
          <stop offset="0.76" stopColor="var(--color-gold)" />
          <stop offset="1" stopColor="var(--color-earth)" />
        </linearGradient>
        <linearGradient
          id={glowGradientId}
          x1="70"
          y1="250"
          x2="570"
          y2="70"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="var(--color-gold-deep)" stopOpacity="0.18" />
          <stop offset="0.5" stopColor="var(--color-champagne)" stopOpacity="0.82" />
          <stop offset="1" stopColor="var(--color-gold)" stopOpacity="0.28" />
        </linearGradient>
        <linearGradient
          id={highlightGradientId}
          x1="90"
          y1="220"
          x2="560"
          y2="96"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="var(--color-champagne)" stopOpacity="0" />
          <stop
            offset="0.42"
            stopColor="var(--color-warm-ivory)"
            stopOpacity="0.92"
          />
          <stop offset="0.68" stopColor="var(--color-champagne)" stopOpacity="0.7" />
          <stop offset="1" stopColor="var(--color-gold)" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={sparkGradientId}>
          <stop offset="0" stopColor="var(--color-warm-ivory)" />
          <stop offset="0.55" stopColor="var(--color-champagne)" stopOpacity="0.8" />
          <stop offset="1" stopColor="var(--color-gold)" stopOpacity="0" />
        </radialGradient>
        <filter
          id={glowFilterId}
          x="-25%"
          y="-45%"
          width="150%"
          height="190%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        className="luminous-infinity__aura"
        d={path}
        fill="none"
        stroke={`url(#${glowGradientId})`}
        strokeLinecap="round"
        strokeWidth="48"
        filter={`url(#${glowFilterId})`}
      />
      <path
        className="luminous-infinity__ambient"
        d={path}
        fill="none"
        stroke={`url(#${goldGradientId})`}
        strokeLinecap="round"
        strokeWidth="24"
      />
      <path
        className="luminous-infinity__main"
        d={path}
        fill="none"
        stroke={`url(#${goldGradientId})`}
        strokeLinecap="round"
        strokeWidth="8.5"
      />
      <path
        className="luminous-infinity__highlight"
        d={path}
        fill="none"
        pathLength="1"
        stroke={`url(#${highlightGradientId})`}
        strokeDasharray="0.08 0.18 0.16 0.22 0.05 0.31"
        strokeLinecap="round"
        strokeWidth="3.2"
      />
      {showSparkles
        ? SPARKS.map((spark) => (
            <circle
              key={`${spark.cx}-${spark.cy}`}
              className="luminous-infinity__spark"
              cx={spark.cx}
              cy={spark.cy}
              r={spark.r}
              fill={`url(#${sparkGradientId})`}
            />
          ))
        : null}
    </svg>
  );
}

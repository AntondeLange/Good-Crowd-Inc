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

const HERO_TRAIL_PATH =
  "M-34 174 C88 78 194 82 304 160 C424 246 548 236 674 108 M98 178 C204 248 296 226 392 146 C484 70 570 92 674 170";

const PARTIAL_TRAIL_PATH =
  "M-36 176 C84 88 188 78 306 160 C418 238 526 244 678 114 M118 190 C228 252 314 220 404 144 C492 72 574 88 676 166";

const CORNER_TRAIL_PATH =
  "M76 190 C150 120 226 118 304 160 C388 206 468 202 564 132";

const STREAK_PATH = "M36 202 C168 120 252 214 350 160 C452 104 530 92 604 116";

const HERO_SPARKS = [
  { cx: 302, cy: 160, r: 1.7 },
  { cx: 504, cy: 120, r: 1.2 },
] as const;

const PHOTO_SPARKS = [
  { cx: 330, cy: 158, r: 1.3 },
  { cx: 488, cy: 122, r: 1 },
] as const;

const FOOTER_SPARKS = [{ cx: 508, cy: 130, r: 1.2 }] as const;

const pathByVariant: Record<LuminousInfinityVariant, string> = {
  hero: HERO_TRAIL_PATH,
  background: INFINITY_PATH,
  partial: PARTIAL_TRAIL_PATH,
  photo: INFINITY_PATH,
  corner: CORNER_TRAIL_PATH,
  founder: INFINITY_PATH,
  footer: PARTIAL_TRAIL_PATH,
  streak: STREAK_PATH,
};

function getSparks(variant: LuminousInfinityVariant) {
  if (variant === "hero") {
    return HERO_SPARKS;
  }

  if (variant === "photo") {
    return PHOTO_SPARKS;
  }

  if (variant === "footer") {
    return FOOTER_SPARKS;
  }

  return [];
}

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
  const path = pathByVariant[variant];
  const showSparkles =
    sparkles ?? (variant === "hero" || variant === "photo" || variant === "footer");
  const sparks = showSparkles ? getSparks(variant) : [];

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
          <stop offset="0" stopColor="var(--color-gold-deep)" stopOpacity="0.18" />
          <stop offset="0.18" stopColor="var(--color-gold)" stopOpacity="0.72" />
          <stop offset="0.38" stopColor="var(--color-champagne)" stopOpacity="0.92" />
          <stop
            offset="0.52"
            stopColor="var(--color-warm-ivory)"
            stopOpacity="0.82"
          />
          <stop offset="0.68" stopColor="var(--color-gold)" stopOpacity="0.76" />
          <stop offset="0.86" stopColor="var(--color-gold-deep)" stopOpacity="0.34" />
          <stop offset="1" stopColor="var(--color-earth)" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient
          id={glowGradientId}
          x1="70"
          y1="250"
          x2="570"
          y2="70"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="var(--color-gold-deep)" stopOpacity="0.08" />
          <stop offset="0.46" stopColor="var(--color-champagne)" stopOpacity="0.5" />
          <stop offset="1" stopColor="var(--color-gold)" stopOpacity="0.12" />
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
            offset="0.34"
            stopColor="var(--color-warm-ivory)"
            stopOpacity="0.72"
          />
          <stop offset="0.58" stopColor="var(--color-champagne)" stopOpacity="0.86" />
          <stop
            offset="0.74"
            stopColor="var(--color-warm-ivory)"
            stopOpacity="0.62"
          />
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
          <feGaussianBlur stdDeviation="5.5" result="blur" />
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
        strokeWidth="34"
        filter={`url(#${glowFilterId})`}
      />
      <path
        className="luminous-infinity__ambient"
        d={path}
        fill="none"
        stroke={`url(#${goldGradientId})`}
        strokeLinecap="round"
        strokeWidth="14"
      />
      <path
        className="luminous-infinity__main"
        d={path}
        fill="none"
        stroke={`url(#${goldGradientId})`}
        strokeLinecap="round"
        strokeWidth="4.8"
      />
      <path
        className="luminous-infinity__trace"
        d={path}
        fill="none"
        pathLength="1"
        stroke={`url(#${highlightGradientId})`}
        strokeDasharray="0.12 0.2 0.05 0.28 0.08 0.27"
        strokeLinecap="round"
        strokeWidth="1.35"
        transform="translate(0 -4)"
      />
      <path
        className="luminous-infinity__highlight"
        d={path}
        fill="none"
        pathLength="1"
        stroke={`url(#${highlightGradientId})`}
        strokeDasharray="0.05 0.18 0.09 0.24 0.035 0.405"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      {sparks.map((spark) => (
        <circle
          key={`${spark.cx}-${spark.cy}`}
          className="luminous-infinity__spark"
          cx={spark.cx}
          cy={spark.cy}
          r={spark.r}
          fill={`url(#${sparkGradientId})`}
        />
      ))}
    </svg>
  );
}

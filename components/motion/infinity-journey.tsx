"use client";

import { useEffect, useRef } from "react";

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
      className="journey-shell pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <svg
        viewBox="0 0 1200 4700"
        preserveAspectRatio="none"
        className="absolute left-1/2 top-0 h-full w-[1320px] max-w-none -translate-x-1/2 opacity-90 md:w-full"
        focusable="false"
      >
        <path
          d="M640 40 C900 180 940 440 650 540 C370 638 270 410 450 300 C650 178 878 314 840 540 C804 760 450 766 360 980 C270 1198 650 1286 820 1450 C1034 1654 884 1950 574 1918 C290 1888 210 1606 424 1492 C650 1372 940 1554 904 1840 C862 2184 312 2140 270 2470 C236 2748 782 2744 880 3070 C968 3368 530 3466 380 3206 C228 2944 690 2788 872 3028 C1062 3278 766 3688 470 3614 C248 3558 318 3284 548 3316 C854 3360 1000 3942 600 4056 C404 4112 250 3994 294 3822 C344 3628 754 3652 874 3934 C994 4216 724 4510 430 4618"
          fill="none"
          stroke="var(--color-earth)"
          strokeLinecap="round"
          strokeWidth="18"
          opacity="0.17"
          vectorEffect="non-scaling-stroke"
        />
        <path
          className="journey-path-progress"
          pathLength="1"
          d="M640 40 C900 180 940 440 650 540 C370 638 270 410 450 300 C650 178 878 314 840 540 C804 760 450 766 360 980 C270 1198 650 1286 820 1450 C1034 1654 884 1950 574 1918 C290 1888 210 1606 424 1492 C650 1372 940 1554 904 1840 C862 2184 312 2140 270 2470 C236 2748 782 2744 880 3070 C968 3368 530 3466 380 3206 C228 2944 690 2788 872 3028 C1062 3278 766 3688 470 3614 C248 3558 318 3284 548 3316 C854 3360 1000 3942 600 4056 C404 4112 250 3994 294 3822 C344 3628 754 3652 874 3934 C994 4216 724 4510 430 4618"
          fill="none"
          stroke="var(--color-sand)"
          strokeLinecap="round"
          strokeWidth="8"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

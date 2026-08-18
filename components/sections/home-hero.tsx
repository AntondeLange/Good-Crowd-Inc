import { GoodCrowdLogo } from "@/components/brand/good-crowd-logo";
import { ButtonLink } from "@/components/ui/button-link";
import { homeHero } from "@/lib/site-content";

const HERO_LIGHT_MARKERS = Array.from({ length: 8 });
const HERO_STAGE_BAR_HEIGHTS = ["h-20", "h-28", "h-24", "h-32", "h-[5.5rem]"] as const;

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-crowd-brown text-crowd-cream">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(120deg,var(--color-brown)_0%,var(--color-ink)_48%,var(--color-earth)_100%)] opacity-95"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-5rem] top-24 hidden h-80 w-80 rounded-full border border-crowd-sand/20 sm:block md:right-[8vw] md:top-28 md:h-[34rem] md:w-[34rem]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-7rem] left-[8vw] h-52 w-[28rem] rounded-[50%] border-[18px] border-crowd-sand/25"
      />

      <div className="container-crowd relative z-10 grid min-h-[76svh] gap-12 py-16 md:min-h-[70svh] md:grid-cols-[1.05fr_.95fr] md:items-center md:py-20 lg:gap-16">
        <div>
          <GoodCrowdLogo
            variant="onDark"
            priority
            className="h-32 w-32 md:h-36 md:w-36"
          />
          <p className="eyebrow mt-8 text-crowd-sand">{homeHero.eyebrow}</p>
          <h1 className="display mt-5 max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
            You haven’t discovered some of Australia’s best kept secrets yet.{" "}
            <span className="text-crowd-sand">We’re here to fix that.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-crowd-cream/80 md:text-xl md:leading-9">
            {homeHero.body}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={homeHero.primaryCta.href} variant="light">
              {homeHero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={homeHero.secondaryCta.href} variant="ghost">
              {homeHero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <div className="hero-media-stage relative min-h-[28rem] overflow-hidden rounded-[2.25rem] border border-crowd-cream/15 bg-crowd-cream/10 shadow-crowd-lg backdrop-blur-sm sm:min-h-[34rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(244,212,183,0.28),transparent_24%),radial-gradient(circle_at_78%_28%,rgba(251,249,244,0.16),transparent_28%),linear-gradient(135deg,rgba(40,21,14,0.72),rgba(159,120,90,0.72))]" />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(180deg,transparent,rgba(40,21,14,0.35)_18%,rgba(96,46,23,0.78)_72%)]"
          />
          <div
            aria-hidden="true"
            className="absolute left-[-12%] top-[22%] h-40 w-[74%] rotate-[-6deg] rounded-[50%] border border-crowd-sand/40"
          />
          <div
            aria-hidden="true"
            className="absolute right-[-18%] top-[14%] hidden h-56 w-[82%] rotate-[8deg] rounded-[50%] border-[18px] border-crowd-sand/20 sm:block"
          />
          <div
            aria-hidden="true"
            className="absolute left-8 right-8 top-16 flex justify-between opacity-80"
          >
            {HERO_LIGHT_MARKERS.map((_, index) => (
              <span
                key={index}
                className="h-2 w-2 rounded-full bg-crowd-sand shadow-[0_0_22px_rgba(244,212,183,0.75)]"
              />
            ))}
          </div>

          <div
            aria-hidden="true"
            className="absolute bottom-8 left-1/2 z-0 h-32 w-[120%] -translate-x-1/2 rounded-[50%] bg-crowd-brown/40 blur-sm"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-14 left-8 right-8 z-10 grid grid-cols-5 items-end gap-3 sm:left-10 sm:right-10 sm:gap-5"
          >
            {HERO_STAGE_BAR_HEIGHTS.map((height, index) => (
              <span
                key={`${height}-${index}`}
                className={`${height} rounded-t-full bg-crowd-cream/20 ring-1 ring-crowd-cream/20 backdrop-blur-sm`}
              />
            ))}
          </div>
          <div
            aria-hidden="true"
            className="absolute bottom-20 right-8 z-20 hidden h-28 w-44 rounded-[50%] border-[12px] border-crowd-sand/55 sm:block"
          />

          <div className="relative z-30 flex h-full min-h-[28rem] items-end p-5 sm:min-h-[34rem] sm:p-7">
            <div className="w-full rounded-[1.75rem] border border-crowd-cream/20 bg-crowd-brown/40 p-5 backdrop-blur-sm sm:max-w-sm">
              <div className="h-1.5 w-20 rounded-full bg-crowd-sand" />
              <div className="mt-5 grid grid-cols-3 gap-2" aria-hidden="true">
                <span className="h-16 rounded-[1rem] bg-crowd-cream/15" />
                <span className="h-16 rounded-[1rem] bg-crowd-sand/25" />
                <span className="h-16 rounded-[1rem] bg-crowd-cream/15" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

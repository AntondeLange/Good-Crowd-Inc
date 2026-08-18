import { GoodCrowdLogo } from "@/components/brand/good-crowd-logo";
import { ButtonLink } from "@/components/ui/button-link";
import { homeHero } from "@/lib/site-content";

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

        <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-crowd-cream/15 bg-crowd-cream/10 p-5 shadow-crowd-lg backdrop-blur-sm sm:min-h-[28rem] md:p-7">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-16 z-0 h-56 w-56 rounded-full border-[18px] border-crowd-sand/20"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-12 right-10 z-0 hidden h-28 w-56 rounded-[50%] border-[14px] border-crowd-sand/25 sm:block"
          />

          <div className="relative z-10 grid h-full content-between gap-8">
            <div className="rounded-[1.5rem] bg-crowd-cream p-6 text-crowd-brown shadow-crowd">
              <p className="eyebrow text-crowd-earth">Regional Australia</p>
              <p className="mt-5 text-3xl font-black leading-tight tracking-tight md:text-4xl">
                Bringing neighbouring regions together.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
              {["Community pride", "Regional visibility", "Local economic energy"].map(
                (label) => (
                  <div
                    key={label}
                    className="min-h-24 rounded-[1.25rem] border border-crowd-cream/15 bg-crowd-brown/40 p-4 text-sm font-bold leading-5 text-crowd-cream/80"
                  >
                    {label}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

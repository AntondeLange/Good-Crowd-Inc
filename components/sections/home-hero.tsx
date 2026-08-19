import Image from "next/image";
import { GoodCrowdLogo } from "@/components/brand/good-crowd-logo";
import { LuminousInfinity } from "@/components/brand/luminous-infinity";
import { ButtonLink } from "@/components/ui/button-link";
import { homeHero } from "@/lib/site-content";

export function HomeHero() {
  return (
    <section className="relative min-h-[68svh] overflow-hidden bg-crowd-ink text-crowd-cream md:min-h-[70svh]">
      <Image
        src="/images/hero/community-festival-lawn-branded.jpeg"
        alt="A Good Crowd-branded community festival on a regional lawn."
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover object-[center_54%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(40,21,14,0.92)_0%,rgba(40,21,14,0.76)_36%,rgba(96,46,23,0.42)_62%,rgba(40,21,14,0.22)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-[1] h-1/2 bg-[linear-gradient(180deg,transparent,rgba(40,21,14,0.82))]"
      />
      <LuminousInfinity
        variant="hero"
        className="absolute left-[-23rem] top-[41%] z-[1] h-[21rem] w-[58rem] -translate-y-1/2 rotate-[-5deg] opacity-62 sm:left-[-21rem] sm:top-[44%] sm:h-[25rem] sm:w-[68rem] md:left-[-17rem] md:top-[46%] lg:top-[49%]"
      />
      <LuminousInfinity
        variant="streak"
        sparkles={false}
        className="absolute bottom-12 right-[-10rem] z-[1] hidden h-[15rem] w-[38rem] rotate-[7deg] opacity-38 lg:block"
      />

      <div className="container-crowd relative z-20 flex min-h-[68svh] items-end py-10 sm:py-12 md:min-h-[70svh] md:py-14">
        <div className="max-w-5xl">
          <GoodCrowdLogo
            variant="onDark"
            className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32"
          />
          <p className="eyebrow mt-6 text-crowd-sand md:mt-8">{homeHero.eyebrow}</p>
          <h1
            className="display mt-4 max-w-4xl text-4xl sm:mt-5 sm:text-6xl lg:text-7xl"
            aria-label={homeHero.headline}
          >
            You haven’t discovered some of Australia’s best kept secrets yet.{" "}
            <span className="text-crowd-sand">We’re here to fix that.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-crowd-cream/80 md:mt-8 md:text-xl md:leading-9">
            {homeHero.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-4">
            <ButtonLink href={homeHero.primaryCta.href} variant="light">
              {homeHero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={homeHero.secondaryCta.href} variant="ghost">
              {homeHero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

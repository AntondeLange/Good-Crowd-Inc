import Image from "next/image";
import { GoodCrowdLogo } from "@/components/brand/good-crowd-logo";
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
      <div
        aria-hidden="true"
        className="absolute left-[-8rem] top-[18%] z-[1] h-[18rem] w-[32rem] rotate-[-8deg] rounded-[50%] border-[16px] border-crowd-sand/20 sm:h-[24rem] sm:w-[42rem]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-16 right-[-7rem] z-[1] hidden h-[18rem] w-[34rem] rotate-[8deg] rounded-[50%] border border-crowd-cream/25 lg:block"
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

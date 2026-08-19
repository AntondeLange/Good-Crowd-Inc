import type { Metadata } from "next";
import Image from "next/image";
import { LuminousInfinity } from "@/components/brand/luminous-infinity";
import {
  EditorialIntro,
  PortraitPlaceholder,
  SecondaryHero,
  SectionMediaBlock,
} from "@/components/sections/secondary-page-primitives";
import { founders, missionVision, pillars, values } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn why Good Crowd Inc. exists to connect regional communities, celebrate place and support prosperity through purposeful events.",
};

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <SecondaryHero
        eyebrow="About Good Crowd"
        title="When communities collaborate, everyone wins."
        intro="Good Crowd Inc. is a community-led not-for-profit built around purposeful events, regional connection and the belief that neighbouring places can create more together."
        image={{
          src: "/images/place/canola-field-festival-branded.jpeg",
          alt: "A Good Crowd-branded regional festival concept beside a canola field.",
          position: "object-[center_55%]",
        }}
        primaryCta={{ label: "Work With Us", href: "/work-with-us" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
      />

      <EditorialIntro
        eyebrow="Why Good Crowd exists"
        title="Some of Australia&apos;s most extraordinary communities have not been found yet."
      >
        <p>
          Good Crowd Inc. exists to connect regional communities, celebrate what
          makes them unique and unlock economic and social potential through
          connection and high-quality events.
        </p>
        <p>
          The organisation does not work within community boundaries in isolation.
          The model is about bringing neighbouring regions together to create
          something none of them could achieve alone.
        </p>
        <p className="font-bold text-crowd-brown">
          Because when a good crowd gathers, extraordinary things happen.
        </p>
      </EditorialIntro>

      <section className="section-pad bg-crowd-mist">
        <div className="container-crowd">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow text-crowd-brown">People. Place. Prosperity.</p>
              <h2 className="display mt-4 text-4xl md:text-6xl">
                A simple frame for regional possibility.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-crowd-brown/75 lg:justify-self-end">
              Good Crowd uses the frame People. Place. Prosperity. to connect
              community participation, regional visibility and local economic
              energy.
            </p>
          </div>

          <div className="mt-12 grid gap-5">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className={`grid overflow-hidden rounded-[2rem] border border-crowd-brown/10 bg-crowd-cream shadow-crowd lg:grid-cols-[0.72fr_1.28fr] ${
                  index === 1 ? "lg:grid-cols-[1.28fr_0.72fr]" : ""
                }`}
              >
                <div
                  className={`relative min-h-[17rem] bg-crowd-brown ${
                    index === 1 ? "lg:order-2" : ""
                  }`}
                >
                  {pillar.image ? (
                    <Image
                      src={pillar.image.src}
                      alt={pillar.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 36vw"
                      className="object-cover"
                    />
                  ) : null}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(40,21,14,0.02),rgba(40,21,14,0.36))]"
                  />
                </div>
                <div className="flex flex-col justify-end p-6 md:p-8 lg:min-h-[19rem]">
                  <p className="text-sm font-black text-crowd-brown">0{index + 1}</p>
                  <h3 className="mt-6 text-3xl font-black tracking-tight md:text-5xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-crowd-brown/75">
                    {pillar.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-crowd-brown py-20 text-crowd-cream md:py-28">
        <LuminousInfinity
          variant="partial"
          sparkles={false}
          className="absolute right-[-27rem] top-1/2 hidden h-[25rem] w-[58rem] -translate-y-1/2 rotate-[8deg] opacity-30 md:block"
        />
        <div className="container-crowd relative z-10 grid gap-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-crowd-sand">Mission</p>
            <blockquote className="display mt-5 text-4xl md:text-6xl">
              {missionVision.mission}
            </blockquote>
          </div>
          <div className="self-end rounded-[1.5rem] border border-crowd-cream/15 bg-crowd-cream/10 p-6">
            <p className="eyebrow text-crowd-sand">Vision</p>
            <p className="mt-4 text-2xl font-black leading-tight md:text-4xl">
              {missionVision.vision}
            </p>
          </div>
        </div>
      </section>

      <SectionMediaBlock
        eyebrow="How the model works"
        title="Not inside boundaries. Across them."
        body="Good Crowd is designed around collaboration across neighbouring regions: communities, councils, tourism bodies, sponsors, local businesses, suppliers, volunteers and aligned organisations working toward shared regional outcomes."
        image={{
          src: "/images/place/canola-field-farm-dam-aerial.jpeg",
          alt: "Aerial canola landscape with a farm dam.",
          position: "object-[center_52%]",
        }}
        reverse
      />

      <section className="section-pad relative overflow-hidden bg-crowd-cream">
        <LuminousInfinity
          variant="streak"
          sparkles={false}
          className="absolute left-[-12rem] top-16 hidden h-28 w-[34rem] rotate-[-5deg] opacity-20 md:block"
        />
        <div className="container-crowd relative z-10">
          <div className="max-w-4xl">
            <p className="eyebrow text-crowd-brown">Values</p>
            <h2 className="display mt-4 text-4xl md:text-6xl">
              Goodness, connection, glee and community guide the work.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {values.map((value, index) => (
              <article
                key={value.title}
                className={`rounded-[1.5rem] border border-crowd-brown/10 p-6 shadow-crowd md:p-8 ${
                  index === 0
                    ? "bg-crowd-brown text-crowd-cream md:row-span-2"
                    : index === 2
                      ? "bg-crowd-sand"
                      : "bg-crowd-mist"
                }`}
              >
                <p
                  className={`text-sm font-black ${
                    index === 0 ? "text-crowd-sand" : "text-crowd-brown"
                  }`}
                >
                  0{index + 1}
                </p>
                <h3 className="mt-10 text-3xl font-black tracking-tight">
                  {value.title}
                </h3>
                <p
                  className={`mt-5 leading-7 ${
                    index === 0 ? "text-crowd-cream/75" : "text-crowd-brown/75"
                  }`}
                >
                  {value.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-crowd-mist">
        <div className="container-crowd grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow text-crowd-brown">Founders</p>
            <h2 className="display mt-4 text-4xl md:text-6xl">
              Good Crowd was founded by Tamara de Lange and Sarah Moore.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {founders.map((founder, index) => (
              <PortraitPlaceholder
                key={founder.name}
                name={founder.name}
                role={founder.role}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

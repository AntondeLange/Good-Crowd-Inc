import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LuminousInfinity } from "@/components/brand/luminous-infinity";
import {
  EditorialIntro,
  PageCta,
  SecondaryHero,
  SectionMediaBlock,
} from "@/components/sections/secondary-page-primitives";
import { workWithUsAudiences } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Work With Us",
  description:
    "Explore how councils, sponsors, tourism bodies, event partners, suppliers, volunteers and aligned organisations can start a conversation with Good Crowd Inc.",
};

const pathwayImages = [
  {
    src: "/images/events/regional-agricultural-show.jpeg",
    alt: "A regional agricultural show with spectators and a livestock ring.",
  },
  {
    src: "/images/events/garden-event-dining-branded.jpeg",
    alt: "A Good Crowd-branded outdoor dining event setting with tables under lights.",
  },
  {
    src: "/images/place/canola-field-farm-dam-aerial.jpeg",
    alt: "Aerial canola landscape with a farm dam.",
  },
  {
    src: "/images/community/community-market-branded.jpeg",
    alt: "A Good Crowd-branded community market scene with stalls and visitors.",
  },
] as const;

const pathwayNotes = [
  "For host regions exploring events shaped around connection, visibility and place-based outcomes.",
  "For organisations wanting alignment with regional communities, local pride and purposeful participation.",
  "For destination, visitation and regional visibility conversations grounded in place.",
  "For people and organisations interested in participating as plans and opportunities are confirmed.",
] as const;

export default function WorkWithUsPage() {
  return (
    <div className="overflow-hidden">
      <SecondaryHero
        eyebrow="Work with us"
        title="Good things happen when good people work together."
        intro="Good Crowd is built on partnership with councils, sponsors, tourism bodies, event partners, suppliers, volunteers and aligned organisations."
        image={{
          src: "/images/events/regional-show-crowd-branded.jpeg",
          alt: "A Good Crowd-branded regional show crowd concept.",
          position: "object-[center_56%]",
        }}
        primaryCta={{ label: "Start a conversation", href: "/contact" }}
        secondaryCta={{ label: "Read our story", href: "/about" }}
      />

      <EditorialIntro
        eyebrow="Partnership philosophy"
        title="Regional outcomes are stronger when the work is shared."
      >
        <p>
          Good Crowd&apos;s model is collaborative by design. The organisation
          intends to work with councils, government and tourism bodies, sponsors,
          community organisations, local businesses, suppliers, volunteers and
          other aligned partners.
        </p>
        <p>
          The public site does not publish unconfirmed partner names, sponsor
          claims, impact figures or prospectus downloads. Each conversation starts
          with the region, the people involved and the outcome being explored.
        </p>
      </EditorialIntro>

      <section className="section-pad relative overflow-hidden bg-crowd-mist">
        <LuminousInfinity
          variant="partial"
          sparkles={false}
          className="absolute right-[-31rem] top-28 hidden h-[25rem] w-[58rem] rotate-[8deg] opacity-22 lg:block"
        />
        <div className="container-crowd relative z-10">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="eyebrow text-crowd-brown">Partnership pathways</p>
              <h2 className="display mt-4 text-4xl md:text-6xl">
                Different doors into the same regional model.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-crowd-brown/75 lg:justify-self-end">
              Each pathway is deliberately concise until detailed offers,
              prospectus material and operational processes are approved.
            </p>
          </div>

          <div className="mt-12 grid gap-6">
            {workWithUsAudiences.map((audience, index) => (
              <article
                key={audience.title}
                className={`group grid overflow-hidden rounded-[2rem] border border-crowd-brown/10 shadow-crowd transition duration-crowd ease-crowd hover:-translate-y-1 hover:shadow-crowd-lg focus-within:-translate-y-1 focus-within:shadow-crowd-lg lg:grid-cols-[0.78fr_1.22fr] ${
                  index === 1 || index === 3
                    ? "bg-crowd-brown text-crowd-cream lg:grid-cols-[1.22fr_0.78fr]"
                    : "bg-crowd-cream"
                }`}
              >
                <div
                  className={`relative min-h-[16rem] bg-crowd-brown ${
                    index === 1 || index === 3 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={pathwayImages[index].src}
                    alt={pathwayImages[index].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 36vw"
                    className="object-cover transition duration-crowd ease-crowd group-hover:scale-[1.03] group-focus-within:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(40,21,14,0.02),rgba(40,21,14,0.42))]"
                  />
                </div>
                <div className="relative flex flex-col justify-end p-6 md:p-8">
                  {index === 0 ? (
                    <LuminousInfinity
                      variant="corner"
                      sparkles={false}
                      className="absolute right-[-7rem] top-4 hidden h-28 w-56 rotate-[12deg] opacity-24 md:block"
                    />
                  ) : null}
                  <p
                    className={`relative text-sm font-black ${
                      index === 1 || index === 3 ? "text-crowd-sand" : "text-crowd-brown"
                    }`}
                  >
                    0{index + 1}
                  </p>
                  <h3 className="relative mt-8 text-3xl font-black tracking-tight md:text-5xl">
                    {audience.title}
                  </h3>
                  <p
                    className={`relative mt-5 max-w-3xl text-lg leading-8 ${
                      index === 1 || index === 3
                        ? "text-crowd-cream/75"
                        : "text-crowd-brown/75"
                    }`}
                  >
                    {audience.copy}
                  </p>
                  <p
                    className={`relative mt-4 leading-7 ${
                      index === 1 || index === 3
                        ? "text-crowd-cream/68"
                        : "text-crowd-brown/68"
                    }`}
                  >
                    {pathwayNotes[index]}
                  </p>
                  <Link
                    href="/contact"
                    className={`relative mt-7 inline-flex self-start rounded-full text-sm font-black underline underline-offset-4 transition duration-crowd ease-crowd focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-crowd-focus ${
                      index === 1 || index === 3
                        ? "text-crowd-sand decoration-crowd-sand/50 hover:decoration-crowd-cream"
                        : "text-crowd-brown decoration-crowd-earth/40 hover:decoration-crowd-brown"
                    }`}
                  >
                    Start the conversation
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionMediaBlock
        eyebrow="Councils, tourism and destination bodies"
        title="Visibility begins with place."
        body="Good Crowd can be a collaborator around regional visibility, visitation, connection and place-based outcomes. This page keeps those conversations general until confirmed regions, funding or measured impact are approved for publication."
        image={{
          src: "/images/place/canola-field-close-landscape.jpeg",
          alt: "A canola field landscape with foreground flowers and blue sky.",
          position: "object-[center_58%]",
        }}
        dark
      />

      <SectionMediaBlock
        eyebrow="Sponsors and community partners"
        title="Alignment before inventory."
        body="Partnership opportunities should be shaped around regional communities, local pride and purposeful participation. Sponsorship inventory, benefits and prospectus material remain pending until approved."
        image={{
          src: "/images/events/live-music-stage-branded.jpeg",
          alt: "A Good Crowd-branded outdoor live music stage with seated attendees.",
          position: "object-[center_58%]",
        }}
        reverse
      />

      <PageCta
        eyebrow="Next step"
        title="Start with a conversation."
        body="Use the contact page to tell Good Crowd who you are, what kind of partnership you want to explore and what regional outcome matters to you."
        href="/contact"
        label="Contact Good Crowd"
      />
    </div>
  );
}

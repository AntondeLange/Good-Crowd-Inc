import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import {
  approvedEventStories,
  approvedPartnerLogos,
  founders,
  storyCategories,
  values,
  workWithUsAudiences,
  type EventStory,
} from "@/lib/site-content";

type EventMedia = {
  videoSrc?: string;
  posterSrc?: string;
  label: string;
};

const eventMedia: EventMedia | undefined = undefined;

const preparedMetricFields = [
  "Measured attendance",
  "Visitor-origin data",
  "Local economic contribution",
  "Local supplier involvement",
  "Volunteer participation",
  "Media and social reach",
] as const;

export function MissionManifesto() {
  return (
    <section className="relative overflow-hidden bg-crowd-brown py-20 text-crowd-cream md:py-28">
      <div
        aria-hidden="true"
        className="absolute -right-24 top-1/2 z-0 hidden h-72 w-[34rem] -translate-y-1/2 rounded-[50%] border-[22px] border-crowd-sand/10 md:block"
      />
      <div className="container-crowd relative z-10 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
        <div>
          <p className="eyebrow text-crowd-sand">Mission</p>
          <blockquote className="display mt-5 max-w-5xl text-4xl sm:text-5xl lg:text-6xl">
            To gather good crowds in regional Australia through purposeful events and
            experiences that leave lasting pride, visibility and prosperity behind.
          </blockquote>
        </div>
        <div className="rounded-[1.5rem] border border-crowd-cream/15 bg-crowd-cream/10 p-6">
          <p className="eyebrow text-crowd-sand">Vision</p>
          <p className="mt-4 text-2xl font-black leading-tight tracking-tight">
            A future where the communities of regional Australia are no longer the
            best kept secret — they are the destination.
          </p>
        </div>
      </div>
    </section>
  );
}

export function StoryTeaser() {
  return (
    <section className="section-pad bg-crowd-cream">
      <div className="container-crowd grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="eyebrow text-crowd-earth">Our story</p>
          <h2 className="display mt-4 text-5xl md:text-6xl">
            Every community has a good crowd.
          </h2>
        </div>
        <div className="max-w-2xl text-lg leading-8 text-crowd-brown/75">
          <p>
            Good Crowd Inc. exists to connect regional communities, celebrate what
            makes them unique and unlock economic and social potential through
            connection and high-quality events.
          </p>
          <p className="mt-5">
            The model is about bringing neighbouring regions together to create
            something none of them could achieve alone.
          </p>
          <ButtonLink href="/about" variant="secondary" className="mt-8">
            Read Our Story
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function EventMotionReel() {
  return (
    <section className="section-pad bg-crowd-mist">
      <div className="container-crowd grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="eyebrow text-crowd-earth">Event motion</p>
          <h2 className="display mt-4 text-5xl md:text-6xl">
            Future event stories can carry the movement of a place.
          </h2>
          <p className="mt-6 text-lg leading-8 text-crowd-brown/75">
            Approved footage and poster imagery will be used here when real event
            media is ready for publication.
          </p>
        </div>

        <EventMediaFrame media={eventMedia} />
      </div>
    </section>
  );
}

function EventMediaFrame({ media }: { media?: EventMedia }) {
  if (media?.videoSrc) {
    return (
      <video
        className="aspect-[16/10] w-full rounded-crowd object-cover shadow-crowd-lg"
        muted
        playsInline
        loop
        preload="none"
        poster={media.posterSrc}
        aria-label={media.label}
      >
        <source src={media.videoSrc} />
      </video>
    );
  }

  if (media?.posterSrc) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-crowd shadow-crowd-lg">
        <Image
          src={media.posterSrc}
          alt={media.label}
          fill
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className="media-grain relative aspect-[16/10] overflow-hidden rounded-crowd p-6 text-crowd-cream shadow-crowd-lg">
      <div
        aria-hidden="true"
        className="absolute left-8 top-8 z-0 hidden h-28 w-28 rounded-full border-[12px] border-crowd-sand/30 sm:block"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-8 right-8 z-0 hidden h-20 w-48 rounded-[50%] border-[10px] border-crowd-sand/30 sm:block"
      />
      <div className="relative z-10 flex h-full flex-col justify-end">
        <p className="eyebrow text-crowd-sand">Approved media pending</p>
        <p className="mt-4 max-w-md text-3xl font-black leading-tight tracking-tight">
          Approved event film and poster imagery are pending.
        </p>
      </div>
    </div>
  );
}

export function EventStoryArchitecture() {
  return (
    <section className="section-pad bg-crowd-cream">
      <div className="container-crowd">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="eyebrow text-crowd-earth">Event stories</p>
            <h2 className="display mt-4 text-5xl md:text-6xl">
              Impact belongs with evidence.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-crowd-brown/75">
              Event stories will publish when completed-event narrative, media,
              acknowledgements and measured outcomes are approved.
            </p>
          </div>

          <div className="rounded-crowd border border-crowd-brown/10 bg-crowd-mist p-6 shadow-crowd md:p-8">
            <h3 className="text-2xl font-black tracking-tight">Future measured outcomes</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {preparedMetricFields.map((field) => (
                <span
                  key={field}
                  className="rounded-full border border-crowd-brown/15 bg-crowd-cream px-4 py-2 text-sm font-bold text-crowd-brown/75"
                >
                  {field}
                </span>
              ))}
            </div>
            <EventStoryList stories={approvedEventStories} />
          </div>
        </div>
      </div>
    </section>
  );
}

function EventStoryList({ stories }: { stories: EventStory[] }) {
  if (stories.length === 0) {
    return (
      <p className="mt-8 rounded-[1.25rem] bg-crowd-sand p-5 text-sm font-bold leading-6 text-crowd-brown">
        No completed event stories or measured impact data are approved for
        publication yet.
      </p>
    );
  }

  return (
    <div className="mt-8 grid gap-4">
      {stories.map((story) => (
        <article key={story.slug} className="rounded-[1.25rem] bg-crowd-cream p-5">
          <p className="text-sm font-bold text-crowd-earth">{story.category}</p>
          <h3 className="mt-2 text-2xl font-black">{story.title}</h3>
          <p className="mt-3 text-crowd-brown/75">{story.excerpt}</p>
        </article>
      ))}
    </div>
  );
}

export function PartnerCommunitySection() {
  return (
    <section className="section-pad bg-crowd-brown text-crowd-cream">
      <div className="container-crowd grid gap-10 lg:grid-cols-[1fr_18rem] lg:items-center">
        <div>
          <p className="eyebrow text-crowd-sand">Partners & communities</p>
          <h2 className="display mt-4 max-w-4xl text-5xl md:text-6xl">
            Collaboration is part of the model.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-crowd-cream/75">
            Good Crowd intends to work with councils, tourism bodies, sponsors,
            community organisations, local businesses, suppliers and volunteers.
            Confirmed names and logos will appear only when approved.
          </p>
        </div>

        <div className="rounded-crowd border border-crowd-cream/15 bg-crowd-cream/10 p-5">
          {approvedPartnerLogos.length > 0 ? (
            <ul className="grid gap-3">
              {approvedPartnerLogos.map((partner) => (
                <li key={partner.name}>
                  <span className="block rounded-[1rem] bg-crowd-cream px-4 py-3 text-sm font-bold text-crowd-brown">
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      width={180}
                      height={80}
                      sizes="180px"
                      className="h-14 w-full object-contain"
                    />
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm font-bold leading-6 text-crowd-cream/75">
              Approved partner and community logo assets are pending.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export function GoodReadsSection() {
  return (
    <section className="section-pad bg-crowd-cream">
      <div className="container-crowd">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow text-crowd-earth">Good Reads</p>
            <h2 className="display mt-4 text-5xl md:text-6xl">
              Stories from communities, events and regional discoveries.
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <div className="flex flex-wrap gap-3">
              {storyCategories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-crowd-brown/15 bg-crowd-mist px-4 py-2 text-sm font-bold text-crowd-brown/75"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-crowd border border-crowd-brown/10 bg-crowd-mist p-6 shadow-crowd md:p-8">
          <p className="max-w-3xl text-lg leading-8 text-crowd-brown/75">
            Launch stories will appear once final article copy, imagery, region
            details and publication dates are approved.
          </p>
          <ButtonLink href="/stories" variant="secondary" className="mt-7">
            Visit Good Reads
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function WorkWithUsSection() {
  return (
    <section className="section-pad bg-crowd-sand">
      <div className="container-crowd">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow text-crowd-earth">Work with us</p>
            <h2 className="display mt-4 text-5xl md:text-6xl">
              Good things happen when good people work together.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-crowd-brown/75 lg:justify-self-end">
            Good Crowd is built on partnership with councils, sponsors, tourism
            bodies, event partners, suppliers, volunteers and aligned organisations.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {workWithUsAudiences.map((audience, index) => (
            <article
              key={audience.title}
              className="rounded-crowd-sm border border-crowd-brown/10 bg-crowd-cream p-6 shadow-crowd transition duration-crowd ease-crowd hover:-translate-y-1 focus-within:-translate-y-1"
            >
              <p className="text-sm font-black text-crowd-earth">0{index + 1}</p>
              <h3 className="mt-8 text-2xl font-black tracking-tight">
                {audience.title}
              </h3>
              <p className="mt-4 leading-7 text-crowd-brown/75">{audience.copy}</p>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-full text-sm font-black text-crowd-brown underline decoration-crowd-earth/40 underline-offset-4 transition duration-crowd ease-crowd hover:decoration-crowd-brown focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-crowd-focus"
              >
                Start the conversation
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FounderSection() {
  return (
    <section className="section-pad bg-crowd-cream">
      <div className="container-crowd grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="eyebrow text-crowd-earth">Founders</p>
          <h2 className="display mt-4 text-5xl md:text-6xl">
            Good Crowd was founded by Tamara de Lange and Sarah Moore.
          </h2>
          <p className="mt-6 text-lg leading-8 text-crowd-brown/75">
            Founder portraits and public biographies are pending approved launch
            assets. Names are included from the organisational context only.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {founders.map((founder, index) => (
            <article
              key={founder.name}
              tabIndex={0}
              className={`relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-crowd-brown/10 bg-crowd-mist p-6 shadow-crowd transition duration-crowd ease-crowd focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-crowd-focus ${
                index === 0 ? "sm:mt-10" : ""
              }`}
            >
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-10 h-44 w-32 -translate-x-1/2 rounded-[50%] border-[12px] border-crowd-sand bg-crowd-cream"
              />
              <div
                aria-hidden="true"
                className="absolute left-8 top-28 h-24 w-44 rounded-[50%] border border-crowd-earth/30"
              />
              <div className="relative flex min-h-[20rem] flex-col justify-end">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-crowd-earth">
                  {founder.role}
                </p>
                <h3 className="mt-2 text-3xl font-black tracking-tight">
                  {founder.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-crowd-brown/70">
                  Approved portrait and public biography pending.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValuesBand() {
  return (
    <section className="bg-crowd-brown py-16 text-crowd-cream">
      <div className="container-crowd">
        <p className="eyebrow text-crowd-sand">Values</p>
        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {values.map((value) => (
            <article key={value.title} className="rounded-[1.25rem] bg-crowd-cream/10 p-5">
              <h3 className="text-xl font-black tracking-tight">{value.title}</h3>
              <p className="mt-4 text-sm leading-6 text-crowd-cream/75">
                {value.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import { LuminousInfinity } from "@/components/brand/luminous-infinity";
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

const eventMedia: EventMedia = {
  posterSrc: "/images/events/live-music-stage-branded.jpeg",
  label: "A Good Crowd-branded outdoor live music stage with seated attendees.",
};

const GOOD_READS_IMAGE = {
  src: "/images/place/canola-field-close-landscape.jpeg",
  alt: "A canola field in a regional landscape.",
} as const;

const WORK_WITH_US_IMAGE = {
  src: "/images/events/garden-event-dining-branded.jpeg",
  alt: "A Good Crowd-branded outdoor dining event setting with tables under lights.",
} as const;

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
      <LuminousInfinity variant="background" sparkles={false} className="absolute -right-40 top-1/2 z-0 hidden h-72 w-[42rem] -translate-y-1/2 rotate-[4deg] opacity-42 md:block" />
      <div className="container-crowd relative z-10 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
        <div className="relative isolate">
          <div aria-hidden="true" className="absolute -inset-x-3 -inset-y-2 -z-10 bg-crowd-brown md:-inset-x-4" />
          <p className="eyebrow text-crowd-sand">Mission</p>
          <blockquote className="display mt-5 max-w-5xl text-4xl sm:text-5xl lg:text-6xl">To gather good crowds in regional Australia through purposeful events and experiences that leave lasting pride, visibility and prosperity behind.</blockquote>
        </div>
        <div className="rounded-[1.5rem] border border-crowd-cream/15 bg-crowd-cream/10 p-6">
          <p className="eyebrow text-crowd-sand">Vision</p>
          <p className="mt-4 text-2xl font-black leading-tight tracking-tight">A future where the communities of regional Australia are no longer the best kept secret — they are the destination.</p>
        </div>
      </div>
    </section>
  );
}

export function StoryTeaser() {
  return (
    <section className="section-pad bg-crowd-cream">
      <div className="container-crowd grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div><p className="eyebrow text-crowd-brown">Our story</p><h2 className="display mt-4 text-5xl md:text-6xl">Every community has a good crowd.</h2></div>
        <div className="max-w-2xl text-lg leading-8 text-crowd-brown/75">
          <p>Good Crowd Inc. exists to connect regional communities, celebrate what makes them unique and unlock economic and social potential through connection and high-quality events.</p>
          <p className="mt-5">The model is about bringing neighbouring regions together to create something none of them could achieve alone.</p>
          <ButtonLink href="/about" variant="secondary" className="mt-8">Read Our Story</ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function EventMotionReel() {
  return <section className="section-pad relative overflow-hidden bg-crowd-mist"><div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-crowd-cream to-transparent" /><div className="container-crowd grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center"><div><p className="eyebrow text-crowd-brown">Event motion</p><h2 className="display mt-4 text-5xl md:text-6xl">Events should feel alive before the first frame plays.</h2><p className="mt-6 text-lg leading-8 text-crowd-brown/75">Good Crowd designs purposeful events and experiences that bring communities together, celebrate place and create local energy.</p></div><EventMediaFrame media={eventMedia} /></div></section>;
}

function EventMediaFrame({ media }: { media?: EventMedia }) {
  if (media?.videoSrc) return <video className="aspect-[16/10] w-full rounded-crowd object-cover shadow-crowd-lg" muted playsInline loop preload="none" poster={media.posterSrc} aria-label={media.label}><source src={media.videoSrc} /></video>;
  if (media?.posterSrc) return <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-crowd-brown shadow-crowd-lg"><Image src={media.posterSrc} alt={media.label} fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover object-[center_58%]" /><div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(40,21,14,0.08),rgba(40,21,14,0.58))]" /><LuminousInfinity variant="photo" className="absolute bottom-6 right-5 hidden h-24 w-60 -rotate-[5deg] opacity-85 md:block" /></div>;
  return <div className="media-grain relative aspect-[16/9] overflow-hidden rounded-[2.5rem] p-6 text-crowd-cream shadow-crowd-lg"><LuminousInfinity variant="photo" className="absolute bottom-8 right-6 z-0 hidden h-24 w-56 -rotate-[7deg] opacity-70 sm:block" /><div className="relative z-10 flex h-full flex-col justify-end"><div className="flex h-16 w-16 items-center justify-center rounded-full border border-crowd-cream/40 bg-crowd-cream/10 backdrop-blur-sm"><span aria-hidden="true" className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-crowd-cream" /><span className="sr-only">Event film area</span></div></div></div>;
}

export function EventStoryArchitecture() {
  if (approvedEventStories.length === 0) return null;
  return <section className="section-pad bg-crowd-cream"><div className="container-crowd"><div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start"><div><p className="eyebrow text-crowd-brown">Event stories</p><h2 className="display mt-4 text-5xl md:text-6xl">Impact belongs with evidence.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-crowd-brown/75">Impact should be communicated as evidence attached to a real story, not as decorative numbers.</p></div><div className="rounded-crowd border border-crowd-brown/10 bg-crowd-mist p-6 shadow-crowd md:p-8"><h3 className="text-2xl font-black tracking-tight">Measured outcomes</h3><div className="mt-6 flex flex-wrap gap-3">{preparedMetricFields.map((field) => <span key={field} className="rounded-full border border-crowd-brown/15 bg-crowd-cream px-4 py-2 text-sm font-bold text-crowd-brown/75">{field}</span>)}</div><EventStoryList stories={approvedEventStories} /></div></div></div></section>;
}

function EventStoryList({ stories }: { stories: EventStory[] }) {
  if (stories.length === 0) return null;
  return <div className="mt-8 grid gap-4">{stories.map((story) => <article key={story.slug} className="rounded-[1.25rem] bg-crowd-cream p-5"><p className="text-sm font-bold text-crowd-brown">{story.category}</p><h3 className="mt-2 text-2xl font-black">{story.title}</h3><p className="mt-3 text-crowd-brown/75">{story.excerpt}</p></article>)}</div>;
}

export function PartnerCommunitySection() {
  return <section className="section-pad relative overflow-hidden bg-crowd-brown text-crowd-cream"><LuminousInfinity variant="partial" sparkles={false} className="absolute right-[-29rem] top-1/2 h-[24rem] w-[56rem] -translate-y-1/2 rotate-[9deg] opacity-32 md:h-[30rem] md:w-[64rem]" /><div className="container-crowd grid gap-10 lg:grid-cols-[1fr_18rem] lg:items-center"><div><p className="eyebrow text-crowd-sand">Partners & communities</p><h2 className="display mt-4 max-w-4xl text-5xl md:text-6xl">Collaboration is part of the model.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-crowd-cream/75">Good Crowd intends to work with councils, tourism bodies, sponsors, community organisations, local businesses, suppliers and volunteers.</p></div>{approvedPartnerLogos.length > 0 ? <div className="rounded-crowd border border-crowd-cream/15 bg-crowd-cream/10 p-5"><ul className="grid gap-3">{approvedPartnerLogos.map((partner) => <li key={partner.name}><span className="block rounded-[1rem] bg-crowd-cream px-4 py-3 text-sm font-bold text-crowd-brown"><Image src={partner.src} alt={partner.name} width={180} height={80} sizes="180px" className="h-14 w-full object-contain" /></span></li>)}</ul></div> : <div className="hidden lg:block" aria-hidden="true" />}</div></section>;
}

export function GoodReadsSection() {
  return <section className="section-pad bg-crowd-cream"><div className="container-crowd"><div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><p className="eyebrow text-crowd-brown">Good Reads</p><h2 className="display mt-4 text-5xl md:text-6xl">Stories from communities, events and regional discoveries.</h2></div><div className="lg:justify-self-end"><div className="flex flex-wrap gap-3">{storyCategories.map((category) => <span key={category} className="rounded-full border border-crowd-brown/15 bg-crowd-mist px-4 py-2 text-sm font-bold text-crowd-brown/75">{category}</span>)}</div></div></div><div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch"><div className="relative min-h-[20rem] overflow-hidden rounded-[2rem] bg-crowd-brown shadow-crowd-lg lg:min-h-[25rem]"><Image src={GOOD_READS_IMAGE.src} alt={GOOD_READS_IMAGE.alt} fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover object-[center_58%]" /><div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(96,46,23,0.04),rgba(40,21,14,0.34))]" /></div><div className="flex flex-col justify-end rounded-crowd border border-crowd-brown/10 bg-crowd-mist p-6 shadow-crowd md:p-8"><p className="max-w-3xl text-lg leading-8 text-crowd-brown/75">Good Reads is shaped for community profiles, event recaps, regional discoveries and Good Crowd news.</p><ButtonLink href="/stories" variant="secondary" className="mt-7 self-start">Visit Good Reads</ButtonLink></div></div></div></section>;
}

export function WorkWithUsSection() {
  return <section className="section-pad bg-crowd-sand"><div className="container-crowd"><div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"><div><p className="eyebrow text-crowd-brown">Work with us</p><h2 className="display mt-4 text-5xl md:text-6xl">Good things happen when good people work together.</h2></div><p className="max-w-2xl text-lg leading-8 text-crowd-brown/75 lg:justify-self-end">Good Crowd is built on partnership with councils, sponsors, tourism bodies, event partners, suppliers, volunteers and aligned organisations.</p></div><div className="mt-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch"><div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] bg-crowd-brown shadow-crowd-lg md:min-h-[30rem]"><Image src={WORK_WITH_US_IMAGE.src} alt={WORK_WITH_US_IMAGE.alt} fill sizes="(max-width: 1024px) 100vw, 38vw" className="object-cover object-[center_54%]" /><div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(40,21,14,0.08),rgba(40,21,14,0.64))]" /><LuminousInfinity variant="photo" className="absolute bottom-7 left-5 h-28 w-64 rotate-[4deg] opacity-82" /></div><div className="grid gap-5 md:grid-cols-2 lg:auto-rows-fr">{workWithUsAudiences.map((audience, index) => <article key={audience.title} className={`group relative overflow-hidden rounded-[1.5rem] border border-crowd-brown/10 p-6 shadow-crowd transition duration-crowd ease-crowd hover:-translate-y-1 hover:shadow-crowd-lg focus-within:-translate-y-1 focus-within:shadow-crowd-lg ${index === 0 ? "bg-crowd-brown text-crowd-cream md:row-span-2 md:p-8" : index === 2 ? "bg-crowd-mist" : "bg-crowd-cream"}`}><p className={`relative text-sm font-black ${index === 0 ? "text-crowd-sand" : "text-crowd-brown"}`}>0{index + 1}</p><h3 className="relative mt-12 text-2xl font-black tracking-tight md:mt-16">{audience.title}</h3><p className={`relative mt-4 leading-7 ${index === 0 ? "text-crowd-cream/75" : "text-crowd-brown/75"}`}>{audience.copy}</p><Link href="/contact" className={`relative mt-6 inline-flex rounded-full text-sm font-black underline underline-offset-4 transition duration-crowd ease-crowd focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-crowd-focus ${index === 0 ? "text-crowd-sand decoration-crowd-sand/50 hover:decoration-crowd-cream" : "text-crowd-brown decoration-crowd-earth/40 hover:decoration-crowd-brown"}`}>Start the conversation</Link></article>)}</div></div></div></section>;
}

export function FounderSection() {
  return (
    <section className="section-pad bg-crowd-cream">
      <div className="container-crowd grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="eyebrow text-crowd-brown">Founders</p>
          <h2 className="display mt-4 text-5xl md:text-6xl">Good Crowd was founded by Tamara de Lange and Sarah Moore.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-crowd-brown/70">Two founders, one shared belief in the power of regional communities and the good crowds that bring them together.</p>
          <ButtonLink href="/about" variant="secondary" className="mt-8">Meet the Board</ButtonLink>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {founders.map((founder, index) => (
            <article key={founder.name} className={`group relative overflow-hidden rounded-[2rem] bg-crowd-brown shadow-crowd-lg ${index === 0 ? "sm:mt-12" : ""}`}>
              <div className="relative aspect-[4/5] min-h-[28rem] overflow-hidden">
                <Image src={founder.image.src} alt={founder.image.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 32vw" className="object-cover object-top transition duration-500 ease-crowd group-hover:scale-[1.015]" />
                <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(40,21,14,0.22)_67%,rgba(40,21,14,0.94)_100%)]" />
                <LuminousInfinity variant="founder" className="absolute -right-12 bottom-16 h-28 w-64 rotate-[-7deg] opacity-72" />
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-crowd-cream md:p-7">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-crowd-sand">{founder.role}</p>
                  <h3 className="mt-2 text-3xl font-black tracking-tight">{founder.name}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValuesBand() {
  return <section className="relative overflow-hidden bg-crowd-brown py-20 text-crowd-cream md:py-24"><LuminousInfinity variant="partial" sparkles={false} className="absolute left-[-30rem] top-1/2 hidden h-[25rem] w-[58rem] -translate-y-1/2 rotate-[-8deg] opacity-32 md:block" /><div className="container-crowd"><div className="flex flex-col gap-5 border-b border-crowd-cream/15 pb-8 md:flex-row md:items-end md:justify-between"><div className="relative isolate"><div aria-hidden="true" className="absolute -inset-x-3 -inset-y-2 -z-10 bg-crowd-brown md:-inset-x-4" /><p className="eyebrow text-crowd-sand">Values</p><h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">Goodness, connection, glee and community guide the work.</h2></div></div><div className="mt-8 grid gap-4 md:grid-cols-4">{values.map((value, index) => <article key={value.title} tabIndex={0} className="group rounded-[1.25rem] border border-crowd-cream/25 bg-crowd-brown p-5 shadow-[0_18px_45px_rgba(40,21,14,0.18)] transition duration-crowd ease-crowd hover:-translate-y-1 hover:border-crowd-sand/55 focus-visible:-translate-y-1 focus-visible:border-crowd-sand/55 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-crowd-focus"><p className="text-sm font-black text-crowd-sand/75">0{index + 1}</p><h3 className="text-xl font-black tracking-tight">{value.title}</h3><p className="mt-4 text-sm leading-6 text-crowd-cream/75">{value.copy}</p></article>)}</div></div></section>;
}

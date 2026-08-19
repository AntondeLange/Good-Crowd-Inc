import Image from "next/image";
import { LuminousInfinity } from "@/components/brand/luminous-infinity";
import { pillars } from "@/lib/site-content";

const PILLAR_MEDIA_ALIGNMENTS = [
  "items-end justify-start",
  "items-center justify-center",
  "items-end justify-end",
] as const;

const PILLAR_IMAGE_POSITIONS = [
  "object-[center_52%]",
  "object-[center_55%]",
  "object-[center_58%]",
] as const;

const PILLAR_CARD_OFFSETS = ["", "lg:mt-12", "lg:mt-4"] as const;

const PILLAR_GLYPH_PATHS = [
  "M7.5 15.5c2.5-4 6.5-4 9 0m-7-6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm10 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  "M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  "M4 19h16M7 16v-4m5 4V8m5 8v-7M6 8l4 3 4-5 4 2",
] as const;

export function PeoplePlaceProsperity() {
  return (
    <section className="section-pad relative bg-crowd-cream">
      <div className="container-crowd">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="eyebrow text-crowd-brown">How good crowds gather</p>
            <h2 className="display mt-4 text-5xl md:text-6xl">
              People. Place. Prosperity.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-crowd-brown/75 lg:justify-self-end">
            Good Crowd’s work is built around connection, regional visibility and
            economic energy that flows into local businesses, producers and makers.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-7">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              tabIndex={0}
              className={`pillar-card group relative min-h-[32rem] overflow-hidden rounded-[2rem] bg-crowd-brown text-crowd-cream shadow-crowd-lg transition duration-crowd ease-crowd focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-crowd-focus md:min-h-[36rem] ${PILLAR_CARD_OFFSETS[index]}`}
            >
              <div className="absolute inset-0 z-0 overflow-hidden bg-crowd-brown">
                {pillar.image ? (
                  <Image
                    src={pillar.image.src}
                    alt={pillar.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`object-cover transition duration-crowd ease-crowd group-hover:scale-105 group-focus:scale-105 ${PILLAR_IMAGE_POSITIONS[index]}`}
                  />
                ) : (
                  <PillarMedia index={index} />
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(40,21,14,0.16)_0%,rgba(40,21,14,0.28)_36%,rgba(40,21,14,0.88)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_18%,rgba(244,212,183,0.2),transparent_28%)]" />
              </div>

              <div className="absolute left-5 right-5 top-5 z-10 flex items-center justify-between">
                <p className="rounded-full border border-crowd-cream/25 bg-crowd-brown/35 px-3 py-2 text-sm font-black text-crowd-sand backdrop-blur-sm">
                  0{index + 1}
                </p>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-crowd-sand text-crowd-brown shadow-crowd transition duration-crowd ease-crowd group-hover:scale-110 group-focus:scale-110">
                  <PillarGlyph index={index} />
                </div>
              </div>

              <div className="relative z-10 flex min-h-[32rem] flex-col justify-end p-7 md:min-h-[36rem] md:p-8">
                <h3 className="text-5xl font-black tracking-tight text-crowd-cream">
                  {pillar.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-crowd-cream/80">
                  {pillar.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarMedia({ index }: { index: number }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 flex ${PILLAR_MEDIA_ALIGNMENTS[index]} overflow-hidden bg-[linear-gradient(135deg,var(--color-brown),var(--color-earth))] p-6`}
    >
      <div className="absolute inset-x-0 bottom-0 h-20 bg-crowd-brown/40" />
      <LuminousInfinity
        variant="photo"
        className="absolute -right-16 top-4 h-36 w-72 -rotate-[7deg] opacity-65"
      />
      <LuminousInfinity
        variant="corner"
        sparkles={false}
        className="absolute left-[-5rem] top-4 h-32 w-64 rotate-[12deg] opacity-45"
      />
      <div className="relative flex items-end gap-3">
        {Array.from({ length: 4 + index }).map((_, markerIndex) => (
          <span
            key={markerIndex}
            className="block h-16 w-9 rounded-t-full bg-crowd-cream/20 ring-1 ring-crowd-cream/20"
          />
        ))}
      </div>
    </div>
  );
}

function PillarGlyph({ index }: { index: number }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <path d={PILLAR_GLYPH_PATHS[index]} />
    </svg>
  );
}

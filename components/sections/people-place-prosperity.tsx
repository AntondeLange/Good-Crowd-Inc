import Image from "next/image";
import { pillars } from "@/lib/site-content";

const PILLAR_MEDIA_ALIGNMENTS = [
  "items-end justify-start",
  "items-center justify-center",
  "items-end justify-end",
] as const;

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
            <p className="eyebrow text-crowd-earth">How good crowds gather</p>
            <h2 className="display mt-4 text-5xl md:text-6xl">
              People. Place. Prosperity.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-crowd-brown/75 lg:justify-self-end">
            Good Crowd’s work is built around connection, regional visibility and
            economic energy that flows into local businesses, producers and makers.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-7">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              tabIndex={0}
              className="pillar-card group relative min-h-[31rem] overflow-hidden rounded-[2rem] bg-crowd-mist shadow-crowd-lg transition duration-crowd ease-crowd focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-crowd-focus"
            >
              <div className="relative h-48 overflow-hidden rounded-b-[2rem] bg-crowd-brown md:h-56">
                {pillar.image ? (
                  <Image
                    src={pillar.image.src}
                    alt={pillar.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-crowd ease-crowd group-hover:scale-105 group-focus-within:scale-105"
                  />
                ) : (
                  <PillarMedia index={index} />
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(96,46,23,0.72))]" />
                <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-full bg-crowd-sand text-crowd-brown shadow-crowd transition duration-crowd ease-crowd group-hover:scale-110 group-focus-within:scale-110">
                  <PillarGlyph index={index} />
                </div>
              </div>

              <div className="relative p-7 md:p-8">
                <p className="text-sm font-black text-crowd-earth">0{index + 1}</p>
                <h3 className="mt-8 text-4xl font-black tracking-tight text-crowd-brown">
                  {pillar.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-crowd-brown/75">
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
      <div className="absolute left-6 top-6 h-20 w-20 rounded-full border-[10px] border-crowd-sand/30" />
      <div className="absolute right-[-2rem] top-10 h-32 w-56 rotate-[-8deg] rounded-[50%] border-[12px] border-crowd-cream/20" />
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

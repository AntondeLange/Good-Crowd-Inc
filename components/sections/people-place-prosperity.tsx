import { pillars } from "@/lib/site-content";

export function PeoplePlaceProsperity() {
  return (
    <section className="section-pad relative z-10 bg-crowd-cream">
      <div className="container-crowd">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
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

        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:gap-7">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              tabIndex={0}
              className="pillar-card group relative min-h-[21rem] overflow-hidden rounded-crowd bg-crowd-mist p-7 shadow-crowd transition duration-crowd ease-crowd focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-crowd-focus md:p-8"
            >
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-36 w-36 rounded-full border-[14px] border-crowd-sand/55 transition duration-crowd ease-crowd group-hover:scale-110 group-focus-within:scale-110"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-7 right-7 h-20 w-40 rounded-[50%] border border-crowd-brown/10"
              />
              <p className="relative text-sm font-black text-crowd-earth">
                0{index + 1}
              </p>
              <h3 className="relative mt-24 text-4xl font-black tracking-tight text-crowd-brown md:mt-28">
                {pillar.title}
              </h3>
              <p className="relative mt-5 text-base leading-7 text-crowd-brown/75">
                {pillar.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

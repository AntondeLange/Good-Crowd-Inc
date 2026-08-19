import type { Metadata } from "next";
import { ArticleGrid, SecondaryHero } from "@/components/sections/secondary-page-primitives";
import { approvedGoodReads, storyCategories } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Good Reads",
  description:
    "Good Reads is Good Crowd Inc.'s future editorial home for community profiles, event recaps, regional discoveries and Good Crowd news.",
};

export default function StoriesPage() {
  return (
    <div className="overflow-hidden">
      <SecondaryHero
        eyebrow="Good Reads"
        title="Stories from communities, events and regional discoveries."
        intro="Good Reads is shaped as a future editorial home for community profiles, event recaps, regional discoveries and Good Crowd news."
        image={{
          src: "/images/place/sheep-grazing-regional-landscape.jpeg",
          alt: "Sheep grazing across rolling regional pasture.",
          position: "object-[center_50%]",
        }}
        primaryCta={{ label: "Work With Us", href: "/work-with-us" }}
      />

      <section className="section-pad bg-crowd-cream">
        <div className="container-crowd">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="eyebrow text-crowd-brown">Editorial categories</p>
              <h2 className="display mt-4 text-4xl md:text-6xl">
                A simple architecture for real stories when they are ready.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
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

          <div className="mt-12">
            <ArticleGrid articles={approvedGoodReads} />
          </div>
        </div>
      </section>

      <section className="section-pad bg-crowd-brown text-crowd-cream">
        <div className="container-crowd grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow text-crowd-sand">Content integrity</p>
            <h2 className="display mt-4 text-4xl md:text-6xl">
              No fictional headlines, dates or event recaps.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-crowd-cream/75 lg:justify-self-end">
            The article grid, card model and future full-story pages are ready for
            approved content, but Good Reads remains empty until real article
            material is supplied.
          </p>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { PageCta, SecondaryHero } from "@/components/sections/secondary-page-primitives";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Good Crowd Inc. about councils, sponsorship, tourism, community, media or event participation enquiries.",
};

const contactPathways = [
  {
    title: "Councils and host regions",
    copy: "For conversations about regional events, community connection and place-based outcomes.",
  },
  {
    title: "Sponsors and corporate partners",
    copy: "For values-aligned partnership and sponsorship conversations.",
  },
  {
    title: "Tourism and government bodies",
    copy: "For regional visibility, visitation and destination-development conversations.",
  },
  {
    title: "Community, media and participation",
    copy: "For community interest, media enquiries or event participation conversations.",
  },
] as const;

export default function ContactPage() {
  return (
    <div className="overflow-hidden">
      <SecondaryHero
        eyebrow="Contact"
        title="Start a conversation with Good Crowd."
        intro="Use the form to share who you are and what kind of regional, partnership, community or media conversation you want to explore."
        image={{
          src: "/images/events/regional-festival-camping.jpeg",
          alt: "Festival camping tents in an open agricultural landscape.",
          position: "object-[center_52%]",
        }}
        secondaryCta={{ label: "Work With Us", href: "/work-with-us" }}
      />

      <section className="section-pad bg-crowd-cream">
        <div className="container-crowd grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="eyebrow text-crowd-brown">Enquiry form</p>
            <h2 className="display mt-4 text-4xl md:text-6xl">
              Tell us who you are and what you want to explore.
            </h2>
            <p className="mt-6 text-lg leading-8 text-crowd-brown/75">
              Whether you represent a region, organisation, business, community or media outlet, tell us what you have in mind and how Good Crowd may be able to help.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="section-pad bg-crowd-mist">
        <div className="container-crowd">
          <div className="max-w-4xl">
            <p className="eyebrow text-crowd-brown">Contact pathways</p>
            <h2 className="display mt-4 text-4xl md:text-6xl">
              Choose the path that best fits the conversation.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {contactPathways.map((pathway, index) => (
              <article
                key={pathway.title}
                className={`rounded-[1.5rem] border border-crowd-brown/10 p-6 shadow-crowd md:p-8 ${
                  index === 0
                    ? "bg-crowd-brown text-crowd-cream"
                    : index === 2
                      ? "bg-crowd-sand"
                      : "bg-crowd-cream"
                }`}
              >
                <p
                  className={`text-sm font-black ${
                    index === 0 ? "text-crowd-sand" : "text-crowd-brown"
                  }`}
                >
                  0{index + 1}
                </p>
                <h3 className="mt-8 text-3xl font-black tracking-tight">
                  {pathway.title}
                </h3>
                <p
                  className={`mt-4 leading-7 ${
                    index === 0 ? "text-crowd-cream/75" : "text-crowd-brown/75"
                  }`}
                >
                  {pathway.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        eyebrow="Work with us"
        title="Good conversations are a good place to start."
        body="Explore the ways councils, tourism bodies, sponsors, community organisations, suppliers and event partners can work with Good Crowd."
        href="/work-with-us"
        label="View partnership paths"
      />
    </div>
  );
}

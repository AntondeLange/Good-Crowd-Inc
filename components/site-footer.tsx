import Link from "next/link";
import { GoodCrowdLogo } from "@/components/brand/good-crowd-logo";
import { LuminousInfinity } from "@/components/brand/luminous-infinity";
import { ButtonLink } from "@/components/ui/button-link";
import { siteNav } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-crowd-brown py-14 text-crowd-cream md:py-20">
      <LuminousInfinity
        variant="footer"
        sparkles={false}
        className="absolute -right-40 top-4 h-72 w-[34rem] rotate-[13deg] opacity-32 md:h-[28rem] md:w-[52rem]"
      />
      <LuminousInfinity
        variant="streak"
        sparkles={false}
        className="absolute bottom-8 right-8 hidden h-28 w-72 -rotate-[4deg] opacity-38 md:block"
      />

      <div className="container-crowd relative grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
        <div>
          <Link
            href="/"
            aria-label="Good Crowd Inc home"
            className="inline-block rounded-xl focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-crowd-focus"
          >
            <GoodCrowdLogo
              variant="onDark"
              className="h-32 w-32 md:h-36 md:w-36"
            />
          </Link>
          <p className="mt-6 max-w-xl text-3xl font-black leading-tight tracking-tight md:text-5xl">
            People. Place. Prosperity.
          </p>
          <p className="mt-5 max-w-lg text-base leading-7 text-crowd-cream/75">
            To gather good crowds in regional Australia through purposeful events and
            experiences that leave lasting pride, visibility and prosperity behind.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:pt-4">
          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-crowd-sand">
              Explore
            </h2>
            <ul className="mt-5 grid gap-3">
              {siteNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-md text-sm font-bold text-crowd-cream/75 transition duration-crowd ease-crowd hover:text-crowd-sand focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-crowd-focus"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-crowd-sand">
              Start a conversation
            </h2>
            <p className="mt-5 text-sm leading-6 text-crowd-cream/75">
              Use the contact form for council, sponsor, tourism, community, media
              or event participation enquiries.
            </p>
            <ButtonLink href="/contact" variant="light" className="mt-6">
              Contact Good Crowd
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="container-crowd relative mt-12 border-t border-crowd-cream/15 pt-7 text-sm leading-6 text-crowd-cream/60">
        <p>Copyright Good Crowd Inc.</p>
      </div>
    </footer>
  );
}

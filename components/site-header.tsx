import Link from "next/link";
import { GoodCrowdLogo } from "@/components/brand/good-crowd-logo";
import { MobileMenu } from "@/components/navigation/mobile-menu";
import { ButtonLink } from "@/components/ui/button-link";
import { siteNav } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-crowd-brown/10 bg-crowd-cream shadow-[0_10px_30px_rgba(96,46,23,0.06)]">
      <div className="container-crowd flex min-h-20 items-center justify-between gap-5 py-3">
        <Link
          href="/"
          className="block rounded-xl focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-crowd-focus"
          aria-label="Good Crowd Inc home"
        >
          <GoodCrowdLogo
            variant="onLight"
            priority
            className="h-16 w-16 md:h-20 md:w-20"
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 text-sm font-bold lg:flex"
        >
          {siteNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-3 text-crowd-brown/80 transition duration-crowd ease-crowd hover:bg-crowd-sand hover:text-crowd-brown focus-visible:bg-crowd-sand focus-visible:text-crowd-brown focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-crowd-focus"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href="/work-with-us" className="hidden md:inline-flex">
            Work With Us
          </ButtonLink>
          <MobileMenu links={siteNav} />
        </div>
      </div>
    </header>
  );
}

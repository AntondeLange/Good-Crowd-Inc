"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { siteNav } from "@/lib/site-content";

type MobileMenuProps = {
  links: typeof siteNav;
};

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-crowd-brown/20 bg-crowd-cream text-crowd-brown transition duration-crowd ease-crowd hover:bg-crowd-sand focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-crowd-focus"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        <span aria-hidden="true" className="grid gap-1.5">
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition duration-crowd ease-crowd ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition duration-crowd ease-crowd ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition duration-crowd ease-crowd ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="fixed inset-x-4 top-24 z-40 rounded-[1.75rem] border border-crowd-brown/10 bg-crowd-cream p-5 shadow-crowd-lg transition duration-crowd ease-crowd"
        >
          <nav aria-label="Mobile navigation">
            <ul className="grid gap-2">
              {links.map((link, index) => {
                const isCurrent = pathname === link.href;

                return (
                  <li key={link.href}>
                    <Link
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={link.href}
                      aria-current={isCurrent ? "page" : undefined}
                      onClick={() => setIsOpen(false)}
                      className="flex min-h-12 items-center justify-between rounded-2xl px-4 text-lg font-bold text-crowd-brown transition duration-crowd ease-crowd hover:bg-crowd-sand focus-visible:bg-crowd-sand focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-crowd-focus"
                    >
                      {link.label}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { LuminousInfinity } from "@/components/brand/luminous-infinity";
import { ButtonLink } from "@/components/ui/button-link";
import type { GoodReadArticle } from "@/lib/site-content";

type EditorialImage = {
  src: string;
  alt: string;
  position?: string;
};

type SecondaryHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: EditorialImage;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

type EditorialIntroProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

type SectionMediaBlockProps = {
  eyebrow: string;
  title: string;
  body: string;
  image: EditorialImage;
  reverse?: boolean;
  dark?: boolean;
};

type PageCtaProps = {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  label: string;
};

type PortraitPlaceholderProps = {
  name: string;
  role: string;
  index: number;
};

type ArticleGridProps = {
  articles: readonly GoodReadArticle[];
};

export function SecondaryHero({
  eyebrow,
  title,
  intro,
  image,
  primaryCta,
  secondaryCta,
}: SecondaryHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-crowd-brown text-crowd-cream">
      <LuminousInfinity
        variant="partial"
        sparkles={false}
        className="absolute -left-56 top-12 z-0 h-72 w-[44rem] rotate-[-8deg] opacity-28 md:-left-72 md:h-[30rem] md:w-[60rem]"
      />
      <LuminousInfinity
        variant="streak"
        sparkles={false}
        className="absolute bottom-12 right-[-9rem] z-0 hidden h-28 w-[34rem] rotate-[7deg] opacity-24 lg:block"
      />

      <div className="container-crowd relative z-10 grid gap-10 py-16 md:py-20 lg:min-h-[34rem] lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <div className="max-w-4xl lg:pb-8">
          <p className="eyebrow text-crowd-sand">{eyebrow}</p>
          <h1 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-crowd-cream/78 md:text-xl md:leading-9">
            {intro}
          </p>
          {primaryCta || secondaryCta ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta ? (
                <ButtonLink href={primaryCta.href} variant="light">
                  {primaryCta.label}
                </ButtonLink>
              ) : null}
              {secondaryCta ? (
                <ButtonLink href={secondaryCta.href} variant="ghost">
                  {secondaryCta.label}
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="relative min-h-[21rem] overflow-hidden rounded-[2.5rem] border border-crowd-cream/15 bg-crowd-ink shadow-crowd-lg md:min-h-[30rem]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-cover ${image.position ?? "object-center"}`}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(40,21,14,0.04),rgba(40,21,14,0.54))]"
          />
          <LuminousInfinity
            variant="photo"
            className="absolute bottom-6 left-4 h-24 w-60 rotate-[6deg] opacity-60 md:bottom-8 md:left-6"
          />
        </div>
      </div>
    </section>
  );
}

export function EditorialIntro({ eyebrow, title, children }: EditorialIntroProps) {
  return (
    <section className="section-pad bg-crowd-cream">
      <div className="container-crowd grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div>
          <p className="eyebrow text-crowd-brown">{eyebrow}</p>
          <h2 className="display mt-4 text-4xl md:text-6xl">{title}</h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-crowd-brown/75">
          {children}
        </div>
      </div>
    </section>
  );
}

export function SectionMediaBlock({
  eyebrow,
  title,
  body,
  image,
  reverse = false,
  dark = false,
}: SectionMediaBlockProps) {
  const text = (
    <div>
      <p className={`eyebrow ${dark ? "text-crowd-sand" : "text-crowd-brown"}`}>
        {eyebrow}
      </p>
      <h2 className="display mt-4 text-4xl md:text-6xl">{title}</h2>
      <p
        className={`mt-6 text-lg leading-8 ${
          dark ? "text-crowd-cream/75" : "text-crowd-brown/75"
        }`}
      >
        {body}
      </p>
    </div>
  );

  const media = (
    <div className="relative min-h-[20rem] overflow-hidden rounded-[2rem] bg-crowd-brown shadow-crowd-lg md:min-h-[28rem]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 45vw"
        className={`object-cover ${image.position ?? "object-center"}`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(96,46,23,0.02),rgba(40,21,14,0.34))]"
      />
    </div>
  );

  return (
    <section
      className={`section-pad relative overflow-hidden ${
        dark ? "bg-crowd-brown text-crowd-cream" : "bg-crowd-mist"
      }`}
    >
      <LuminousInfinity
        variant="streak"
        sparkles={false}
        className={`absolute hidden h-28 w-[34rem] opacity-20 md:block ${
          reverse
            ? "left-[-12rem] top-16 rotate-[-4deg]"
            : "right-[-12rem] bottom-12 rotate-[6deg]"
        }`}
      />
      <div
        className={`container-crowd relative z-10 grid gap-10 lg:grid-cols-2 lg:items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {text}
        {media}
      </div>
    </section>
  );
}

export function PageCta({ eyebrow, title, body, href, label }: PageCtaProps) {
  return (
    <section className="relative overflow-hidden bg-crowd-sand py-16 md:py-20">
      <LuminousInfinity
        variant="partial"
        sparkles={false}
        className="absolute right-[-22rem] top-1/2 hidden h-72 w-[52rem] -translate-y-1/2 rotate-[8deg] opacity-22 md:block"
      />
      <div className="container-crowd relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-4xl">
          <p className="eyebrow text-crowd-brown">{eyebrow}</p>
          <h2 className="display mt-4 text-4xl md:text-6xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-crowd-brown/75">
            {body}
          </p>
        </div>
        <ButtonLink href={href} variant="primary" className="self-start lg:self-end">
          {label}
        </ButtonLink>
      </div>
    </section>
  );
}

export function PortraitPlaceholder({ name, role, index }: PortraitPlaceholderProps) {
  return (
    <article
      tabIndex={0}
      className={`group relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-crowd-brown/10 bg-crowd-mist p-6 shadow-crowd transition duration-crowd ease-crowd hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-crowd-focus ${
        index === 0 ? "sm:mt-10" : ""
      }`}
    >
      <LuminousInfinity
        variant="founder"
        sparkles={false}
        className="absolute left-1/2 top-8 h-48 w-72 -translate-x-1/2 rotate-[-8deg] opacity-34 transition duration-crowd ease-crowd group-hover:scale-105 group-focus-visible:scale-105"
      />
      <div className="relative flex min-h-[18rem] flex-col justify-end">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-crowd-brown">
          {role}
        </p>
        <h3 className="mt-2 text-3xl font-black tracking-tight">{name}</h3>
        <p className="mt-4 text-sm leading-6 text-crowd-brown/65">
          Portrait and public biography pending approved source material.
        </p>
      </div>
    </article>
  );
}

export function ArticleGrid({ articles }: ArticleGridProps) {
  if (articles.length === 0) {
    return (
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="relative min-h-[19rem] overflow-hidden rounded-[2rem] bg-crowd-brown shadow-crowd-lg md:min-h-[24rem]">
          <Image
            src="/images/place/green-cropping-landscape.jpeg"
            alt="An expansive green cropping landscape beneath a cloudy regional sky."
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-[center_55%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(40,21,14,0.02),rgba(40,21,14,0.46))]"
          />
        </div>
        <div className="flex flex-col justify-end rounded-crowd border border-crowd-brown/10 bg-crowd-mist p-6 shadow-crowd md:p-8">
          <p className="eyebrow text-crowd-brown">Publication-ready</p>
          <h2 className="mt-4 max-w-xl text-3xl font-black tracking-tight md:text-5xl">
            Good Reads will open when article content is approved.
          </h2>
          <p className="mt-5 text-lg leading-8 text-crowd-brown/75">
            The page is prepared for community profiles, event recaps, regional
            discoveries and Good Crowd news without publishing fictional articles,
            dates, authors or regions.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  );
}

function ArticleCard({ article }: { article: GoodReadArticle }) {
  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-crowd-brown/10 bg-crowd-mist shadow-crowd">
      {article.heroImage ? (
        <div className="relative aspect-[4/3] bg-crowd-brown">
          <Image
            src={article.heroImage.src}
            alt={article.heroImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      ) : null}
      <div className="p-6">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-crowd-brown">
          {article.category}
        </p>
        <h2 className="mt-3 text-2xl font-black tracking-tight">{article.title}</h2>
        <p className="mt-4 leading-7 text-crowd-brown/75">{article.excerpt}</p>
        <Link
          href={`/stories/${article.slug}`}
          className="mt-6 inline-flex rounded-full text-sm font-black underline underline-offset-4 decoration-crowd-earth/40 transition duration-crowd ease-crowd hover:decoration-crowd-brown focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-crowd-focus"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}

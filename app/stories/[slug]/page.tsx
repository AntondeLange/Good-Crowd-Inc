import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { approvedGoodReads } from "@/lib/site-content";

type StoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function findArticle(slug: string) {
  return approvedGoodReads.find((article) => article.slug === slug);
}

export function generateStaticParams() {
  return approvedGoodReads.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle(slug);

  if (!article) {
    return {
      title: "Good Reads",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function StoryDetailPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const article = findArticle(slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    articleSection: article.category,
    datePublished: article.publishedAt,
  };

  return (
    <article className="overflow-hidden bg-crowd-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="container-crowd py-16 md:py-24">
        <p className="eyebrow text-crowd-brown">{article.category}</p>
        <h1 className="display mt-5 max-w-5xl text-5xl md:text-7xl">
          {article.title}
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-crowd-brown/75 md:text-xl md:leading-9">
          {article.excerpt}
        </p>
      </header>

      {article.heroImage ? (
        <div className="container-crowd pb-16">
          <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] bg-crowd-brown shadow-crowd-lg md:min-h-[34rem]">
            <Image
              src={article.heroImage.src}
              alt={article.heroImage.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      ) : null}
    </article>
  );
}

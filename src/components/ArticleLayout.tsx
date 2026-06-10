import Image from "next/image";
import type { ReactNode } from "react";
import { PageHero } from "./PageHero";
import { CtaBand } from "./CtaBand";
import { articleSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
import type { ArticleMeta } from "@/content/articles";

/**
 * Shared shell for resource articles: breadcrumbed header, lead image,
 * prose column, Article + BreadcrumbList schema, closing CTA.
 */
export function ArticleLayout({
  meta,
  children,
  ctaHeading,
}: {
  meta: ArticleMeta;
  children: ReactNode;
  ctaHeading?: string;
}) {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources/" },
    { name: meta.title, href: `/resources/${meta.slug}/` },
  ];

  return (
    <>
      <PageHero
        eyebrow={`Guide · ${meta.readMinutes} min read`}
        title={meta.title}
        lede={meta.description}
        crumbs={crumbs}
      />
      <article className="bg-cream-50">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <Image
              src={meta.image}
              alt={meta.imageAlt}
              width={1400}
              height={1050}
              sizes="(min-width: 768px) 720px, 100vw"
              className="w-full object-cover"
              priority
            />
          </div>
          {/*
           * Prose styling via descendant selectors keeps the article pages
           * down to plain semantic HTML — easy for the owner to edit later.
           */}
          <div
            className="prose-article mt-10 space-y-5 leading-relaxed text-ink-soft
              [&_a]:font-semibold [&_a]:text-navy-800 [&_a]:underline [&_a]:decoration-grass-500 [&_a]:decoration-2 [&_a]:underline-offset-4
              [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-navy-900
              [&_h3]:mt-7 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-navy-900
              [&_li]:my-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_strong]:font-semibold [&_strong]:text-navy-900
              [&_ul]:list-disc [&_ul]:pl-5"
          >
            {children}
          </div>
        </div>
      </article>
      <CtaBand
        heading={ctaHeading ?? "Questions about your own home? Ask a neighbor."}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          articleSchema({
            title: meta.title,
            description: meta.description,
            slug: `/resources/${meta.slug}/`,
            datePublished: meta.datePublished,
          }),
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(crumbs))}
      />
    </>
  );
}

import Link from "next/link";
import { Reveal } from "./Reveal";

/**
 * Interior page header with optional breadcrumb trail.
 * Pair with breadcrumbSchema() for BreadcrumbList structured data.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  crumbs?: { name: string; href: string }[];
}) {
  return (
    <div className="border-b border-cream-200 bg-cream-100">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-soft">
              {crumbs.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <span aria-hidden="true" className="text-earth-500">
                      /
                    </span>
                  )}
                  {i === crumbs.length - 1 ? (
                    <span aria-current="page" className="font-medium text-navy-900">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="hover:text-navy-900 hover:underline"
                    >
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grass-600">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {lede}
          </p>
        </Reveal>
      </div>
    </div>
  );
}

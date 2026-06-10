import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Schedule a Free Storm Shelter Site Evaluation",
  description:
    "Request a free, no-obligation storm shelter site evaluation in Bowling Green or anywhere in Warren County & South Central KY. Call (270) 202-5380 or send the form; a local neighbor responds within one business day.",
  alternates: { canonical: "/contact/" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact/" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Free local site evaluation"
        title="Let's protect your family, starting with a conversation"
        lede="Send the form or call. We'll walk your property, answer every question, and give you an honest written recommendation. No obligation, no pressure; that's the neighborly way."
        crumbs={crumbs}
      />

      <section className="bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy-900">
                Talk to a neighbor
              </h2>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-grass-600">
                    Phone (call or text)
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={site.phoneHref}
                      className="font-display text-2xl font-bold text-navy-800 hover:text-grass-600"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-grass-600">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${site.email}`}
                      className="font-medium text-navy-800 underline decoration-grass-500 decoration-2 underline-offset-4 hover:text-grass-600"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-grass-600">
                    Hours
                  </dt>
                  <dd className="mt-1 text-ink-soft">{site.hours}</dd>
                  <dd className="text-sm text-ink-soft">
                    (If a storm just came through, call any time; we answer.)
                  </dd>
                </div>
              </dl>

              <div className="mt-8 rounded-2xl border border-cream-300 bg-white p-6 shadow-soft">
                <h3 className="font-display font-bold text-navy-900">
                  Our service area
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  Based in Bowling Green, serving all of Warren County and
                  South Central Kentucky:
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-ink-soft">
                  {site.serviceAreas.map((area) => (
                    <li key={area} className="flex items-center gap-2">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4 shrink-0 text-grass-600"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="m9.69 18.933.003.001a.752.752 0 0 0 .614 0l.003-.001.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.36 7.584a13.731 13.731 0 0 0 2.274 1.766 11.842 11.842 0 0 0 .976.544l.062.029.018.008ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {area}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-cream-200 pt-4 text-sm text-ink-soft">
                  A little outside the list? Ask anyway. If we can serve you
                  well, we will. If we can&apos;t, we&apos;ll point you to
                  someone reputable.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-2xl border border-cream-300 bg-white p-6 shadow-lift sm:p-8">
                <h2 className="font-display text-2xl font-bold text-navy-900">
                  Schedule your free evaluation
                </h2>
                <p className="mt-2 text-sm text-ink-soft">
                  Takes about a minute. We respond within one business day.
                </p>
                <div className="mt-6">
                  <LeadForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(crumbs))}
      />
    </>
  );
}

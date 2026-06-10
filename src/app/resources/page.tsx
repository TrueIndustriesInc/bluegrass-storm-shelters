import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { FaqAccordion } from "@/components/FaqAccordion";
import { articles } from "@/content/articles";
import { homeFaqs, permitFaqs } from "@/content/faqs";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Peace of Mind Center — Tornado Preparedness Resources",
  description:
    "Free tornado preparedness guides for Bowling Green & Warren County families: shelter comparisons, local permit help, size guides, a printable preparedness checklist, and trusted official links.",
  alternates: { canonical: "/resources/" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources/" },
];

const officialLinks = [
  {
    name: "National Weather Service — Louisville (covers Warren County)",
    href: "https://www.weather.gov/lmk/",
    note: "Live warnings, forecasts, and severe weather outlooks.",
  },
  {
    name: "Warren County Emergency Management",
    href: "https://www.warrencountyky.gov/emergency-management",
    note: "Local emergency information, siren policy, and public shelter updates.",
  },
  {
    name: "City of Bowling Green",
    href: "https://www.bgky.org/",
    note: "Building Division permits and city services.",
  },
  {
    name: "FEMA Safe Room Resources (P-320 / P-361)",
    href: "https://www.fema.gov/emergency-managers/risk-management/safe-rooms",
    note: "The federal design guidance every quality shelter is built to.",
  },
];

const allFaqs = [...homeFaqs, ...permitFaqs];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Peace of Mind Center"
        title="Everything a prepared Warren County family needs to know"
        lede="Free, practical guides written for South Central Kentucky homes — no scare tactics, no jargon. Read, print, share with a neighbor. Being prepared is something our whole community does together."
        crumbs={crumbs}
      />

      {/* Lead magnet banner */}
      <section className="bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
          <Reveal>
            <Link
              href="/resources/preparedness-checklist/"
              className="group grid items-center gap-6 overflow-hidden rounded-2xl bg-navy-900 shadow-lift transition-shadow hover:shadow-soft md:grid-cols-[1fr_320px]"
            >
              <div className="p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grass-400">
                  Free printable download
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold text-cream-50 sm:text-3xl">
                  Warren County Family Tornado Preparedness Checklist
                </h2>
                <p className="mt-3 max-w-xl leading-relaxed text-cream-300/90">
                  What to stock, what to practice, and what to do before,
                  during, and after a warning — on one printable page. Stick
                  it on the fridge.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-semibold text-cream-50 group-hover:text-grass-400">
                  Get the checklist <span aria-hidden="true">→</span>
                </span>
              </div>
              <div className="relative hidden h-full min-h-[220px] md:block">
                <Image
                  src="/images/storm-kit.jpg"
                  alt=""
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Guides grid */}
      <section aria-labelledby="guides-heading" className="bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <h2
              id="guides-heading"
              className="font-display text-3xl font-bold tracking-tight text-navy-900"
            >
              Guides for local families
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles
              .filter((a) => a.slug !== "preparedness-checklist")
              .map((article, i) => (
                <Reveal key={article.slug} delay={(i % 3) * 80}>
                  <Link
                    href={`/resources/${article.slug}/`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream-300 bg-white shadow-soft transition-shadow hover:shadow-lift"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-grass-600">
                        {article.readMinutes} min read
                      </p>
                      <h3 className="mt-2 font-display text-xl font-bold leading-snug text-navy-900">
                        {article.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                        {article.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 group-hover:text-grass-600">
                        Read the guide <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      {/* Official links */}
      <section aria-labelledby="official-heading" className="bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <h2
              id="official-heading"
              className="font-display text-3xl font-bold tracking-tight text-navy-900"
            >
              Trusted official resources
            </h2>
            <p className="mt-3 max-w-2xl text-ink-soft">
              We&apos;d rather you have the source than take our word for it.
              These are the official channels our own families rely on.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {officialLinks.map((link, i) => (
              <Reveal key={link.href} delay={(i % 2) * 80}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full items-start gap-4 rounded-xl border border-cream-300 bg-white p-5 shadow-soft transition-shadow hover:shadow-lift"
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mt-0.5 h-5 w-5 shrink-0 text-grass-600"
                    aria-hidden="true"
                  >
                    <path d="M11 3a1 1 0 1 0 0 2h2.586l-6.293 6.293a1 1 0 1 0 1.414 1.414L15 6.414V9a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-5Z" />
                    <path d="M5 5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a1 1 0 1 0-2 0v3H5V7h3a1 1 0 0 0 0-2H5Z" />
                  </svg>
                  <span>
                    <span className="block font-semibold text-navy-900">
                      {link.name}
                    </span>
                    <span className="mt-1 block text-sm text-ink-soft">
                      {link.note}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-6 rounded-xl bg-white px-5 py-4 text-sm leading-relaxed text-ink-soft shadow-soft">
              <strong className="text-navy-900">
                About the public park shelters:
              </strong>{" "}
              Warren County maintains community shelters at Basil Griffin Park
              and Ephram White Park. They open during official watches and
              warnings and serve our community well — but they require
              traveling while weather is approaching. A home shelter removes
              that drive entirely. If a public shelter is your current plan,
              know your route and leave early.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Full FAQ */}
      <section aria-labelledby="resources-faq-heading" className="bg-cream-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <h2
              id="resources-faq-heading"
              className="text-center font-display text-3xl font-bold tracking-tight text-navy-900"
            >
              The full FAQ
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <FaqAccordion faqs={allFaqs} />
          </Reveal>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(faqSchema(allFaqs))}
        />
      </section>

      <CtaBand heading="Prefer answers about your specific home? That's free too." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(crumbs))}
      />
    </>
  );
}

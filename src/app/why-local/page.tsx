import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { Testimonials } from "@/components/Testimonials";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why Choose a Local Bowling Green Storm Shelter Installer",
  description:
    "Bluegrass Storm Shelters is locally owned in Bowling Green, KY, not a regional chain. Local soil knowledge, local permits, buy-local ethos, and a neighbor who answers the phone. Here's why local matters for storm shelters.",
  alternates: { canonical: "/why-local/" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Why Local", href: "/why-local/" },
];

export default function WhyLocalPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Bluegrass"
        title="Your local Bowling Green neighbor, not a regional chain"
        lede="Plenty of companies will sell Warren County a storm shelter from three states away. We think the people protecting Bowling Green families should be from Bowling Green. Here's what that actually means for your project."
        crumbs={crumbs}
      />

      {/* Story */}
      <section className="bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-navy-900">
                We were here on December 11, 2021. We&apos;re still here.
              </h2>
              <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
                <p>
                  That night didn&apos;t just change the skyline along
                  Russellville Road; it changed how every family in Warren
                  County hears a tornado siren. We started Bluegrass Storm
                  Shelters because we watched our community rebuild and made a
                  decision: more Bowling Green families deserve protection
                  that&apos;s steps away, not a drive away.
                </p>
                <p>
                  We&apos;re not a franchise and we&apos;re not a call center.
                  We&apos;re licensed, insured, and locally owned: the person
                  who answers the phone is the person who will stand in your
                  yard, and the person who stands in your yard is your
                  neighbor.
                </p>
                <p className="font-medium text-navy-900">
                  &ldquo;Prepared, not scared&rdquo; isn&apos;t a marketing
                  line for us. It&apos;s how our own families live here.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-2xl shadow-lift">
                <Image
                  src="/images/hero-storm-clearing.jpg"
                  alt="Evening light breaking through clearing storm clouds over a quiet Bowling Green neighborhood"
                  width={1600}
                  height={1000}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What local buys you */}
      <section aria-labelledby="local-value-heading" className="bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <h2
              id="local-value-heading"
              className="text-center font-display text-3xl font-bold tracking-tight text-navy-900"
            >
              What &ldquo;local&rdquo; actually buys you
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Ground truth, literally",
                "We know which neighborhoods sit on shallow rock, where drainage runs after a spring storm, and what karst terrain does to a bad install. That knowledge isn't in a manual; it's in years of living and digging here.",
              ],
              [
                "Permits without the runaround",
                "City Building Division or Warren County Building & Codes: we know the offices, the inspectors, and the requirements, because we work with them month after month. You never touch the paperwork.",
              ],
              [
                "Accountability you can drive to",
                "Our reputation lives in the same county you do. If anything ever needs attention, you're calling a neighbor with a local address, not a regional dispatcher reading a script.",
              ],
              [
                "Honest sizing, honest pricing",
                "We're small enough that we don't carry quotas. If the $6,000 option protects your family as well as the $12,000 one, you'll hear it from us first.",
              ],
              [
                "Buy local, strengthen local",
                "Your project pays local crews, local suppliers, and local taxes. Every install also adds one more prepared household to Warren County, and that makes the whole community more resilient.",
              ],
              [
                "Here after the install",
                "Walkthroughs for new family members, questions years later, a hand after a storm: we answer, because we're not going anywhere. This is home.",
              ],
            ].map(([title, text], i) => (
              <Reveal key={title} delay={(i % 3) * 80}>
                <div className="h-full rounded-2xl border border-cream-300 bg-white p-7 shadow-soft">
                  <h3 className="font-display text-lg font-bold text-navy-900">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-navy-900 p-8 text-center">
              <p className="font-display text-xl font-bold text-cream-50">
                Licensed &amp; insured · Locally owned in Bowling Green ·
                Serving {site.serviceAreas.slice(0, 4).join(", ")} &amp; all of
                South Central KY
              </p>
              <p className="mt-3 text-sm text-cream-300/80">
                License and insurance documentation available at your
                evaluation; just ask. {/* PLACEHOLDER: add license # */}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Testimonials />

      <section className="bg-cream-50">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy-900">
              Meet us before you decide anything
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink-soft">
              The best way to judge a local company is face to face. Schedule
              a free evaluation, or just call{" "}
              <a
                href={site.phoneHref}
                className="font-semibold text-navy-800 underline decoration-grass-500 decoration-2 underline-offset-4"
              >
                {site.phone}
              </a>{" "}
              and ask us anything, including for references from{" "}
              <Link
                href="/resources/"
                className="font-semibold text-navy-800 underline decoration-grass-500 decoration-2 underline-offset-4"
              >
                our resource guides
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand heading="Work with a neighbor who'll still wave at you in the Kroger parking lot." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(crumbs))}
      />
    </>
  );
}

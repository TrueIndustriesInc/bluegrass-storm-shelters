import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { breadcrumbSchema, howToSchema, jsonLd } from "@/lib/schema";
import { permitContacts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Local Installation Process — Consultation to Handover",
  description:
    "How storm shelter installation works in Bowling Green & Warren County: free consultation, on-site soil & drainage evaluation, local permits handled for you, one-day install, and family walkthrough. Full transparency, start to finish.",
  alternates: { canonical: "/process/" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Our Process", href: "/process/" },
];

const steps = [
  {
    name: "1. Friendly consultation",
    headline: "It starts with a conversation, not a sales pitch",
    text: "Call, text, or send the form — we'll talk through your household, your home's layout, who needs to reach the shelter and how fast, and what budget range makes sense. Fifteen minutes, no obligation, and you'll already know more than most websites will tell you.",
    detail: "What we'll ask: household size, pets, mobility considerations, slab/crawlspace, rough lot layout.",
  },
  {
    name: "2. Free on-site evaluation",
    headline: "We walk your property like it's our own",
    text: "Warren County sits on karst limestone — soil depth, rock, drainage, and water table vary house to house. We evaluate all of it at no charge, check utility locations, and identify the spot where a shelter will stay dry and reachable in seconds.",
    detail: "We check: soil & rock depth, drainage paths, seasonal water table, utility lines, access for equipment.",
  },
  {
    name: "3. Honest written recommendation",
    headline: "Sized to your family, suited to your lot",
    text: "You get a clear written recommendation — in-ground or above-ground, capacity, placement, and an exact price. If the less expensive option is the right one for your situation, that's the one we'll recommend. If your lot isn't suitable, we'll say so.",
    detail: "You'll know: total cost, timeline, permit plan, and exactly what's included. No surprise line items.",
  },
  {
    name: "4. Permits — handled by us",
    headline: "We speak fluent Warren County paperwork",
    text: `Inside city limits, that's the ${permitContacts.city.name} (${permitContacts.city.phone}). Outside it, ${permitContacts.county.name} (${permitContacts.county.phone}). We file, schedule, and meet the inspectors — you don't make a single call.`,
    detail: "Typical permit turnaround is days to a couple of weeks; we keep you posted at every step.",
  },
  {
    name: "5. Careful installation",
    headline: "Most installs finish in a single day",
    text: "Our crew protects your lawn with mats, excavates precisely, sets and anchors the shelter, seals and backfills, then restores the site. Above-ground safe rooms typically install in a few hours. We haul away every scrap before we leave.",
    detail: "Your part: pick a day, keep pets inside, and watch from the porch with a coffee if you like.",
  },
  {
    name: "6. Walkthrough, registration & support",
    headline: "We hand over keys, not just a hole in the ground",
    text: "We walk every family member through entry, exit, ventilation, and the post-storm procedure — kids and grandparents included. We register your shelter with local emergency management so responders know where you are, and we stay one phone call away for the life of the shelter.",
    detail: "You leave with: owner's documentation, a storm-kit checklist, and a neighbor's phone number that actually answers.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A transparent local process — from first call to final walkthrough"
        lede="No mystery, no chasing contractors, no county-office runaround. One Bowling Green team handles evaluation, permits, installation, and handover. Here's exactly what happens and when."
        crumbs={crumbs}
      />

      <section className="bg-cream-50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <ol className="relative space-y-10 before:absolute before:bottom-8 before:left-[22px] before:top-8 before:hidden before:w-px before:bg-cream-300 sm:before:block">
            {steps.map((step, i) => (
              <Reveal key={step.name} as="li" delay={Math.min(i * 60, 180)}>
                <article className="relative flex flex-col gap-5 sm:flex-row sm:gap-8">
                  <span
                    aria-hidden="true"
                    className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-800 font-display text-lg font-bold text-cream-50 shadow-soft"
                  >
                    {i + 1}
                  </span>
                  <div className="flex-1 rounded-2xl border border-cream-300 bg-white p-7 shadow-soft">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-grass-600">
                      {step.name}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-bold text-navy-900">
                      {step.headline}
                    </h2>
                    <p className="mt-3 leading-relaxed text-ink-soft">
                      {step.text}
                    </p>
                    <p className="mt-4 rounded-lg bg-cream-100 px-4 py-3 text-sm leading-relaxed text-earth-700">
                      {step.detail}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Install day photo band */}
      <section aria-label="Installation day" className="bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-2xl shadow-lift">
                <Image
                  src="/images/gallery-crane-set.jpg"
                  alt="Crew guiding a precast concrete storm shelter as a crane lowers it into a prepared excavation in a Warren County backyard"
                  width={1200}
                  height={900}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-display text-3xl font-bold tracking-tight text-navy-900">
                Minimal disruption is a promise, not a slogan
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Lawn protection mats before the first bucket of soil moves.
                Clean excavation sized to the unit. Set, anchor, seal,
                backfill, compact, and restore — usually between breakfast and
                dinner. Our standard is simple: the only evidence we were
                there should be the shelter door.
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Wondering about permits before you commit?{" "}
                <Link
                  href="/resources/permits-bowling-green-warren-county/"
                  className="font-semibold text-navy-800 underline decoration-grass-500 decoration-2 underline-offset-4 hover:text-grass-600"
                >
                  Read our local permit guide
                </Link>{" "}
                — it covers both city and county requirements in plain
                English.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand heading="Step one takes fifteen minutes. Start the conversation." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(crumbs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          howToSchema({
            name: "How storm shelter installation works in Bowling Green, KY",
            description:
              "The six-step Bluegrass Storm Shelters process: consultation, free site evaluation, written recommendation, permits, installation, and family walkthrough.",
            steps: steps.map((s) => ({ name: s.headline, text: s.text })),
          }),
        )}
      />
    </>
  );
}

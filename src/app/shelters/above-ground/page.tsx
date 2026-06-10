import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  breadcrumbSchema,
  faqSchema,
  jsonLd,
  serviceSchema,
} from "@/lib/schema";
import type { Faq } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Above-Ground Tornado Safe Rooms in Bowling Green, KY",
  description:
    "EF5-rated above-ground steel safe rooms installed in Bowling Green & Warren County garages. Step-in access for mobility needs, anchored to slab per FEMA P-361/ICC 500, installed in hours. Free evaluations.",
  alternates: { canonical: "/shelters/above-ground/" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Shelters", href: "/shelters/" },
  { name: "Above-Ground", href: "/shelters/above-ground/" },
];

const faqs: Faq[] = [
  {
    q: "Is an above-ground safe room really safe in an EF5 tornado?",
    a: "Yes — when it's built and anchored to standard. Safe rooms engineered to FEMA P-361 and ICC 500 are tested against 250 mph winds and 15-pound 2x4 debris launched at 100 mph. The critical detail is anchoring: the room must be bolted to a sound concrete slab with engineered anchors, which is exactly what our evaluation verifies before install.",
  },
  {
    q: "My mother uses a walker. Is this the right option for her?",
    a: "Usually, yes. Above-ground safe rooms have a step-in door at floor level — no stairs, no ladder, no hatch. For households with wheelchairs, walkers, or anyone who can't manage steps quickly at 2 a.m., it's the option we recommend most often.",
  },
  {
    q: "How much garage space does it take?",
    a: "Common sizes run 4x6 feet (3–4 people) up to 8x10 feet (8–10 people). Most families still park in the garage afterward. During the evaluation we'll tape out the footprint so you can see exactly what you'd be living with before you decide.",
  },
  {
    q: "Can it double as a storage room or safe?",
    a: "Many families use theirs daily as a lockable storage or valuables room — it's a solid steel room with a deadbolting door, after all. Just keep a clear path and seats inside; we'll show you a layout that does both during handover.",
  },
];

export default function AboveGroundPage() {
  return (
    <>
      <PageHero
        eyebrow="Above-ground safe rooms"
        title="Above-ground safe rooms: EF5 protection without a single stair"
        lede="Bolted to your garage slab and tested against 250 mph debris, an above-ground safe room means shelter your whole family can reach — including grandparents, toddlers, and anyone with mobility needs — without ever stepping outside."
        crumbs={crumbs}
      />

      <section className="bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-2xl shadow-lift">
                <Image
                  src="/images/aboveground-saferoom.jpg"
                  alt="A heavy steel above-ground tornado safe room with bolted panels anchored to the concrete slab of a residential garage"
                  width={1400}
                  height={1050}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="w-full object-cover"
                  priority
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-display text-3xl font-bold tracking-tight text-navy-900">
                Strength you can see, access everyone can manage
              </h2>
              <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
                <p>
                  Above-ground safe rooms are plate-steel panels bolted into a
                  rigid box and anchored into your garage slab with engineered
                  fasteners. The result is a room tested to FEMA P-361 and ICC
                  500 — the same standards used for community shelters —
                  sitting twenty steps from your kitchen.
                </p>
                <p>
                  Installation typically takes a few hours, there&apos;s no
                  excavation, and because panels assemble on site, a safe room
                  can go into garages a crane could never reach.
                </p>
              </div>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Step-in, wheelchair-friendly door",
                  "Tested vs. 100 mph 2x4 debris impact",
                  "Capacities from 2 to 10 adults",
                  "Installs in hours, no excavation",
                  "Doubles as lockable storage",
                  "Engineered slab anchoring verified",
                ].map((li) => (
                  <li key={li} className="flex gap-2.5 text-sm text-ink-soft">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-0.5 h-4 w-4 shrink-0 text-grass-600"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {li}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-ink-soft">
                Comparing options?{" "}
                <Link
                  href="/resources/above-ground-vs-in-ground/"
                  className="font-semibold text-navy-800 underline decoration-grass-500 decoration-2 underline-offset-4 hover:text-grass-600"
                >
                  Our guide covers both honestly
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="ag-faq-heading" className="bg-cream-100">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <h2
              id="ag-faq-heading"
              className="text-center font-display text-3xl font-bold tracking-tight text-navy-900"
            >
              Safe room questions, answered
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <FaqAccordion faqs={faqs} />
          </Reveal>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))}
        />
      </section>

      <CtaBand heading="See if a safe room fits your garage — we'll tape it out for you." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(crumbs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          serviceSchema({
            name: "Above-Ground Safe Room Installation",
            description:
              "EF5-rated above-ground steel safe rooms anchored and installed in Bowling Green and Warren County, KY garages.",
            slug: "/shelters/above-ground/",
          }),
        )}
      />
    </>
  );
}

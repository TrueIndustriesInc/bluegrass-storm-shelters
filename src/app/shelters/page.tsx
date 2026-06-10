import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { breadcrumbSchema, jsonLd, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Tornado Shelters & Safe Rooms for Bowling Green Homes",
  description:
    "Compare in-ground tornado shelters and above-ground safe rooms for Warren County, KY homes. FEMA P-320/ICC 500 engineered, locally installed, sized for families of 4–12+. Free site evaluations in Bowling Green.",
  alternates: { canonical: "/shelters/" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Shelters", href: "/shelters/" },
];

const comparison: {
  label: string;
  inGround: string;
  aboveGround: string;
}[] = [
  {
    label: "Protection level",
    inGround: "Below the debris field, the safest place in any tornado, including EF5",
    aboveGround: "EF5-rated when anchored to slab per ICC 500 / FEMA P-361",
  },
  {
    label: "Best for",
    inGround: "Slab & crawlspace homes with usable yard space (most of Warren County)",
    aboveGround: "Mobility needs, tight lots, garages, renters-to-owners planning ahead",
  },
  {
    label: "Footprint",
    inGround: "Zero living space lost: flush door in the lawn or garage floor",
    aboveGround: "Uses a corner of the garage (typically 4x6 to 8x10 ft)",
  },
  {
    label: "Access",
    inGround: "Steel hatch with steps or slider; assist rails available",
    aboveGround: "Step-in door, wheelchair and walker friendly",
  },
  {
    label: "Capacity",
    inGround: "4 to 12+ adults depending on model",
    aboveGround: "2 to 10 adults depending on model",
  },
  {
    label: "Install time",
    inGround: "Usually one day on site, after permits",
    aboveGround: "A few hours",
  },
  {
    label: "Site factors",
    inGround: "Soil, drainage & water table evaluated first; we check all three free",
    aboveGround: "Needs a sound concrete slab; we verify thickness & condition",
  },
];

export default function SheltersPage() {
  return (
    <>
      <PageHero
        eyebrow="Our shelters"
        title="The right shelter for your home, your lot, and your family"
        lede="Every shelter we install is engineered to FEMA P-320/P-361 guidance and ICC 500 standards, and every recommendation starts with your property, not our inventory. Here's how the two approaches compare for South Central Kentucky homes."
        crumbs={crumbs}
      />

      {/* Option cards */}
      <section className="bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {[
              {
                href: "/shelters/in-ground/",
                img: "/images/inground-shelter-yard.jpg",
                alt: "Discreet flush in-ground storm shelter door installed in a Bowling Green backyard lawn",
                badge: "Most popular in BG",
                title: "In-Ground Tornado Shelters",
                text: "Maximum protection that disappears into your yard. Ideal for the basement-less homes that dominate Warren County.",
              },
              {
                href: "/shelters/above-ground/",
                img: "/images/aboveground-saferoom.jpg",
                alt: "Steel above-ground tornado safe room bolted to a garage slab",
                badge: null,
                title: "Above-Ground Safe Rooms",
                text: "EF5-rated steel rooms anchored to your garage slab. No stairs, no excavation, and shelter without leaving the house.",
              },
            ].map((card, i) => (
              <Reveal key={card.href} delay={i * 100}>
                <Link
                  href={card.href}
                  className="group block overflow-hidden rounded-2xl border border-cream-300 bg-white shadow-soft transition-shadow hover:shadow-lift"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={card.img}
                      alt={card.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {card.badge && (
                      <span className="absolute left-4 top-4 rounded-full bg-grass-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream-50">
                        {card.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-7">
                    <h2 className="font-display text-2xl font-bold text-navy-900">
                      {card.title}
                    </h2>
                    <p className="mt-2 leading-relaxed text-ink-soft">
                      {card.text}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 font-semibold text-navy-800 group-hover:text-grass-600">
                      Learn more <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section aria-labelledby="compare-heading" className="bg-cream-100">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <h2
              id="compare-heading"
              className="text-center font-display text-3xl font-bold tracking-tight text-navy-900"
            >
              Side by side, honestly
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-ink-soft">
              Both options protect your family. The differences are about your
              lot, your household, and how you&apos;ll use it.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-2xl bg-white text-left text-sm shadow-soft">
              <caption className="sr-only">
                Comparison of in-ground shelters and above-ground safe rooms
              </caption>
              <thead>
                <tr className="bg-navy-900 text-cream-50">
                  <th scope="col" className="px-5 py-4 font-display text-base">
                    &nbsp;
                  </th>
                  <th scope="col" className="px-5 py-4 font-display text-base">
                    In-Ground Shelter
                  </th>
                  <th scope="col" className="px-5 py-4 font-display text-base">
                    Above-Ground Safe Room
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-200">
                {comparison.map((row) => (
                  <tr key={row.label} className="align-top">
                    <th
                      scope="row"
                      className="w-40 px-5 py-4 font-semibold text-navy-900"
                    >
                      {row.label}
                    </th>
                    <td className="px-5 py-4 leading-relaxed text-ink-soft">
                      {row.inGround}
                    </td>
                    <td className="px-5 py-4 leading-relaxed text-ink-soft">
                      {row.aboveGround}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-8 text-center text-ink-soft">
              Want the deeper dive?{" "}
              <Link
                href="/resources/above-ground-vs-in-ground/"
                className="font-semibold text-navy-800 underline decoration-grass-500 decoration-2 underline-offset-4 hover:text-grass-600"
              >
                Read our full comparison guide
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* What's included */}
      <section aria-labelledby="included-heading" className="bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <h2
              id="included-heading"
              className="text-center font-display text-3xl font-bold tracking-tight text-navy-900"
            >
              Every Bluegrass install includes
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Free site evaluation",
                "Soil, drainage, water table, and placement assessed at your property. No charge, no commitment.",
              ],
              [
                "Permits handled",
                "City of Bowling Green or Warren County paperwork filed and inspections coordinated by us.",
              ],
              [
                "Complete installation",
                "Excavation, set, anchoring, sealing, backfill, and cleanup by one local crew.",
              ],
              [
                "Walkthrough & registration",
                "Family orientation, storm-kit guidance, and shelter registration with local emergency management.",
              ],
            ].map(([title, text], i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-cream-300 bg-white p-6 shadow-soft">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-grass-100 font-display text-lg font-bold text-grass-700"
                  >
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand heading="Not sure which shelter fits? Let's walk your lot." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(crumbs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          serviceSchema({
            name: "Tornado Shelter Installation",
            description:
              "In-ground tornado shelters and above-ground safe rooms installed in Bowling Green and South Central Kentucky.",
            slug: "/shelters/",
          }),
        )}
      />
    </>
  );
}

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
  title: "In-Ground Tornado Shelters in Bowling Green, KY",
  description:
    "Underground storm shelters installed in Bowling Green & Warren County, KY. EF5-rated, flush-mount, sized for families of 4–12+. Soil & drainage evaluated free, permits handled, most installs done in a day.",
  alternates: { canonical: "/shelters/in-ground/" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Shelters", href: "/shelters/" },
  { name: "In-Ground", href: "/shelters/in-ground/" },
];

const faqs: Faq[] = [
  {
    q: "Why are in-ground shelters so popular in Bowling Green?",
    a: "Most Warren County homes are built on slabs or crawlspaces with no basement, so there's no naturally protected space below grade. An in-ground shelter adds that protection without taking any living space — the door sits flush in your lawn or garage floor, and the protection is below the debris field where tornado damage is most severe.",
  },
  {
    q: "Will it work with Warren County's rocky karst soil?",
    a: "Yes — but placement matters, which is why the free site evaluation comes first. South Central Kentucky sits on karst (limestone) terrain with variable rock depth and drainage. We evaluate soil, rock, drainage paths, and water table at your specific property and position the shelter where it will stay dry and accessible for decades.",
  },
  {
    q: "How deep is it, and is it claustrophobic?",
    a: "Typical units sit with the floor 6–7 feet below grade. Inside you'll find bench seating, LED lighting, and engineered ventilation — most families are surprised how comfortable they are. We always encourage a 'practice run' with kids during the walkthrough so the first visit isn't during a warning.",
  },
  {
    q: "What about getting out if debris lands on the door?",
    a: "Doors are engineered so occupants can open them even under load, and we register every install with local emergency management so responders know exactly where you are. We'll also walk you through the post-storm exit procedure during handover.",
  },
];

export default function InGroundPage() {
  return (
    <>
      <PageHero
        eyebrow="In-ground / underground shelters"
        title="In-ground tornado shelters, built for Bowling Green homes"
        lede="Below the debris field is the safest place your family can be in a tornado. Our in-ground shelters put that protection steps from your back door — sized for your household, sited for Warren County soil, and invisible from the street."
        crumbs={crumbs}
      />

      <section className="bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-2xl shadow-lift">
                <Image
                  src="/images/inground-shelter-yard.jpg"
                  alt="A flush-mounted in-ground tornado shelter door installed discreetly in a Bowling Green backyard lawn beside a patio"
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
                Protection you&apos;ll forget is there — until you need it
              </h2>
              <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
                <p>
                  An in-ground shelter installs flush with your lawn or garage
                  floor. You mow right over it. Guests never notice it. But
                  when the sirens sound at 2 a.m., your family is below ground
                  in under a minute — without opening a garage door, starting
                  a car, or hoping a public shelter has room.
                </p>
                <p>
                  Every unit is engineered to FEMA P-320/P-361 guidance and
                  ICC 500 standards: steel or reinforced precast concrete,
                  debris-impact-tested doors, engineered ventilation, and
                  anchoring designed for the most severe winds on record.
                </p>
              </div>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Capacities from 4 to 12+ adults",
                  "Steel hatch or sliding-door entries",
                  "Bench seating & interior lighting",
                  "Engineered passive ventilation",
                  "Assist rails & step options",
                  "Registered with local EMA",
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* Local conditions */}
      <section aria-labelledby="conditions-heading" className="bg-navy-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grass-400">
                Engineered for here
              </p>
              <h2
                id="conditions-heading"
                className="mt-3 font-display text-3xl font-bold tracking-tight text-cream-50"
              >
                Warren County ground isn&apos;t generic. Neither is our
                install.
              </h2>
              <div className="mt-5 space-y-4 leading-relaxed text-cream-300/90">
                <p>
                  South Central Kentucky sits on karst terrain — limestone
                  bedrock, sinkhole-prone pockets, and drainage that changes
                  street to street. A shelter placed without understanding
                  that can shift, hold water, or worse.
                </p>
                <p>
                  That&apos;s why every project starts with a free on-site
                  evaluation: we check soil composition, rock depth, drainage
                  paths, and seasonal water table before recommending
                  anything. If your lot isn&apos;t right for in-ground,
                  we&apos;ll tell you plainly and show you the above-ground
                  option instead.
                </p>
              </div>
              <Link
                href="/process/"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-cream-50 hover:text-grass-400"
              >
                See how our process works
                <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-2xl shadow-lift">
                <Image
                  src="/images/shelter-interior.jpg"
                  alt="The dry, warmly lit interior of an installed in-ground shelter with bench seating and emergency supplies"
                  width={1400}
                  height={1050}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="w-full object-cover"
                />
              </div>
              <p className="mt-3 text-xs text-cream-300/70">
                Properly sited shelters stay dry, ventilated, and comfortable.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="ig-faq-heading" className="bg-cream-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <h2
              id="ig-faq-heading"
              className="text-center font-display text-3xl font-bold tracking-tight text-navy-900"
            >
              In-ground shelter questions, answered
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

      <CtaBand heading="Find out if your lot is in-ground ready — free." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(crumbs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          serviceSchema({
            name: "In-Ground Tornado Shelter Installation",
            description:
              "Underground storm shelters evaluated, permitted, and installed for Bowling Green and Warren County, KY homes.",
            slug: "/shelters/in-ground/",
          }),
        )}
      />
    </>
  );
}

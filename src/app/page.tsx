import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Testimonials } from "@/components/Testimonials";
import { LeadForm } from "@/components/LeadForm";
import { homeFaqs } from "@/content/faqs";
import { faqSchema, jsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "In-Ground & Above-Ground Tornado Shelters in Bowling Green, KY | Bluegrass Storm Shelters",
  description:
    "Locally owned Bowling Green storm shelter installer. In-ground tornado shelters and above-ground safe rooms for Warren County & South Central KY homes. Licensed, insured, full-service. Schedule a free local site evaluation.",
  alternates: { canonical: "/" },
};

const trustItems = [
  { label: "Locally Owned", sub: "in Bowling Green" },
  { label: "Licensed & Insured", sub: "full documentation" },
  { label: "Full-Service Install", sub: "permits to cleanup" },
  { label: "Warren County & Neighbors", sub: "South Central KY" },
];

const processSteps = [
  {
    name: "Friendly consultation",
    text: "A real conversation: your family, your home, your concerns. By phone or at your kitchen table.",
  },
  {
    name: "Free site evaluation",
    text: "We walk your property and check soil, drainage, access, and the right spot. Warren County's karst terrain makes this step matter.",
  },
  {
    name: "Honest recommendation",
    text: "A clear, written recommendation sized to your family and lot, including when the less expensive option is the right call.",
  },
  {
    name: "Careful installation",
    text: "Permits handled, yard protected, most in-ground installs done in a day. We leave your property the way we found it, plus one shelter.",
  },
  {
    name: "Handover & support",
    text: "We walk everyone through the shelter, kids included, then register it with local emergency management and stay a phone call away.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="relative isolate min-h-[88svh] overflow-hidden">
        <Image
          src="/images/hero-storm-clearing.jpg"
          alt="Storm clouds clearing into golden evening light over a quiet Bowling Green, Kentucky neighborhood street"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/60 to-navy-950/25"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[88svh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-grass-400">
              Prepared, Not Scared
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-cream-50 sm:text-5xl lg:text-6xl">
              Protecting Bowling Green families, one thoughtful shelter at a
              time.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-100/90 sm:text-xl">
              Locally owned. Licensed &amp; insured. In-ground and above-ground
              tornado shelters installed with care for Warren County and South
              Central Kentucky homes.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact/"
                className="rounded-lg bg-grass-600 px-7 py-4 text-center text-base font-semibold text-cream-50 shadow-lift transition-colors hover:bg-grass-500"
              >
                Schedule Your Free Local Site Evaluation
              </Link>
              <Link
                href="/shelters/in-ground/"
                className="rounded-lg border border-cream-100/30 bg-cream-50/5 px-7 py-4 text-center text-base font-semibold text-cream-50 backdrop-blur-sm transition-colors hover:bg-cream-50/15"
              >
                How In-Ground Protection Works
              </Link>
            </div>
            <p className="mt-7 text-sm text-cream-300/80">
              Or talk to a neighbor right now:{" "}
              <a
                href={site.phoneHref}
                className="font-semibold text-cream-50 underline decoration-grass-500 decoration-2 underline-offset-4"
              >
                {site.phone}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* =========================== TRUST BAR =========================== */}
      <section aria-label="Why families trust us" className="bg-navy-900">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-5 px-4 py-7 sm:px-6 lg:grid-cols-4 lg:px-8">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 shrink-0 text-grass-400"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm leading-snug text-cream-50">
                <span className="font-semibold">{item.label}</span>
                <span className="block text-xs text-cream-300/75">
                  {item.sub}
                </span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================= LOCAL REALITY ========================= */}
      <section
        aria-labelledby="local-reality-heading"
        className="bg-cream-50"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grass-600">
                Our community knows storms
              </p>
              <h2
                id="local-reality-heading"
                className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl"
              >
                Warren County has been through it. That&apos;s exactly why we
                prepare.
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
                <p>
                  December 11, 2021 changed how Bowling Green thinks about
                  severe weather. An EF3 tornado moved through our community in
                  the middle of the night, taking 17 of our neighbors and
                  leaving damage we still remember every spring. We don&apos;t
                  dwell on it, but we don&apos;t forget it either.
                </p>
                <p>
                  Here&apos;s the practical reality: most homes in Warren
                  County sit on slabs or crawlspaces, with no basement to
                  retreat to. The county&apos;s public shelters at Basil
                  Griffin and Ephram White parks are a genuine community asset,
                  but they only open during official watches and warnings,
                  and they require getting your family into a car while the
                  sky is turning.
                </p>
                <p className="font-medium text-navy-900">
                  A private shelter means protection that&apos;s steps away,
                  any hour of the night: no travel, no traffic, no waiting on
                  a siren. We prepare so families can focus on what matters.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  ["EF3", "struck BG in Dec. 2021"],
                  ["0", "basements in most local homes"],
                  ["Steps", "from bed to shelter, not miles"],
                ].map(([stat, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-cream-300 bg-cream-100 p-4 text-center"
                  >
                    <p className="font-display text-2xl font-bold text-navy-800">
                      {stat}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-ink-soft">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={150} className="relative">
              <div className="overflow-hidden rounded-2xl shadow-lift">
                <Image
                  src="/images/family-porch.jpg"
                  alt="A family relaxing together on the front porch of their brick Kentucky home as evening storm clouds clear in the distance"
                  width={1400}
                  height={1050}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 text-xs text-ink-soft">
                Peace of mind looks like an ordinary evening at home.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================== SHELTERS ============================ */}
      <section aria-labelledby="shelters-heading" className="bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-grass-600">
              Our shelters
            </p>
            <h2
              id="shelters-heading"
              className="mt-3 text-center font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl"
            >
              Two proven ways to protect your family
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-ink-soft">
              Both engineered to FEMA P-320/P-361 guidance and ICC 500
              standards, both installed by local hands. The right one depends
              on your home, your lot, and your family. We&apos;ll help you
              choose honestly.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* In-ground - featured */}
            <Reveal>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream-300 bg-white shadow-soft transition-shadow hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/inground-shelter-yard.jpg"
                    alt="A discreet flush-mounted in-ground storm shelter door installed in a manicured Bowling Green backyard lawn near a patio"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-grass-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream-50">
                    Most popular in BG
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-bold text-navy-900">
                    In-Ground Tornado Shelters
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-ink-soft">
                    Maximum protection that disappears into your yard. Ideal
                    for the slab and crawlspace homes common across Warren
                    County: space-efficient, discreet, and steps from your
                    back door. Sized for families of 4 to 12+, with steel
                    doors, ventilation, seating, and lighting.
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                    {[
                      "Below the debris field, the safest place in an EF5",
                      "Flush, lawnmower-friendly door; zero garage space lost",
                      "Sited for Warren County karst soil & drainage",
                    ].map((li) => (
                      <li key={li} className="flex gap-2.5">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-grass-500" />
                        {li}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/shelters/in-ground/"
                    className="mt-7 inline-flex items-center gap-2 font-semibold text-navy-800 transition-colors hover:text-grass-600"
                  >
                    Explore in-ground shelters
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </Reveal>

            {/* Above-ground */}
            <Reveal delay={120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream-300 bg-white shadow-soft transition-shadow hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/aboveground-saferoom.jpg"
                    alt="A bolted steel above-ground tornado safe room anchored to the concrete slab inside a clean residential garage"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-bold text-navy-900">
                    Above-Ground Safe Rooms
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-ink-soft">
                    EF5-rated steel safe rooms anchored to your garage slab:
                    no stairs, no excavation. The right answer for family
                    members with mobility needs, lots with difficult drainage,
                    or anyone who wants shelter without leaving the house at
                    all.
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                    {[
                      "Step-in access, ideal for wheelchairs & walkers",
                      "Anchored to slab, tested against EF5 debris impact",
                      "Installed in hours, not days",
                    ].map((li) => (
                      <li key={li} className="flex gap-2.5">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-grass-500" />
                        {li}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/shelters/above-ground/"
                    className="mt-7 inline-flex items-center gap-2 font-semibold text-navy-800 transition-colors hover:text-grass-600"
                  >
                    Explore above-ground safe rooms
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          </div>

          <Reveal>
            <p className="mt-10 text-center text-ink-soft">
              Not sure which fits your home?{" "}
              <Link
                href="/resources/above-ground-vs-in-ground/"
                className="font-semibold text-navy-800 underline decoration-grass-500 decoration-2 underline-offset-4 hover:text-grass-600"
              >
                Read our honest comparison guide
              </Link>,
              or let us look at your lot for free.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================ PROCESS ============================ */}
      <section aria-labelledby="process-heading" className="bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grass-600">
                  How it works
                </p>
                <h2
                  id="process-heading"
                  className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl"
                >
                  A local process, start to finish: we handle everything
                </h2>
                <p className="mt-5 leading-relaxed text-ink-soft">
                  From your first call to the day we hand you the keys, one
                  local team manages the whole project: soil and drainage
                  evaluation, City of Bowling Green or Warren County permits,
                  excavation, install, and cleanup. You never chase a
                  contractor or a county office.
                </p>
              </Reveal>
              <Reveal delay={150} className="mt-8">
                <div className="overflow-hidden rounded-2xl shadow-lift">
                  <Image
                    src="/images/install-process.jpg"
                    alt="A compact excavator carefully digging a storm shelter site in a Warren County backyard with plywood protecting the lawn and a concrete shelter staged nearby"
                    width={1400}
                    height={933}
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="w-full object-cover"
                  />
                </div>
                <Link
                  href="/process/"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-navy-800 transition-colors hover:text-grass-600"
                >
                  See the full process in detail
                  <span aria-hidden="true">→</span>
                </Link>
              </Reveal>
            </div>
            <ol className="space-y-2">
              {processSteps.map((step, i) => (
                <Reveal key={step.name} as="li" delay={i * 80}>
                  <div className="flex gap-5 rounded-2xl border border-transparent p-5 transition-colors hover:border-cream-300 hover:bg-cream-100">
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-800 font-display text-lg font-bold text-cream-50"
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-navy-900">
                        {step.name}
                      </h3>
                      <p className="mt-1.5 leading-relaxed text-ink-soft">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ========================= WHY BLUEGRASS ========================= */}
      <section
        aria-labelledby="why-heading"
        className="relative isolate overflow-hidden bg-navy-900"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl shadow-lift">
                <Image
                  src="/images/shelter-interior.jpg"
                  alt="The clean, warmly lit interior of an in-ground storm shelter with bench seating, LED lighting, and supplies on a shelf"
                  width={1400}
                  height={1050}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="w-full object-cover"
                />
              </div>
              <p className="mt-3 text-xs text-cream-300/70">
                Inside one of our in-ground shelters: dry, lit, and ready.
              </p>
            </Reveal>
            <Reveal delay={120} className="order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grass-400">
                Why Bluegrass
              </p>
              <h2
                id="why-heading"
                className="mt-3 font-display text-3xl font-bold tracking-tight text-cream-50 sm:text-4xl"
              >
                Your neighbor, not a call center
              </h2>
              <p className="mt-5 leading-relaxed text-cream-300/90">
                The regional shelter companies do fine work. But they
                don&apos;t know which BG neighborhoods sit on rock, who to
                call at the county building office, or what December 2021 felt
                like from inside this community. We do, because we live here
                too.
              </p>
              <ul className="mt-8 space-y-5">
                {[
                  [
                    "Built by locals, for locals",
                    "Owned and operated in Bowling Green. When you call, you talk to the person who'll stand in your yard.",
                  ],
                  [
                    "Honest, pressure-free guidance",
                    "We recommend what your family actually needs, and we'll tell you if the cheaper option is the better one.",
                  ],
                  [
                    "Local conditions, local permits",
                    "Warren County karst soil, drainage, water tables, city vs. county permitting: handled, because we've done it here before.",
                  ],
                  [
                    "Buy local, strengthen local",
                    "Every install keeps work and dollars in South Central Kentucky, and adds one more prepared family to the community.",
                  ],
                ].map(([title, text]) => (
                  <li key={title} className="flex gap-4">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-0.5 h-5 w-5 shrink-0 text-grass-400"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h3 className="font-display font-bold text-cream-50">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-cream-300/85">
                        {text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href="/why-local/"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-cream-50 transition-colors hover:text-grass-400"
              >
                Our story &amp; local commitment
                <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================ GALLERY ============================ */}
      <section aria-labelledby="gallery-heading" className="bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grass-600">
              Recent local work
            </p>
            <h2
              id="gallery-heading"
              className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl"
            >
              Installed in yards just like yours
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
              Concept photography shown; real Warren County install photos
              will replace these as projects complete. Same care, same
              cleanup, same handshake.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "/images/gallery-crane-set.jpg",
                alt: "A precast concrete storm shelter being lowered by crane into a freshly excavated Bowling Green backyard",
                caption: "Concrete shelter set day, South Warren County",
              },
              {
                src: "/images/gallery-finished-yard.jpg",
                alt: "A finished in-ground shelter installation with flush door, fresh sod, and landscaping beside a white farmhouse",
                caption: "Finished install with restored lawn, Smiths Grove area",
              },
              {
                src: "/images/shelter-interior.jpg",
                alt: "Interior of a completed storm shelter with bench seating and warm LED lighting",
                caption: "Interior fit-out: seating, lighting & ventilation",
              },
            ].map((img, i) => (
              <Reveal key={img.src} delay={i * 100}>
                <figure className="group overflow-hidden rounded-2xl border border-cream-300 bg-white shadow-soft">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className="px-5 py-4 text-sm font-medium text-ink-soft">
                    {img.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= TESTIMONIALS ========================== */}
      <Testimonials />

      {/* ============================== FAQ ============================== */}
      <section aria-labelledby="faq-heading" className="bg-cream-50">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24">
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-grass-600">
              Real questions, straight answers
            </p>
            <h2
              id="faq-heading"
              className="mt-3 text-center font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl"
            >
              What Warren County families ask us
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <FaqAccordion faqs={homeFaqs} />
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-8 text-center text-ink-soft">
              More questions answered in our{" "}
              <Link
                href="/resources/"
                className="font-semibold text-navy-800 underline decoration-grass-500 decoration-2 underline-offset-4 hover:text-grass-600"
              >
                Peace of Mind Center
              </Link>
              .
            </p>
          </Reveal>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(faqSchema(homeFaqs))}
        />
      </section>

      {/* ====================== FINAL CTA + FORM ========================= */}
      <section aria-labelledby="contact-heading" className="bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grass-600">
                No obligation, no pressure
              </p>
              <h2
                id="contact-heading"
                className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl"
              >
                Let&apos;s protect your family: schedule a free local
                evaluation today
              </h2>
              <p className="mt-5 leading-relaxed text-ink-soft">
                Tell us a little about your home and we&apos;ll come walk your
                property, answer every question, and give you an honest
                written recommendation. If a shelter isn&apos;t right for your
                lot, we&apos;ll tell you that too.
              </p>
              <div className="mt-8 rounded-2xl border border-cream-300 bg-white p-6 shadow-soft">
                <h3 className="font-display font-bold text-navy-900">
                  Proudly serving
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {site.serviceAreas.join(" · ")} , and surrounding South
                  Central Kentucky communities.
                </p>
                <div className="mt-5 flex flex-col gap-2 border-t border-cream-200 pt-5 text-sm">
                  <a
                    href={site.phoneHref}
                    className="font-semibold text-navy-800 hover:text-grass-600"
                  >
                    {site.phone}
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-ink-soft hover:text-navy-900"
                  >
                    {site.email}
                  </a>
                  <p className="text-ink-soft">{site.hours}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-2xl border border-cream-300 bg-white p-6 shadow-lift sm:p-8">
                <LeadForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

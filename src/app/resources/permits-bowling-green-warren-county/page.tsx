import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { FaqAccordion } from "@/components/FaqAccordion";
import { articles } from "@/content/articles";
import { permitFaqs } from "@/content/faqs";
import { faqSchema, jsonLd } from "@/lib/schema";
import { permitContacts } from "@/lib/site";

const meta = articles.find(
  (a) => a.slug === "permits-bowling-green-warren-county",
)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `/resources/${meta.slug}/` },
};

export default function Page() {
  return (
    <ArticleLayout
      meta={meta}
      ctaHeading="Rather skip the paperwork entirely? That's what we're for."
    >
      <p>
        <strong>The short version:</strong> yes, storm shelter installation in
        our area generally requires a permit, and no, you shouldn&apos;t let
        that slow you down. The process is straightforward when you know the
        offices, and if you work with us,{" "}
        <strong>we handle every bit of it for you</strong>. This guide is for
        homeowners who want to understand what&apos;s happening (or tackle it
        themselves).
      </p>

      <h2>First question: city or county?</h2>
      <p>
        Permitting depends on whether your property sits inside Bowling Green
        city limits. Not sure? Your property tax bill says, or either office
        below can tell you in one call.
      </p>
      <ul>
        <li>
          <strong>Inside city limits:</strong> {permitContacts.city.name} at{" "}
          <a href={permitContacts.city.phoneHref}>
            {permitContacts.city.phone}
          </a>{" "}
          or{" "}
          <a href={`mailto:${permitContacts.city.email}`}>
            {permitContacts.city.email}
          </a>
          .
        </li>
        <li>
          <strong>Outside city limits (Warren County):</strong>{" "}
          {permitContacts.county.name} at{" "}
          <a href={permitContacts.county.phoneHref}>
            {permitContacts.county.phone}
          </a>
          .
        </li>
      </ul>

      <h2>What the permit process involves</h2>
      <ol>
        <li>
          <strong>Application</strong> with a simple site plan showing where
          the shelter goes relative to property lines, the house, and any
          septic system or easements.
        </li>
        <li>
          <strong>Utility locates (Kentucky 811)</strong> before any digging:
          free, required, and non-negotiable for safety.
        </li>
        <li>
          <strong>Engineering documentation</strong> for the shelter unit
          (FEMA P-320/P-361, ICC 500 ratings; reputable manufacturers provide
          this).
        </li>
        <li>
          <strong>Inspection</strong>, typically of placement and anchoring,
          scheduled with the issuing office.
        </li>
      </ol>
      <p>
        Typical turnaround runs from a few days to a couple of weeks
        depending on office workload and season (spring gets busy for obvious
        reasons).
      </p>

      <h2>Local wrinkles worth knowing</h2>
      <ul>
        <li>
          <strong>Setbacks:</strong> shelters generally must respect property
          line and easement setbacks; corner lots and small lots need a
          careful site plan.
        </li>
        <li>
          <strong>Septic systems:</strong> common outside city limits.
          Excavating near a lateral field is a problem you want caught on
          paper, not in the yard.
        </li>
        <li>
          <strong>Karst &amp; sinkholes:</strong> some parcels carry
          sinkhole-related notes that affect where (or whether) excavation
          makes sense. This is exactly what our{" "}
          <Link href="/process/">free site evaluation</Link> checks.
        </li>
        <li>
          <strong>Registration:</strong> separate from permitting, we register
          completed shelters with local emergency management so first
          responders know where to find you after a storm. Strongly
          recommended whoever installs your shelter.
        </li>
      </ul>

      <h2>How we handle it when you work with us</h2>
      <p>
        Every Bluegrass install includes permitting as standard: we prepare
        the site plan, file the application with the right office, schedule
        Kentucky 811 locates, meet the inspector, and hand you the finished
        paperwork with your owner documentation. You make zero phone calls.
        It&apos;s one of the practical advantages of hiring{" "}
        <Link href="/why-local/">a local installer</Link> who works with these
        offices month in, month out.
      </p>

      <h2>Permit questions we hear most</h2>
      <FaqAccordion faqs={permitFaqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(permitFaqs))}
      />
    </ArticleLayout>
  );
}

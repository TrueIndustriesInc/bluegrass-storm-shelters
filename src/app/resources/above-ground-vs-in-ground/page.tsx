import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { articles } from "@/content/articles";

const meta = articles.find((a) => a.slug === "above-ground-vs-in-ground")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `/resources/${meta.slug}/` },
};

export default function Page() {
  return (
    <ArticleLayout
      meta={meta}
      ctaHeading="Still torn? Let us look at your actual lot, free."
    >
      <p>
        <strong>The short version:</strong> both options protect your family
        when built to FEMA P-320/P-361 and ICC 500 standards. In-ground wins
        on absolute protection and invisibility; above-ground wins on access
        and installs where excavation doesn&apos;t make sense. The right
        answer is decided by your lot, your household, and your habits, not
        by which one a company happens to sell. We install both, so this guide
        has no thumb on the scale.
      </p>

      <h2>Protection: both pass, one has extra margin</h2>
      <p>
        A properly anchored above-ground safe room is tested against 250 mph
        winds and debris impacts; it is rated for an EF5, full stop. An
        in-ground shelter adds one more layer of physics: it puts your family{" "}
        <strong>below the debris field entirely</strong>, where there&apos;s
        nothing for wind to push against. For families who want the maximum
        margin available, below ground is it. For everyone else, this factor
        alone shouldn&apos;t decide.
      </p>

      <h2>Access: the factor families underweight</h2>
      <p>
        In-ground shelters are entered by steps or a sliding hatch.
        That&apos;s a non-issue for most households, and a real issue for
        some. Ask yourself honestly:
      </p>
      <ul>
        <li>Can everyone in the house manage steps quickly, at night, stressed?</li>
        <li>Anyone with a wheelchair, walker, or balance concerns?</li>
        <li>Are you carrying infants? Wrangling a large dog?</li>
      </ul>
      <p>
        If any answer gives you pause, the above-ground safe room&apos;s
        step-in door is the better choice; the &ldquo;best&rdquo; shelter is
        the one every member of your family can actually get into in 60
        seconds.
      </p>

      <h2>Your lot: where Warren County geology votes</h2>
      <p>
        South Central Kentucky sits on karst limestone. Depending on your
        street, that can mean shallow rock, sinkhole-prone pockets, or
        seasonal water tables that complicate excavation. Some lots are
        perfect for in-ground; a few genuinely aren&apos;t. There&apos;s no
        way to know from a brochure; it takes someone walking your property,
        which is why our{" "}
        <Link href="/process/">site evaluation</Link> is free and comes before
        any recommendation. Above-ground rooms sidestep geology but require a
        sound concrete slab, which we also verify.
      </p>

      <h2>Space & aesthetics</h2>
      <ul>
        <li>
          <strong>In-ground:</strong> invisible. A flush door in the lawn or
          garage floor; mow right over it. Zero garage or living space lost.
        </li>
        <li>
          <strong>Above-ground:</strong> occupies a garage corner (4x6 ft and
          up). Most families still park inside; many use the room daily as
          lockable storage.
        </li>
      </ul>

      <h2>Cost factors, candidly</h2>
      <p>
        Pricing depends on capacity, model, and site conditions, so beware of
        any website quoting one number for every home. In general, in-ground
        installation involves excavation and more site work; above-ground
        involves more steel. They often land closer together than people
        expect. What we promise: a written, all-inclusive price after your
        evaluation (permits, install, cleanup) with no surprise line items.
      </p>

      <h2>Quick decision guide</h2>
      <ol>
        <li>
          <strong>Mobility needs in the household?</strong> → Above-ground.
        </li>
        <li>
          <strong>Maximum protection and an untouched yard matter most?</strong>{" "}
          → In-ground.
        </li>
        <li>
          <strong>No garage, or slab in poor condition?</strong> → In-ground.
        </li>
        <li>
          <strong>High water table or shallow rock on your lot?</strong> →
          Above-ground (we&apos;ll confirm at the evaluation).
        </li>
        <li>
          <strong>Still tied?</strong> → Pick the one your family will reach
          fastest from the bedrooms. Speed beats specs.
        </li>
      </ol>

      <p>
        Want the numbers for your specific home?{" "}
        <Link href="/contact/">Schedule a free local evaluation</Link>. We&apos;ll
        walk the lot, tape out footprints, and put both options side by side
        in writing.
      </p>
    </ArticleLayout>
  );
}

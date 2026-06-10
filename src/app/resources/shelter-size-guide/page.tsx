import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { articles } from "@/content/articles";

const meta = articles.find((a) => a.slug === "shelter-size-guide")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `/resources/${meta.slug}/` },
};

export default function Page() {
  return (
    <ArticleLayout
      meta={meta}
      ctaHeading="We'll size it to your family, and tape it out so you can see it."
    >
      <p>
        <strong>The short version:</strong> take your household count, add
        room for pets and a storm kit, then go up one size if the budget
        allows. A family of five is most comfortable in a shelter rated for
        6–8 occupants, roughly a 5x10 ft in-ground unit or a 6x8 ft safe
        room. Cramped shelters get used reluctantly; comfortable ones get
        used early, and early is what saves lives.
      </p>

      <h2>What occupancy ratings actually mean</h2>
      <p>
        Manufacturers rate shelters using minimum square footage per person
        from ICC 500: about 3 sq ft per person for tornado shelters. That
        rating answers &ldquo;how many adults can fit safely?&rdquo; not
        &ldquo;how many people sit comfortably for 45 minutes with a nervous
        dog and a toddler?&rdquo; Plan for the second question.
      </p>

      <h2>A practical sizing table</h2>
      <ul>
        <li>
          <strong>1–2 people:</strong> 4-person rating · in-ground ~4x6 ft ·
          safe room 4x4–4x6 ft
        </li>
        <li>
          <strong>3–4 people:</strong> 6-person rating · in-ground ~4x8 or 5x8
          ft · safe room 4x8–6x6 ft
        </li>
        <li>
          <strong>5–6 people (the Warren County classic):</strong> 8-person
          rating · in-ground ~5x10 ft · safe room 6x8 ft
        </li>
        <li>
          <strong>7+ or multi-generation households:</strong> 10–12+ rating ·
          in-ground 6x12 ft and up · safe room 8x10 ft and up
        </li>
      </ul>
      <p>
        These are typical commercial sizes; exact dimensions vary by
        manufacturer and model. We&apos;ll match real units to your household
        at the evaluation.
      </p>

      <h2>The five things people forget to count</h2>
      <ol>
        <li>
          <strong>Pets.</strong> A 70-lb Lab takes a person&apos;s worth of
          floor. Cats in carriers stack; dogs don&apos;t.
        </li>
        <li>
          <strong>The storm kit.</strong> Water, radio, first aid, blankets.
          Give it a shelf or corner so it isn&apos;t underfoot.
        </li>
        <li>
          <strong>Guests and grandparents.</strong> If holidays put ten people
          in your house, a 4-person shelter protects less than half of them.
        </li>
        <li>
          <strong>Time, not just space.</strong> Warnings here can stretch as
          storm lines train through. Seating for everyone matters more than
          square footage on paper.
        </li>
        <li>
          <strong>The future.</strong> A shelter is a 30+ year asset. Size for
          the family you&apos;re planning, not just tonight&apos;s headcount.
        </li>
      </ol>

      <h2>Mobility changes the math</h2>
      <p>
        Wheelchairs need turning space and a step-in door, which points to an{" "}
        <Link href="/shelters/above-ground/">above-ground safe room</Link>{" "}
        sized at least one rating up. Walkers and canes do fine with either
        type if you add assist rails. Tell us about mobility needs first; it
        shapes every other recommendation.
      </p>

      <h2>When in doubt, go one size up</h2>
      <p>
        The price difference between adjacent sizes is usually modest compared
        to the total project, and nobody, in the history of storm shelters,
        has regretted the bigger one at 2 a.m. If the budget is tight,
        we&apos;d rather fit you with a right-sized{" "}
        <Link href="/shelters/in-ground/">in-ground unit</Link> than upsell
        you out of getting protected at all. That&apos;s a promise.
      </p>

      <p>
        Ready for a number?{" "}
        <Link href="/contact/">Schedule your free evaluation</Link>. We&apos;ll
        recommend a size in writing, and we&apos;ll tape the footprint on your
        lawn or garage floor so you can stand inside it before you decide.
      </p>
    </ArticleLayout>
  );
}

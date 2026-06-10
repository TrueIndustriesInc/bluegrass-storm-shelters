import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { articles } from "@/content/articles";

const meta = articles.find((a) => a.slug === "tornado-safety-warren-county")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `/resources/${meta.slug}/` },
};

export default function Page() {
  return (
    <ArticleLayout meta={meta}>
      <p>
        <strong>The short version:</strong> know the difference between a
        watch and a warning, decide tonight where your family will shelter,
        keep a kit there, and practice the plan twice a year. Everything below
        is the local detail that makes that plan actually work in Warren
        County.
      </p>

      <h2>Watch vs. warning: the 10-second refresher</h2>
      <ul>
        <li>
          <strong>Tornado Watch:</strong> conditions are favorable. Charge
          phones, locate shoes and flashlights, review the plan. If your plan
          involves driving anywhere (a relative&apos;s basement, a public
          shelter), a watch is when you go, not later.
        </li>
        <li>
          <strong>Tornado Warning:</strong> a tornado is indicated or spotted.
          Shelter <em>immediately</em>. At this point, your protection is
          whatever you can reach in about 60 seconds.
        </li>
      </ul>

      <h2>Why Warren County&apos;s geography raises the stakes</h2>
      <p>
        Two local realities shape every family&apos;s plan here. First,{" "}
        <strong>most homes in Bowling Green sit on slabs or crawlspaces</strong>;
        basements are uncommon because of our karst limestone ground. That
        removes the default &ldquo;go to the basement&rdquo; answer most
        national guides assume. Second,{" "}
        <strong>our severe weather often arrives at night</strong>. The
        December 11, 2021 EF3 moved through Bowling Green after midnight,
        which is part of why it was so devastating: 17 of our neighbors were
        lost in the Bowling Green area, many asleep when the warning came.
      </p>
      <p>
        Night tornadoes mean your plan has to work half-awake, in the dark, in
        under a minute. Build it for that.
      </p>

      <h2>Where to shelter, ranked honestly</h2>
      <ol>
        <li>
          <strong>An engineered shelter or safe room</strong> (in-ground or
          FEMA P-361 above-ground). This is the only option rated for a direct
          hit from a violent tornado.
        </li>
        <li>
          <strong>A basement</strong>: under sturdy furniture, away from
          windows. Rare in Warren County, but if you have one, use it.
        </li>
        <li>
          <strong>An interior room on the lowest floor</strong>: closet,
          bathroom, or hallway, as many walls between you and outside as
          possible. Cover with mattresses or helmets. This protects against
          most tornadoes, but not the worst ones.
        </li>
        <li>
          <strong>Public shelters</strong>: Warren County opens community
          shelters at Basil Griffin Park and Ephram White Park during official
          watches and warnings. They&apos;re a genuine asset, but they require
          driving while weather approaches. If this is your plan, leave at the{" "}
          <em>watch</em>, not the warning.
        </li>
      </ol>
      <p>
        <strong>Never</strong> shelter in a mobile home, a vehicle during a
        warning, or under a highway overpass.
      </p>

      <h2>Build the 2 a.m. plan</h2>
      <ul>
        <li>
          <strong>One word wakes the house.</strong> Pick it. Everyone old
          enough to walk knows what it means and where to go.
        </li>
        <li>
          <strong>Shoes and flashlights live at the shelter spot.</strong>{" "}
          After a tornado, debris underfoot causes a huge share of injuries.
        </li>
        <li>
          <strong>Two alert sources, one of them loud.</strong> A NOAA weather
          radio with battery backup plus Wireless Emergency Alerts on phones.
          Outdoor sirens are designed for people <em>outdoors</em>; don&apos;t
          rely on them to wake you.
        </li>
        <li>
          <strong>Assign the slow movers.</strong> Who carries the toddler?
          Who helps Grandma? Who grabs the dog? Decide now, not during the
          warning.
        </li>
        <li>
          <strong>Practice twice a year.</strong> Time it. If your family
          can&apos;t reach shelter in 60 seconds, adjust the plan, or move
          the shelter closer to the bedrooms.
        </li>
      </ul>

      <h2>What to keep in the shelter</h2>
      <p>
        Water, flashlights and batteries, a first-aid kit, sturdy shoes, work
        gloves, a whistle, phone chargers, copies of IDs, comfort items for
        kids, and a wrench or pry bar. Our{" "}
        <Link href="/resources/preparedness-checklist/">
          printable preparedness checklist
        </Link>{" "}
        covers the full list in fridge-door format.
      </p>

      <h2>After the storm</h2>
      <ul>
        <li>Wait for the all-clear before leaving shelter; storms train in lines here, and a second cell can follow the first.</li>
        <li>Watch for downed lines, gas smell, and debris with nails.</li>
        <li>Text instead of calling to keep lines open; check on neighbors, especially older ones.</li>
        <li>
          If you have a registered shelter, responders already know where to
          look for you. (We register every shelter we install with local
          emergency management.)
        </li>
      </ul>

      <h2>The honest bottom line</h2>
      <p>
        Most Warren County families will do fine in an interior room for most
        tornadoes. But 2021 taught this community that &ldquo;most&rdquo;
        isn&apos;t &ldquo;all.&rdquo; An engineered shelter turns the worst
        night of weather into an inconvenience, and that&apos;s a different
        kind of sleep the rest of the year. If you&apos;re weighing it, start
        with our{" "}
        <Link href="/resources/above-ground-vs-in-ground/">
          comparison guide
        </Link>{" "}
        or a <Link href="/contact/">free site evaluation</Link>. No pressure
        either way: prepared, not scared.
      </p>
    </ArticleLayout>
  );
}

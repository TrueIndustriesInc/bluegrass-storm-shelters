import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";
import { PrintButton } from "@/components/PrintButton";
import { articles } from "@/content/articles";
import { site } from "@/lib/site";

const meta = articles.find((a) => a.slug === "preparedness-checklist")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `/resources/${meta.slug}/` },
};

function Checklist({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="not-prose mt-6 rounded-2xl border border-cream-300 bg-white p-6 shadow-soft print:break-inside-avoid print:rounded-none print:border-ink print:p-4 print:shadow-none">
      <h3 className="font-display text-lg font-bold text-navy-900">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-soft">
            <span
              aria-hidden="true"
              className="mt-1 h-4 w-4 shrink-0 rounded border-2 border-earth-500"
            />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Page() {
  return (
    <ArticleLayout
      meta={meta}
      ctaHeading="The last item on the checklist is the easiest — we'll handle it."
    >
      <p>
        Print this page and put it on the fridge — it&apos;s designed to fit
        on one or two sheets. Check things off as a family; kids who helped
        build the plan follow it faster at 2 a.m.
      </p>

      <PrintButton />

      <Checklist
        title="Stock the shelter spot (do this week)"
        items={[
          "Water — one bottle per person, rotated each season",
          "Flashlights (one per person) + spare batteries",
          "NOAA weather radio with battery backup",
          "First-aid kit with any daily medications",
          "Sturdy shoes for every family member — kept AT the shelter spot",
          "Work gloves and a whistle",
          "Phone charger / power bank",
          "Copies of IDs, insurance info & emergency contacts in a zip bag",
          "Comfort items: blanket, snacks, a small toy for little ones",
          "Wrench or pry bar (and leash + carrier for pets)",
        ]}
      />

      <Checklist
        title="Make the plan (one family dinner)"
        items={[
          "Pick the shelter spot everyone can reach in 60 seconds",
          "Choose the one word that wakes the house and means GO",
          "Assign who helps whom: toddlers, grandparents, pets",
          "Enable Wireless Emergency Alerts on every phone",
          "Agree: at a WATCH we prepare, at a WARNING we shelter — no debating",
          "If your plan is a public shelter (Basil Griffin / Ephram White Park), know the route and leave at the watch",
          "Pick an out-of-town contact everyone texts if separated",
        ]}
      />

      <Checklist
        title="Practice (twice a year — time it)"
        items={[
          "Run the drill from the bedrooms, lights off",
          "Under 60 seconds for everyone? If not, adjust the plan",
          "Let kids open and close the shelter door themselves",
          "Check kit batteries and rotate the water",
          "Re-run the drill when anything changes: new baby, new pet, new house",
        ]}
      />

      <Checklist
        title="During a warning"
        items={[
          "Go immediately — shoes on, kit's already there",
          "Heads protected; helmets for kids are great",
          "Stay until the official all-clear (storms here often come in lines)",
          "Text, don't call, to let people know you're safe",
        ]}
      />

      <Checklist
        title="After the storm"
        items={[
          "Exit carefully — debris with nails is the #1 injury source",
          "Watch for downed power lines and gas smells",
          "Check on neighbors, especially older ones",
          "Document any damage with photos before cleanup",
        ]}
      />

      <div className="not-prose mt-8 rounded-2xl bg-navy-900 p-6 text-center print:rounded-none print:bg-white print:p-4 print:text-left">
        <p className="font-display text-lg font-bold text-cream-50 print:text-ink">
          {site.name} · {site.phone} · {site.email}
        </p>
        <p className="mt-1 text-sm text-cream-300/85 print:text-ink-soft">
          Free local site evaluations across Bowling Green &amp; South Central
          KY. Prepared, not scared.
        </p>
      </div>

      <p className="print:hidden">
        Want help with the biggest line item — the shelter itself? Start with
        our <Link href="/resources/shelter-size-guide/">size guide</Link> or{" "}
        <Link href="/contact/">schedule a free evaluation</Link>.
      </p>
    </ArticleLayout>
  );
}

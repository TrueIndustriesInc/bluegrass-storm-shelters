/**
 * Resource article registry - drives the Resources hub cards, footer links,
 * and sitemap. Add new guides here and create a matching page under
 * src/app/resources/<slug>/page.tsx.
 */
export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  readMinutes: number;
  datePublished: string;
  image: string;
  imageAlt: string;
};

export const articles: ArticleMeta[] = [
  {
    slug: "tornado-safety-warren-county",
    title: "Tornado Safety for Warren County Families",
    description:
      "Watches vs. warnings, where to shelter with and without a basement, public shelter locations, and how to build a family tornado plan that works at 2 a.m.",
    readMinutes: 8,
    datePublished: "2026-06-10",
    image: "/images/family-porch.jpg",
    imageAlt:
      "A family together on their front porch as evening storm clouds clear over their Kentucky neighborhood",
  },
  {
    slug: "above-ground-vs-in-ground",
    title: "Above-Ground vs. In-Ground: What's Right for Your Home?",
    description:
      "An honest comparison for Bowling Green homes: protection levels, access, cost factors, lot conditions, and the questions that actually decide it.",
    readMinutes: 7,
    datePublished: "2026-06-10",
    image: "/images/aboveground-saferoom.jpg",
    imageAlt:
      "A steel above-ground safe room installed inside a residential garage",
  },
  {
    slug: "permits-bowling-green-warren-county",
    title: "Storm Shelter Permits in Bowling Green & Warren County",
    description:
      "Who to call, what's required inside vs. outside city limits, typical timelines, and how we handle the entire process for you.",
    readMinutes: 5,
    datePublished: "2026-06-10",
    image: "/images/install-process.jpg",
    imageAlt:
      "A storm shelter installation site being carefully prepared in a Warren County backyard",
  },
  {
    slug: "shelter-size-guide",
    title: "What Size Storm Shelter Does Your Family Need?",
    description:
      "Occupancy ratings explained, sizing for a family of 5, pets and supplies, mobility considerations, and why a little extra room matters.",
    readMinutes: 6,
    datePublished: "2026-06-10",
    image: "/images/shelter-interior.jpg",
    imageAlt:
      "Interior of an in-ground storm shelter with bench seating and warm lighting",
  },
  {
    slug: "preparedness-checklist",
    title: "Warren County Family Tornado Preparedness Checklist",
    description:
      "A free, printable checklist: what to stock, what to practice, and what to do before, during, and after a tornado warning in South Central Kentucky.",
    readMinutes: 4,
    datePublished: "2026-06-10",
    image: "/images/storm-kit.jpg",
    imageAlt:
      "An organized family tornado preparedness kit laid out on a wooden table",
  },
];

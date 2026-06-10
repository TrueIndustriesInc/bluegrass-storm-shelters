/**
 * FAQ content — written answer-first so each entry works as a featured
 * snippet / AI-search answer on its own. Rendered with FAQPage schema.
 */
export type Faq = { q: string; a: string };

export const homeFaqs: Faq[] = [
  {
    q: "What size storm shelter does a family of 5 need?",
    a: "For a family of five, we typically recommend a shelter rated for 6–8 occupants — roughly 5x10 feet for an in-ground unit. That gives everyone a seat, room for pets, and space for a storm kit without feeling cramped. During your free site evaluation we'll size it to your family, your lot, and how you'll actually use it.",
  },
  {
    q: "Do I need a permit for an underground storm shelter in Warren County?",
    a: "In most cases, yes — a permit is required for in-ground shelter installation. Inside Bowling Green city limits, contact the City Building Division at (270) 393-3615; outside city limits, Warren County Building & Codes at (270) 843-5360. The good news: we handle the permit process for you as part of every installation, so you never have to navigate it alone.",
  },
  {
    q: "Is an in-ground or above-ground shelter better for my Bowling Green home?",
    a: "It depends on your lot and your family. In-ground shelters offer maximum protection and stay out of sight in your yard — a great fit for the slab and crawlspace homes common in Warren County. Above-ground safe rooms install in a garage and are ideal if anyone in your family has mobility needs or your lot has drainage constraints. We'll give you an honest recommendation at your free evaluation — including telling you if the less expensive option is the right one.",
  },
  {
    q: "How long does installation take?",
    a: "Most in-ground installations are completed in a single day once permits are approved, with site preparation and cleanup handled by our crew. Above-ground safe rooms typically install in a few hours. From first call to finished shelter, most projects wrap within a few weeks depending on permit timing.",
  },
  {
    q: "Will an in-ground shelter flood or leak?",
    a: "Not when it's installed correctly for your specific site. Warren County sits on karst terrain, so soil, drainage, and water-table evaluation isn't optional — it's the first thing we check at every property. We position and seal each shelter for your lot's conditions, and every install includes proper drainage planning.",
  },
  {
    q: "Are your shelters tested and certified?",
    a: "We install shelters engineered to FEMA P-320/P-361 guidance and ICC 500 standards — built and anchored to withstand EF5 winds and debris impact. We're licensed and insured, and we'll walk you through the documentation for your specific unit before you commit.",
  },
];

export const permitFaqs: Faq[] = [
  {
    q: "Who do I call about a shelter permit inside Bowling Green city limits?",
    a: "The City of Bowling Green Building Division at (270) 393-3615, or building.division@bgky.org. If you work with us, we make this call for you and manage the process end to end.",
  },
  {
    q: "Who handles permits outside city limits in Warren County?",
    a: "Warren County Building & Codes at (270) 843-5360. Requirements differ slightly from the city's, especially around setbacks and septic systems — another reason local experience matters.",
  },
  {
    q: "Does a storm shelter affect my property taxes or insurance?",
    a: "A shelter can modestly increase home value, and some insurers offer consideration for certified storm protection. Kentucky has also periodically discussed safe-room incentive programs. We'll point you to current programs during your evaluation — incentives change, so we keep up with them so you don't have to.",
  },
];

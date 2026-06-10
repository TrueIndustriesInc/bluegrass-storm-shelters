/**
 * PLACEHOLDER TESTIMONIALS — replace with real customer quotes before launch.
 * Written to model the tone and specificity real reviews should aim for.
 * Ask happy customers: "What almost stopped you, and what was it actually like?"
 */
export type Testimonial = {
  quote: string;
  name: string;
  area: string;
  detail: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "After December 2021 we knew we couldn't keep driving to the park shelter with two kids and a dog. The crew evaluated our yard, handled the county permit, and had the shelter in before lunch. Our yard looks like nothing ever happened.",
    name: "The R. Family",
    area: "Alvaton",
    detail: "8-person in-ground shelter · installed in one day",
  },
  {
    quote:
      "My mother uses a walker, so underground wasn't an option. They never tried to upsell us — they recommended the garage safe room, anchored it to the slab, and walked her through using the door until she was comfortable.",
    name: "D. Thompson",
    area: "Smiths Grove",
    detail: "Above-ground safe room · garage install",
  },
  {
    quote:
      "We'd gotten quotes from two regional companies that felt like call centers. These folks are from here — they knew our neighborhood's soil was rocky before they even came out. That's who I want to write a check to.",
    name: "M. & K. Patterson",
    area: "Bowling Green (Plano area)",
    detail: "6-person in-ground shelter",
  },
];

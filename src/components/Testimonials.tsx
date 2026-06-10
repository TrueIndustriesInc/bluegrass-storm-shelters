import { testimonials } from "@/content/testimonials";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-cream-100">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-grass-600">
            Neighbors, not just customers
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 text-center font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl"
          >
            Trusted by families across Warren County
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-ink-soft">
            Example testimonials shown — real customer stories will replace
            these as installs are completed.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-cream-300 bg-white p-7 shadow-soft">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7 text-grass-500"
                  aria-hidden="true"
                >
                  <path d="M7.17 4A5.17 5.17 0 0 0 2 9.17v.66A10.17 10.17 0 0 0 12.17 20v-4a6.17 6.17 0 0 1-5.7-3.83c.23.04.46.06.7.06a5.17 5.17 0 0 0 0-10.34V4ZM18.17 4A5.17 5.17 0 0 0 13 9.17v.66A10.17 10.17 0 0 0 23.17 20v-4a6.17 6.17 0 0 1-5.7-3.83c.23.04.46.06.7.06a5.17 5.17 0 0 0 0-10.34V4Z" />
                </svg>
                <blockquote className="mt-4 flex-1 leading-relaxed text-ink-soft">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-cream-200 pt-4">
                  <p className="font-display font-bold text-navy-900">
                    {t.name}{" "}
                    <span className="font-body text-sm font-normal text-ink-soft">
                      · {t.area}
                    </span>
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-earth-700">
                    {t.detail}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

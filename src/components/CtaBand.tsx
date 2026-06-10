import Link from "next/link";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

/**
 * Reusable conversion band placed near the end of content pages.
 */
export function CtaBand({
  heading = "Let's protect your family.",
  body = "Schedule a no-obligation site evaluation with a local neighbor who knows Warren County soil, permits, and storms. We'll give you an honest recommendation, even if it's not us.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section aria-labelledby="cta-heading" className="bg-navy-900">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grass-400">
            Prepared, Not Scared
          </p>
          <h2
            id="cta-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-cream-50 sm:text-4xl"
          >
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-cream-300/90">
            {body}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/"
              className="w-full rounded-lg bg-grass-600 px-7 py-4 text-base font-semibold text-cream-50 shadow-lift transition-colors hover:bg-grass-500 sm:w-auto"
            >
              Schedule Your Free Site Evaluation
            </Link>
            <a
              href={site.phoneHref}
              className="w-full rounded-lg border border-cream-300/30 px-7 py-4 text-base font-semibold text-cream-50 transition-colors hover:bg-navy-800 sm:w-auto"
            >
              Or call {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

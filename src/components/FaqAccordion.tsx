import type { Faq } from "@/content/faqs";

/**
 * Accessible FAQ accordion built on native <details>/<summary> —
 * keyboard-friendly, screen-reader-friendly, zero JS shipped.
 * Pair with faqSchema() on the page for FAQPage structured data.
 */
export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-cream-300 rounded-2xl border border-cream-300 bg-white shadow-soft">
      {faqs.map((faq) => (
        <details key={faq.q} className="group px-6 py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-display text-[17px] font-semibold text-navy-900 [&::-webkit-details-marker]:hidden">
            {faq.q}
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 shrink-0 text-grass-600 transition-transform duration-300 group-open:rotate-180"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </summary>
          <p className="pb-5 pr-8 leading-relaxed text-ink-soft">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}

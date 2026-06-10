import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="bg-cream-50">
      <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grass-600">
          404 — page not found
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-navy-900">
          Well, that page blew away.
        </h1>
        <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
          The page you&apos;re looking for isn&apos;t here — but everything
          else is right where it should be.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-lg bg-navy-800 px-6 py-3.5 font-semibold text-cream-50 shadow-soft transition-colors hover:bg-navy-700"
          >
            Back to the homepage
          </Link>
          <a
            href={site.phoneHref}
            className="rounded-lg border border-cream-300 bg-white px-6 py-3.5 font-semibold text-navy-800 shadow-soft transition-colors hover:bg-cream-100"
          >
            Or call {site.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

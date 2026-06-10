import Link from "next/link";
import { LogoLockup } from "./Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-cream-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="inline-block rounded-md">
              <LogoLockup dark />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-300/85">
              Locally owned and operated in Bowling Green. In-ground and
              above-ground tornado shelters installed with care for Warren
              County and South Central Kentucky families.
            </p>
            <p className="mt-4 text-sm font-semibold tracking-wide text-grass-400">
              Prepared, Not Scared.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-cream-300/60">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream-100/90 transition-colors hover:text-cream-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-cream-300/60">
              Guides
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/resources/above-ground-vs-in-ground/"
                  className="text-cream-100/90 transition-colors hover:text-cream-50"
                >
                  Above-Ground vs. In-Ground
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/permits-bowling-green-warren-county/"
                  className="text-cream-100/90 transition-colors hover:text-cream-50"
                >
                  Local Permit Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/shelter-size-guide/"
                  className="text-cream-100/90 transition-colors hover:text-cream-50"
                >
                  Shelter Size Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/preparedness-checklist/"
                  className="text-cream-100/90 transition-colors hover:text-cream-50"
                >
                  Family Preparedness Checklist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-cream-300/60">
              Talk to a Neighbor
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="font-semibold text-cream-50 hover:text-grass-400"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-cream-100/90 hover:text-cream-50"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-cream-300/85">{site.hours}</li>
              <li className="text-cream-300/85">
                Bowling Green, KY · Serving Warren County &amp; South Central
                Kentucky
              </li>
            </ul>
            <Link
              href="/contact/"
              className="mt-5 inline-block rounded-lg bg-grass-600 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-grass-500"
            >
              Schedule a Free Evaluation
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-navy-800 pt-6 text-xs text-cream-300/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Licensed &amp; insured.
            Locally owned in Bowling Green, Kentucky.
          </p>
          <p>
            Serving {site.serviceAreas.slice(0, 5).join(", ")} &amp; surrounding
            South Central KY communities.
          </p>
        </div>
      </div>
    </footer>
  );
}

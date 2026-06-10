"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LogoLockup } from "./Logo";
import { nav, site } from "@/lib/site";

const PhoneIcon = (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" />
  </svg>
);

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${
        scrolled || open
          ? "bg-cream-50/95 shadow-soft backdrop-blur-md"
          : "bg-cream-50/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="rounded-md"
          aria-label="Bluegrass Storm Shelters — home"
        >
          <LogoLockup />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href.slice(0, -1));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3.5 py-2 text-[15px] font-medium transition-colors ${
                  active
                    ? "text-navy-900 underline decoration-grass-500 decoration-2 underline-offset-8"
                    : "text-ink-soft hover:text-navy-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-md px-2 py-2 text-[15px] font-semibold text-navy-800 transition-colors hover:text-navy-600 md:flex"
          >
            {PhoneIcon}
            {site.phone}
          </a>
          <Link
            href="/contact/"
            className="hidden rounded-lg bg-navy-800 px-4.5 py-2.5 text-sm font-semibold text-cream-50 shadow-soft transition-all hover:bg-navy-700 hover:shadow-lift sm:inline-block"
          >
            Free Site Evaluation
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-navy-900 lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-6 w-6"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-cream-200 bg-cream-50 px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3.5 text-lg font-medium text-navy-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-3 border-t border-cream-200 pt-4">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 px-2 text-lg font-semibold text-navy-800"
            >
              {PhoneIcon}
              {site.phone}
            </a>
            <Link
              href="/contact/"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-navy-800 px-5 py-3.5 text-center text-base font-semibold text-cream-50"
            >
              Schedule Your Free Site Evaluation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

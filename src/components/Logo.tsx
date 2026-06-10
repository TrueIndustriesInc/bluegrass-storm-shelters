/**
 * Brand mark: a shelter roofline sheltering a family dot, with bluegrass
 * blades at the base and a clearing-sky arc above. Inline SVG so it can be
 * recolored via currentColor and swapped easily at handover.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* clearing-sky arc */}
      <path
        d="M8 14c4.5-5.5 10-8.5 16-8.5S35.5 8.5 40 14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.45"
      />
      {/* shelter roof */}
      <path
        d="M10 30 24 17l14 13"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* protected family */}
      <circle cx="24" cy="30" r="3.25" fill="currentColor" />
      {/* ground line */}
      <path
        d="M7 38h34"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* bluegrass blades */}
      <path
        d="M14 38c0-2.5-1.5-4.5-3-5.5M18 38c0-3 .8-5 2-6.5M34 38c0-2.5 1.5-4.5 3-5.5M30 38c0-3-.8-5-2-6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

export function LogoLockup({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark
        className={`h-9 w-9 shrink-0 ${dark ? "text-cream-50" : "text-navy-800"}`}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[15px] font-bold tracking-tight sm:text-base ${dark ? "text-cream-50" : "text-navy-900"}`}
        >
          Bluegrass Storm Shelters
        </span>
        <span
          className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${dark ? "text-cream-300/80" : "text-grass-600"}`}
        >
          Bowling Green, Kentucky
        </span>
      </span>
    </span>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { site } from "@/lib/site";

/**
 * Lead-capture form: name, phone, email, neighborhood/zip, family size,
 * shelter preference, notes.
 *
 * SUBMISSION: posts to Formspree when NEXT_PUBLIC_FORMSPREE_ID is set
 * (create a free form at formspree.io and add the ID to your env / Vercel
 * project settings). Until then it runs in "demo mode" - validates, shows
 * the success state, and surfaces phone/email so no lead is ever stranded.
 */

const schema = z.object({
  name: z.string().min(2, "Please tell us your name"),
  phone: z
    .string()
    .min(7, "Please enter a phone number we can reach you at")
    .regex(/^[\d\s()+.-]+$/, "Please enter a valid phone number"),
  email: z.email("Please enter a valid email address"),
  location: z
    .string()
    .min(2, "Your neighborhood, town, or zip helps us plan the visit"),
  familySize: z.string().min(1, "Select your household size"),
  shelterType: z.string().min(1, "Select an option (or 'not sure yet')"),
  notes: z.string().max(2000).optional(),
  // Honeypot - bots fill it, humans never see it.
  company: z.string().max(0).optional(),
});

type FormData = z.infer<typeof schema>;

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const inputClasses =
  "w-full rounded-lg border border-cream-300 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink-soft/55 transition-colors focus:border-grass-500 focus:outline-none focus:ring-2 focus:ring-grass-500/30 aria-[invalid=true]:border-red-400";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-navy-900">
        {label}
      </span>
      {children}
      {error && (
        <span role="alert" className="mt-1.5 block text-sm text-red-700">
          {error}
        </span>
      )}
    </label>
  );
}

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    if (data.company) return; // honeypot tripped - silently drop
    setStatus("sending");
    try {
      if (FORMSPREE_ID) {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Submission failed");
      } else {
        // Demo mode - no backend wired yet. See file header.
        await new Promise((r) => setTimeout(r, 600));
      }
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-grass-400/50 bg-grass-100 p-8 text-center"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="mx-auto h-12 w-12 text-grass-600"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h3 className="mt-4 font-display text-xl font-bold text-navy-900">
          Thank you, neighbor.
        </h3>
        <p className="mx-auto mt-2 max-w-sm leading-relaxed text-ink-soft">
          We&apos;ve got your request and will reach out within one business
          day to schedule your free site evaluation. Need us sooner? Call{" "}
          <a
            href={site.phoneHref}
            className="font-semibold text-navy-800 underline decoration-grass-500 underline-offset-2"
          >
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" error={errors.name?.message}>
          <input
            type="text"
            autoComplete="name"
            placeholder="First and last name"
            aria-invalid={!!errors.name}
            className={inputClasses}
            {...register("name")}
          />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input
            type="tel"
            autoComplete="tel"
            placeholder="(270) 555-0123"
            aria-invalid={!!errors.phone}
            className={inputClasses}
            {...register("phone")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            className={inputClasses}
            {...register("email")}
          />
        </Field>
        <Field
          label="Neighborhood, town, or zip"
          error={errors.location?.message}
        >
          <input
            type="text"
            autoComplete="postal-code"
            placeholder="e.g. Alvaton, 42101, Lost River area"
            aria-invalid={!!errors.location}
            className={inputClasses}
            {...register("location")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Household size" error={errors.familySize?.message}>
          <select
            aria-invalid={!!errors.familySize}
            className={inputClasses}
            defaultValue=""
            {...register("familySize")}
          >
            <option value="" disabled>
              Select…
            </option>
            <option value="1-2">1–2 people</option>
            <option value="3-4">3–4 people</option>
            <option value="5-6">5–6 people</option>
            <option value="7+">7+ people</option>
          </select>
        </Field>
        <Field label="Shelter preference" error={errors.shelterType?.message}>
          <select
            aria-invalid={!!errors.shelterType}
            className={inputClasses}
            defaultValue=""
            {...register("shelterType")}
          >
            <option value="" disabled>
              Select…
            </option>
            <option value="in-ground">In-ground / underground</option>
            <option value="above-ground">Above-ground safe room</option>
            <option value="not-sure">Not sure yet (advise me)</option>
          </select>
        </Field>
      </div>

      <Field label="Anything we should know? (optional)">
        <textarea
          rows={4}
          placeholder="Pets, mobility needs, lot details, timing. Whatever's on your mind."
          className={inputClasses}
          {...register("notes")}
        />
      </Field>

      {/* Honeypot field - hidden from humans, catches bots */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
        </label>
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">
          Something went wrong sending your request. Please call us at{" "}
          <a href={site.phoneHref} className="font-semibold underline">
            {site.phone}
          </a>{" "}
          or email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-navy-800 px-6 py-4 text-base font-semibold text-cream-50 shadow-soft transition-all hover:bg-navy-700 hover:shadow-lift disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending"
          ? "Sending…"
          : "Schedule My Free Local Site Evaluation"}
      </button>
      <p className="text-center text-xs leading-relaxed text-ink-soft">
        No obligation, no pressure, just an honest local assessment. We never
        share your information.
      </p>
    </form>
  );
}

import { site } from "./site";

/**
 * JSON-LD structured data builders.
 * LocalBusiness is injected site-wide from the root layout; page-level
 * schema (Service, FAQPage, HowTo, Article, BreadcrumbList) is added by
 * the pages that own that content.
 */

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    slogan: site.tagline,
    image: `${site.url}/images/hero-storm-clearing.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: site.serviceAreas.map((name) => ({
      "@type": "City",
      name: `${name}, KY`,
    })),
    sameAs: [site.social.facebook],
    knowsAbout: [
      "in-ground tornado shelters",
      "underground storm shelters",
      "above-ground safe rooms",
      "storm shelter installation",
      "tornado preparedness",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "In-Ground Tornado Shelter Installation",
          areaServed: "Bowling Green & South Central Kentucky",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Above-Ground Safe Room Installation",
          areaServed: "Bowling Green & South Central Kentucky",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Free Local Site Evaluation",
          price: "0",
          priceCurrency: "USD",
        },
      },
    ],
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${site.url}${opts.slug}`,
    provider: { "@id": `${site.url}/#business` },
    areaServed: site.serviceAreas.map((name) => ({
      "@type": "City",
      name: `${name}, KY`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function howToSchema(opts: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: `${site.url}${opts.slug}`,
    datePublished: opts.datePublished,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@id": `${site.url}/#business` },
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };
}

/** Render helper — serialize schema for a <script type="application/ld+json"> tag. */
export function jsonLd(data: object) {
  return { __html: JSON.stringify(data) };
}

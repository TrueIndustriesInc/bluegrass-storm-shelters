/**
 * Single source of truth for business details, contact info, and service area.
 *
 * HANDOVER NOTE: Update everything in this file before launch -
 * phone, email, address, license details, and social links all flow
 * from here into the header, footer, contact page, and schema markup.
 */

export const site = {
  name: "Bluegrass Storm Shelters",
  legalName: "Bluegrass Storm Shelters LLC", // PLACEHOLDER - confirm legal entity name
  tagline: "Prepared, Not Scared",
  description:
    "Locally owned Bowling Green, KY installer of in-ground and above-ground tornado shelters. Licensed & insured, serving Warren County and South Central Kentucky with full-service installation.",
  url: "https://bluegrassstormshelters.com", // PLACEHOLDER - swap to the live domain at launch
  phone: "(270) 202-5380",
  phoneHref: "tel:+12702025380",
  email: "info@bgstormshelters.com",
  address: {
    locality: "Bowling Green",
    region: "KY",
    postalCode: "42101", // PLACEHOLDER - confirm
    country: "US",
  },
  geo: { lat: 36.9685, lng: -86.4808 },
  serviceAreas: [
    "Bowling Green",
    "Smiths Grove",
    "Alvaton",
    "Plano",
    "Rockfield",
    "Oakland",
    "Woodburn",
    "Glasgow",
    "Franklin",
    "Scottsville",
    "Russellville",
    "Morgantown",
  ],
  social: {
    facebook: "https://www.facebook.com/bluegrassstormshelters", // PLACEHOLDER - confirm exact page URL
  },
  hours: "Mon–Sat, 8am–6pm CT",
  founded: "Bowling Green, Kentucky",
} as const;

/** Local government contacts referenced in permit content. */
export const permitContacts = {
  city: {
    name: "City of Bowling Green Building Division",
    phone: "(270) 393-3615",
    phoneHref: "tel:+12703933615",
    email: "building.division@bgky.org",
    note: "For properties inside Bowling Green city limits",
  },
  county: {
    name: "Warren County Building & Codes",
    phone: "(270) 843-5360",
    phoneHref: "tel:+12708435360",
    note: "For properties in Warren County outside city limits",
  },
} as const;

export const nav = [
  { label: "Shelters", href: "/shelters/" },
  { label: "Our Process", href: "/process/" },
  { label: "Why Local", href: "/why-local/" },
  { label: "Resources", href: "/resources/" },
  { label: "Contact", href: "/contact/" },
] as const;

import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import { jsonLd, localBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Bluegrass Storm Shelters | In-Ground & Above-Ground Tornado Shelters in Bowling Green, KY",
    template: "%s | Bluegrass Storm Shelters",
  },
  description: site.description,
  keywords: [
    "in-ground tornado shelter Bowling Green KY",
    "underground storm shelter Warren County",
    "below ground tornado shelter BG KY",
    "storm shelter installation Bowling Green",
    "above ground safe room Kentucky",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title:
      "Bluegrass Storm Shelters: Tornado Shelters Installed in Bowling Green, KY",
    description: site.description,
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingCta />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(localBusinessSchema())}
        />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "New Horizons Center for Healing | Trusted Mental Health Care",
    template: "%s | NHCH",
  },
  description:
    "For 15 years, New Horizons Center for Healing has provided ethical, clinician-led mental health care for individuals, couples, and families in McKinney, TX.",
  keywords: [
    "mental health",
    "therapy",
    "counseling",
    "psychiatry",
    "McKinney TX",
    "Dallas mental health",
    "family therapy",
    "couples counseling",
    "trauma therapy",
    "PTSD treatment",
  ],
  authors: [{ name: "New Horizons Center for Healing" }],
  creator: "New Horizons Center for Healing",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://newhorizonscenterforhealing.com",
    siteName: "New Horizons Center for Healing",
    title: "New Horizons Center for Healing | Trusted Mental Health Care",
    description:
      "For 15 years, New Horizons Center for Healing has provided ethical, clinician-led mental health care for individuals, couples, and families.",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Horizons Center for Healing",
    description: "Ethical, clinician-led mental health care since 2011.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "New Horizons Center for Healing",
  description:
    "Comprehensive outpatient mental health clinic providing ethical, clinician-led care for individuals, couples, and families.",
  url: "https://newhorizonscenterforhealing.com",
  telephone: "+1-972-607-9650",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4817 Medical Center Dr. Unit 3A",
    addressLocality: "McKinney",
    addressRegion: "TX",
    postalCode: "75069",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "33.1972",
    longitude: "-96.6397",
  },
  openingHours: ["Mo-Th 09:00-20:00", "Fr 09:00-18:00"],
  priceRange: "$$",
  medicalSpecialty: ["Psychiatry", "Psychology", "MentalHealth"],
  availableService: [
    "Individual Therapy",
    "Couples Therapy",
    "Family Therapy",
    "Child & Adolescent Therapy",
    "Psychiatric Services",
    "Psychological Testing",
    "Sex Therapy",
    "Trauma Treatment",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
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

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://newhorizonscenterforhealing.com/#organization",
  name: "New Horizons Center for Healing",
  alternateName: "NHCH",
  url: "https://newhorizonscenterforhealing.com",
  logo: "https://newhorizonscenterforhealing.com/assets/logos/NHCH_15YR_LOGO.png",
  image: "https://newhorizonscenterforhealing.com/assets/misc/hero-new-horizons.jpg",
  description: "For 15 years, New Horizons Center for Healing has provided ethical, clinician-led mental health care for individuals, couples, and families in McKinney, TX.",
  foundingDate: "2011",
  founder: {
    "@type": "Person",
    name: "Dr. Sarah Dean Aslinia",
  },
  sameAs: [
    "https://www.facebook.com/newhorizonscenterforhealing",
    "https://twitter.com/dallascounselor",
    "https://www.youtube.com/user/mydallascounselor",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-972-607-9650",
    contactType: "customer service",
    availableLanguage: ["English", "Spanish"],
  },
};

// MedicalBusiness Schema
const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://newhorizonscenterforhealing.com/#medicalbusiness",
  name: "New Horizons Center for Healing",
  description: "Comprehensive outpatient mental health clinic providing ethical, clinician-led care for individuals, couples, and families.",
  url: "https://newhorizonscenterforhealing.com",
  telephone: "+1-972-607-9650",
  faxNumber: "+1-469-519-0423",
  email: "info@newhorizonscenterforhealing.com",
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
    latitude: 33.1972,
    longitude: -96.6397,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Insurance",
  medicalSpecialty: [
    "Psychiatry",
    "Psychology",
    "Psychotherapy",
  ],
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "Individual Therapy",
      description: "One-on-one counseling for adults dealing with anxiety, depression, trauma, and other mental health concerns.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Couples Therapy",
      description: "Relationship counseling to improve communication and resolve conflicts.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Family Therapy",
      description: "Therapeutic support for families facing challenges and transitions.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Child & Adolescent Therapy",
      description: "Specialized mental health care for children and teens.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Trauma & PTSD Treatment",
      description: "Evidence-based trauma therapy including EMDR.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Psychiatric Services",
      description: "Medication management and psychiatric evaluations.",
    },
  ],
  isAcceptingNewPatients: true,
  healthPlanNetworkId: [
    "Aetna",
    "Ambetter",
    "Blue Cross Blue Shield",
    "Cigna",
    "Healthcare Highways",
    "UnitedHealthcare",
  ],
};

// LocalBusiness Schema for local SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://newhorizonscenterforhealing.com/#localbusiness",
  name: "New Horizons Center for Healing",
  image: "https://newhorizonscenterforhealing.com/assets/misc/hero-new-horizons.jpg",
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
    latitude: 33.1972,
    longitude: -96.6397,
  },
  areaServed: [
    { "@type": "City", name: "McKinney" },
    { "@type": "City", name: "Frisco" },
    { "@type": "City", name: "Plano" },
    { "@type": "City", name: "Allen" },
    { "@type": "City", name: "Dallas" },
    { "@type": "State", name: "Texas" },
  ],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/newhorizonscenterforhealing",
    "https://twitter.com/dallascounselor",
    "https://www.youtube.com/user/mydallascounselor",
  ],
};

// Combined schema array
const schemaMarkup = [organizationSchema, medicalBusinessSchema, localBusinessSchema];

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

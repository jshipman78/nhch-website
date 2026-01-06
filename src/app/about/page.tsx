import { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "About NHCH | Ethical Mental Health Care Since 2011",
  description:
    "Founded in 2011, New Horizons Center for Healing delivers ethical, evidence-based mental health care with a focus on integrity and long-term trust.",
};

const values = [
  {
    title: "Clinical Integrity",
    description: "Over convenience",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Depth",
    description: "Over volume",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Stability",
    description: "Over hype",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
  },
  {
    title: "Evidence-Based",
    description: "Practice",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: "Respect",
    description: "For individuals, families, and communities",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-forest mb-6">
              About New Horizons Center for Healing
            </h1>
            <p className="text-warmgray text-lg leading-relaxed">
              Founded in 2011 with a clear mission: to provide high-quality
              mental health care grounded in ethics, clinical rigor, and respect
              for the individual.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/misc/building.jpg"
                alt="New Horizons Center for Healing building"
                width={500}
                height={350}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Our Story Section */}
      <Section background="white" padding="lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-forest text-center mb-8">Our Story</h2>
          <div className="prose prose-lg mx-auto text-warmgray">
            <p className="leading-relaxed mb-6">
              New Horizons Center for Healing was founded in 2011 with a clear
              mission: to provide high-quality mental health care grounded in
              ethics, clinical rigor, and respect for the individual.
            </p>
            <p className="leading-relaxed mb-6">
              Over the past fifteen years, NHCH has grown steadily while
              remaining committed to thoughtful, clinician-led practice. Rather
              than chasing trends, the practice has focused on long-term trust,
              interdisciplinary collaboration, and professional integrity.
            </p>
            <p className="leading-relaxed">
              As we enter our 15th year, NHCH continues to prioritize depth,
              stability, and responsible growth.
            </p>
          </div>
        </div>
      </Section>

      {/* Mission Section */}
      <Section background="forest" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-gold mb-6">Our Mission</h2>
          <p className="text-white text-xl leading-relaxed">
            To provide ethical, comprehensive mental health care that honors the
            complexity of the human experience and supports lasting
            psychological well-being.
          </p>
        </div>
      </Section>

      {/* Values Section */}
      <Section background="white" padding="lg">
        <SectionHeading title="Our Values" centered />
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="text-center p-6 rounded-xl bg-muted/50"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold mb-4">
                {value.icon}
              </div>
              <h3 className="text-forest font-semibold mb-1">{value.title}</h3>
              <p className="text-warmgray text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Ethics Section */}
      <Section background="muted" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-forest mb-6">Our Ethical Commitment</h2>
          <p className="text-warmgray text-lg leading-relaxed mb-8">
            NHCH follows established professional ethical standards and does not
            engage in sensationalized, unverified, or exploitative mental health
            practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/leadership" variant="secondary">
              Meet Our Leadership
            </Button>
            <Button href="/team" variant="outline">
              View Our Team
            </Button>
          </div>
        </div>
      </Section>

      {/* Office Gallery */}
      <Section background="white" padding="lg">
        <SectionHeading
          title="Our Space"
          subtitle="A welcoming environment designed for your comfort and privacy."
        />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/assets/misc/lobby-1.jpg"
              alt="NHCH lobby area"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/assets/misc/lobby-2.jpg"
              alt="NHCH waiting area"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/assets/misc/counseling-office.jpg"
              alt="NHCH counseling room"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </Section>
    </>
  );
}

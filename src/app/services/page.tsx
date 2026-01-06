import { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";
import { Section, SectionHeading, Button } from "@/components/ui";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Mental Health Services | NHCH",
  description:
    "NHCH offers individual, couples, family, trauma, neurodiversity-informed, and sex therapy services delivered by licensed clinicians.",
};

const icons: Record<string, ReactNode> = {
  user: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  heart: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  users: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  smile: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  lightbulb: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-forest mb-6">Our Services</h1>
          <p className="text-warmgray text-lg leading-relaxed">
            New Horizons Center for Healing offers a range of mental health
            services designed to meet clients where they are, while maintaining
            consistent clinical standards across all areas of care.
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section background="white" padding="lg">
        <SectionHeading
          title="Comprehensive Mental Health Care"
          subtitle="Each service is provided by licensed clinicians who prioritize thoughtful assessment, ethical practice, and collaborative treatment planning."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white rounded-xl p-6 border border-border hover:shadow-lg hover:border-gold/30 transition-all duration-200"
            >
              <div className="text-gold mb-4 group-hover:text-gold-dark transition-colors">
                {icons[service.icon]}
              </div>
              <h3 className="text-xl font-semibold text-forest mb-3 group-hover:text-forest-dark transition-colors">
                {service.title}
              </h3>
              <p className="text-warmgray text-sm leading-relaxed mb-4">
                {service.description.slice(0, 150)}...
              </p>
              <span className="text-gold font-medium text-sm group-hover:text-gold-dark transition-colors">
                Learn More &rarr;
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Our Approach Section */}
      <Section background="muted" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-forest mb-6">Our Approach</h2>
          <p className="text-warmgray text-lg leading-relaxed mb-8">
            At NHCH, we believe meaningful healing requires stability, expertise,
            and human connection—not shortcuts, hype, or sensationalized
            approaches to mental health. Our clinicians use evidence-based
            methods tailored to your unique needs and goals.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6">
              <div className="text-gold mb-3 flex justify-center">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-forest mb-2">Evidence-Based</h3>
              <p className="text-warmgray text-sm">
                Treatments grounded in clinical research and proven outcomes.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-gold mb-3 flex justify-center">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-forest mb-2">Collaborative</h3>
              <p className="text-warmgray text-sm">
                Working together to develop personalized treatment plans.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-gold mb-3 flex justify-center">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-forest mb-2">Compassionate</h3>
              <p className="text-warmgray text-sm">
                Care delivered with empathy, respect, and understanding.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="forest" padding="lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-gold mb-4">Ready to Begin?</h2>
          <p className="text-white/90 mb-8">
            Schedule a consultation to discuss which services might be right for
            you. Our team is here to help you take the first step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="https://www.zocdoc.com" external size="lg">
              Schedule a Consultation
            </Button>
            <Button href="/team" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-forest">
              Meet Our Clinicians
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

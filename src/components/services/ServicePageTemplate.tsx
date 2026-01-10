import { Section, SectionHeading, Button } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";
import { Service, services } from "@/lib/services-data";

interface ServicePageTemplateProps {
  service: Service;
}

export default function ServicePageTemplate({
  service,
}: ServicePageTemplateProps) {
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <Link
            href="/services"
            className="inline-flex items-center text-gold hover:text-gold-dark mb-4 text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <h1 className="text-forest mb-6">{service.h1}</h1>
          <p className="text-warmgray text-lg leading-relaxed">
            {service.description}
          </p>
        </div>
      </Section>

      {/* Featured Image */}
      <div className="relative h-64 md:h-96 -mt-8">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      {/* Focus Areas Section */}
      <Section background="white" padding="lg">
        <SectionHeading
          title="Areas of Focus"
          subtitle="Our clinicians provide specialized support in the following areas:"
        />

        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {service.focusAreas.map((area) => (
              <div
                key={area}
                className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg"
              >
                <svg
                  className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-warmgray">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* What to Expect Section */}
      <Section background="muted" padding="lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-forest text-center mb-8">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-forest mb-2">
                Initial Consultation
              </h3>
              <p className="text-warmgray text-sm">
                We&apos;ll discuss your concerns, goals, and what you hope to
                achieve through therapy.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-forest mb-2">
                Personalized Plan
              </h3>
              <p className="text-warmgray text-sm">
                Together, we&apos;ll develop a treatment approach tailored to
                your unique needs.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-forest mb-2">
                Ongoing Support
              </h3>
              <p className="text-warmgray text-sm">
                Regular sessions and continuous care to help you achieve lasting
                change.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="forest" padding="lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-gold mb-4">{service.cta}</h2>
          <p className="text-white/90 mb-8">
            Our team is ready to support you on your journey. Schedule an
            appointment to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="https://www.zocdoc.com" external size="lg">
              Schedule an Appointment
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>

      {/* Other Services Section */}
      <Section background="white" padding="md">
        <SectionHeading
          title="Explore Other Services"
          subtitle="We offer comprehensive mental health care across many areas."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {otherServices.slice(0, 6).map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
            >
              <svg
                className="w-5 h-5 text-gold flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="text-forest font-medium">{s.title}</span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

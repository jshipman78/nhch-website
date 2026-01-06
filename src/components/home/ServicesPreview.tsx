import { Section, SectionHeading, Button } from "@/components/ui";
import Link from "next/link";

const services = [
  {
    title: "Individual Therapy",
    description:
      "One-on-one sessions tailored to your unique needs, helping you navigate life's challenges with professional support.",
    href: "/services/individual-therapy",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Couples Therapy",
    description:
      "Strengthen your relationship through improved communication, conflict resolution, and deeper connection.",
    href: "/services/couples-therapy",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Family Therapy",
    description:
      "Address family dynamics and improve relationships between parents, children, and extended family members.",
    href: "/services/family-therapy",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Child & Adolescent",
    description:
      "Specialized care for young people facing emotional, behavioral, or developmental challenges.",
    href: "/services/child-adolescent-therapy",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Trauma & PTSD",
    description:
      "Evidence-based treatment for trauma, helping you process difficult experiences and reclaim your life.",
    href: "/services/trauma-ptsd",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Neurodiversity",
    description:
      "Supportive care for individuals with ADHD, autism spectrum, and other neurodevelopmental differences.",
    href: "/services/neurodiversity",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export default function ServicesPreview() {
  return (
    <Section background="white" padding="lg">
      <SectionHeading
        title="Care Built on Experience, Not Trends"
        subtitle="We believe meaningful healing requires stability, expertise, and human connection—not shortcuts, hype, or sensationalized approaches to mental health."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group bg-white rounded-xl p-7 border-2 border-border hover:shadow-xl hover:border-gold transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-white transition-all duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-forest mb-3 group-hover:text-forest-dark transition-colors">
              {service.title}
            </h3>
            <p className="text-warmgray leading-relaxed">
              {service.description}
            </p>
            <div className="mt-4 inline-flex items-center text-gold font-medium text-sm group-hover:text-gold-dark transition-colors">
              Learn more
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button href="/services" variant="secondary" size="lg">
          View All Services
        </Button>
      </div>
    </Section>
  );
}

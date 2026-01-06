import { Section, SectionHeading, Button } from "@/components/ui";
import Link from "next/link";

const services = [
  {
    title: "Individual Therapy",
    description:
      "One-on-one sessions tailored to your unique needs, helping you navigate life's challenges with professional support.",
    href: "/services/individual-therapy",
    color: "forest",
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
    color: "gold",
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
    color: "sky",
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
    color: "forest",
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
    color: "gold",
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
    color: "sky",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const colorMap: Record<string, { bg: string; icon: string; hover: string; border: string }> = {
  forest: {
    bg: "bg-forest/5",
    icon: "text-forest",
    hover: "group-hover:bg-forest group-hover:text-white",
    border: "border-forest/10 group-hover:border-forest/30",
  },
  gold: {
    bg: "bg-gold/5",
    icon: "text-gold-dark",
    hover: "group-hover:bg-gold group-hover:text-forest",
    border: "border-gold/10 group-hover:border-gold/30",
  },
  sky: {
    bg: "bg-sky/5",
    icon: "text-sky",
    hover: "group-hover:bg-sky group-hover:text-white",
    border: "border-sky/10 group-hover:border-sky/30",
  },
};

export default function ServicesPreview() {
  return (
    <Section background="white" padding="lg" className="relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-forest rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold rounded-full blur-[120px]" />
      </div>

      <div className="relative">
        <SectionHeading
          title="Care Built on Experience, Not Trends"
          subtitle="We believe meaningful healing requires stability, expertise, and human connection—not shortcuts, hype, or sensationalized approaches to mental health."
        />

        {/* Asymmetric grid layout for visual interest */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const colors = colorMap[service.color];
            return (
              <Link
                key={service.href}
                href={service.href}
                className={`group relative bg-white rounded-2xl p-8 border-2 ${colors.border} elevated-card
                  ${index === 0 ? 'lg:col-span-1 lg:row-span-1' : ''}
                  ${index === 2 ? 'lg:col-span-1' : ''}
                `}
              >
                {/* Organic accent shape in corner */}
                <div className={`absolute -top-2 -right-2 w-24 h-24 ${colors.bg} opacity-30 blur-2xl rounded-full transition-all duration-500 group-hover:opacity-50 group-hover:w-32 group-hover:h-32`} />

                <div className="relative">
                  {/* Icon with sophisticated treatment */}
                  <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center ${colors.icon} mb-6 ${colors.hover} transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3`}>
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-forest mb-3 group-hover:text-forest-dark transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-warmgray leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Flowing accent line */}
                  <div className="h-0.5 w-0 group-hover:w-16 bg-gradient-to-r from-gold to-transparent transition-all duration-500 mb-4" />

                  <div className="inline-flex items-center text-forest font-medium text-sm group-hover:text-gold-dark transition-colors">
                    Learn more
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Enhanced CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-warmgray text-lg max-w-2xl">
              These are just some of the specialized services we offer.
              Explore our full range of care options.
            </p>
            <Button href="/services" variant="secondary" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

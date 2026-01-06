import { Section, SectionHeading } from "@/components/ui";
import Image from "next/image";

const insuranceLogos = [
  { name: "Aetna", file: "aetna.png" },
  { name: "Ambetter", file: "ambetter.png" },
  { name: "Blue Cross Blue Shield", file: "bluecross-blueshield.png" },
  { name: "Cigna", file: "cigna.png" },
  { name: "Healthcare Highways", file: "healthcare-highways.webp" },
  { name: "UnitedHealthcare", file: "unitedhealthcare.jpg" },
];

export default function InsuranceSection() {
  return (
    <Section background="muted" padding="lg" className="relative overflow-hidden">
      {/* Subtle organic background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-forest/[0.02] rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/[0.02] rounded-full blur-[100px]" />

      <div className="relative">
        <SectionHeading
          title="Making Care Accessible"
          subtitle="We work with most major insurance providers to ensure quality mental health care is within reach."
        />

        {/* Insurance grid with refined styling */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 items-center justify-items-center mb-10">
          {insuranceLogos.map((logo, index) => (
            <div
              key={logo.name}
              className="group relative bg-white rounded-2xl p-5 elevated-card grayscale hover:grayscale-0 w-full max-w-[180px]"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Subtle accent on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-forest/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative h-12 flex items-center justify-center">
                <Image
                  src={`/assets/insurance/${logo.file}`}
                  alt={logo.name}
                  width={140}
                  height={60}
                  className="object-contain max-h-10 w-auto"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA card */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col items-center max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 elevated-card border border-gold/10 w-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-forest font-semibold text-lg mb-2">
                    Don&apos;t See Your Insurance?
                  </h3>
                  <p className="text-warmgray text-base mb-4 leading-relaxed">
                    Insurance coverage varies by provider and clinician. Contact us to verify your
                    specific benefits and explore your options.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center text-forest font-semibold text-sm hover:text-gold-dark transition-colors group"
                  >
                    Verify Your Coverage
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Self-pay option */}
            <div className="mt-6 text-warmgray/80 text-sm">
              <p>
                Self-pay options available. We believe financial constraints shouldn&apos;t prevent access to care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

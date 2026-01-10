import { Section } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

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
    <Section background="white" padding="lg">
      <div className="text-center mb-16">
        <span className="text-eyebrow !text-primary">
          Insurance Accepted
        </span>
        <h2 className="mt-4 mb-5">Making Care Accessible</h2>
        <p className="text-lead text-warmgray max-w-2xl mx-auto">
          We work with most major insurance providers to ensure quality mental health care is within reach.
        </p>
      </div>

      {/* Insurance logos - Premium presentation with enhanced readability */}
      <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-8 mb-16">
        {insuranceLogos.map((logo) => (
          <div
            key={logo.name}
            className="bg-white border-2 border-border-light rounded-2xl px-8 py-5 hover:shadow-xl hover:border-primary/20 transition-all duration-300 min-w-[160px] flex items-center justify-center"
          >
            <Image
              src={`/assets/insurance/${logo.file}`}
              alt={logo.name}
              width={200}
              height={80}
              className="object-contain h-16 w-auto"
              quality={95}
            />
          </div>
        ))}
      </div>

      {/* Verification CTA - Enhanced design */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10 border-t border-border">
        <p className="text-warmgray text-center sm:text-left font-medium">
          Don&apos;t see your insurance? Coverage varies by provider.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors group px-6 py-3 rounded-full border-2 border-primary hover:bg-primary hover:text-white min-h-[48px]"
        >
          Verify Your Coverage
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </Link>
      </div>
    </Section>
  );
}

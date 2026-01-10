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
      <div className="text-center mb-12">
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">
          Insurance Accepted
        </span>
        <h2 className="mt-3 mb-4">Making Care Accessible</h2>
        <p className="text-warmgray max-w-2xl mx-auto">
          We work with most major insurance providers to ensure quality mental health care is within reach.
        </p>
      </div>

      {/* Insurance logos - larger, more readable */}
      <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6 mb-12">
        {insuranceLogos.map((logo) => (
          <div
            key={logo.name}
            className="bg-white border border-border rounded-md px-3 py-2 hover:shadow-md hover:border-primary/30 transition-all duration-300"
          >
            <Image
              src={`/assets/insurance/${logo.file}`}
              alt={logo.name}
              width={180}
              height={72}
              className="object-contain h-14 w-auto"
            />
          </div>
        ))}
      </div>

      {/* Verification CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-border">
        <p className="text-warmgray text-center sm:text-left">
          Don&apos;t see your insurance? Coverage varies by provider.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors group"
        >
          Verify Your Coverage
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </Link>
      </div>
    </Section>
  );
}

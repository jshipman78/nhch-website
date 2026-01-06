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
    <Section background="muted" padding="md">
      <SectionHeading
        title="Insurance Accepted"
        subtitle="We work with most major insurance providers to make mental health care accessible and affordable."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {insuranceLogos.map((logo) => (
          <div
            key={logo.name}
            className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200 grayscale hover:grayscale-0"
          >
            <Image
              src={`/assets/insurance/${logo.file}`}
              alt={logo.name}
              width={120}
              height={60}
              className="object-contain h-10 w-auto"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-8 p-4 bg-white rounded-lg border border-gold/20 max-w-2xl mx-auto">
        <p className="text-warmgray text-sm">
          Don&apos;t see your insurance? <span className="font-semibold text-forest">Contact us</span> to verify your coverage and discuss options.
        </p>
      </div>
    </Section>
  );
}

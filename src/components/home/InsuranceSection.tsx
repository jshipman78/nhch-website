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
    <Section background="white" padding="md">
      <SectionHeading
        title="Insurance Accepted"
        subtitle="We work with most major insurance providers to make mental health care accessible."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {insuranceLogos.map((logo) => (
          <div
            key={logo.name}
            className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-200"
          >
            <Image
              src={`/assets/insurance/${logo.file}`}
              alt={logo.name}
              width={120}
              height={60}
              className="object-contain h-12 w-auto"
            />
          </div>
        ))}
      </div>

      <p className="text-center text-warmgray text-sm mt-8">
        Don&apos;t see your insurance? Contact us to verify your coverage.
      </p>
    </Section>
  );
}

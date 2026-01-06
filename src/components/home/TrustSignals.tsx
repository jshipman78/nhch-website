import { Section } from "@/components/ui";

const stats = [
  {
    number: "15",
    label: "Years Serving North Texas",
    suffix: "+",
  },
  {
    number: "25",
    label: "Licensed Clinicians",
    suffix: "+",
  },
  {
    number: "1000s",
    label: "Lives Transformed",
    suffix: "",
  },
  {
    number: "6",
    label: "Insurance Networks",
    suffix: "",
  },
];

export default function TrustSignals() {
  return (
    <Section background="forest" padding="md">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-gold font-bold text-4xl lg:text-5xl mb-2">
              {stat.number}
              {stat.suffix}
            </p>
            <p className="text-white/90 text-sm lg:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

import { Section } from "@/components/ui";

const stats = [
  {
    number: "15",
    label: "Years Serving North Texas",
    suffix: "+",
    description: "Since 2011",
  },
  {
    number: "25",
    label: "Licensed Clinicians",
    suffix: "+",
    description: "Expert team",
  },
  {
    number: "1000s",
    label: "Lives Transformed",
    suffix: "",
    description: "And counting",
  },
  {
    number: "6",
    label: "Insurance Networks",
    suffix: "",
    description: "Accepted",
  },
];

export default function TrustSignals() {
  return (
    <Section background="forest" padding="lg" className="relative overflow-hidden">
      {/* Organic background accent */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg className="absolute top-0 left-1/4 w-96 h-96" viewBox="0 0 400 400" fill="none">
          <path d="M200 50 Q 300 150, 200 250 T 200 450" stroke="currentColor" strokeWidth="2" className="text-gold"/>
        </svg>
        <svg className="absolute bottom-0 right-1/4 w-96 h-96" viewBox="0 0 400 400" fill="none">
          <path d="M200 50 Q 100 150, 200 250 T 200 450" stroke="currentColor" strokeWidth="2" className="text-sky"/>
        </svg>
      </div>

      <div className="relative">
        {/* Section intro */}
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
            Built on Experience, Trusted by Thousands
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Our numbers tell a story of consistent, quality care over more than a decade
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative accent */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

              <p className="text-gold font-bold text-5xl lg:text-6xl mb-3 tracking-tight">
                {stat.number}
                {stat.suffix}
              </p>
              <p className="text-white font-medium text-base lg:text-lg mb-1">
                {stat.label}
              </p>
              <p className="text-white/60 text-sm">
                {stat.description}
              </p>

              {/* Bottom decorative line */}
              <div className="mt-4 h-0.5 w-12 mx-auto bg-white/20 rounded-full group-hover:bg-gold/40 transition-colors" />
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-16 text-center">
          <p className="text-white/70 text-sm italic max-w-3xl mx-auto">
            Every number represents real people, real healing, and real transformation.
            Your journey could be next.
          </p>
        </div>
      </div>
    </Section>
  );
}

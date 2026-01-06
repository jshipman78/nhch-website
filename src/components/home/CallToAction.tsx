import { Section, Button } from "@/components/ui";
import Image from "next/image";

export default function CallToAction() {
  return (
    <Section background="gradient" padding="lg">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-block mb-4 px-3 py-1 bg-gold/15 rounded-full">
            <p className="text-gold-rich font-medium text-xs uppercase tracking-wider">
              Take the First Step
            </p>
          </div>
          <h2 className="text-forest mb-5">Ready to Begin Your Journey?</h2>
          <p className="text-warmgray text-lg mb-5">
            Taking the first step toward mental wellness is an act of courage.
            Our team is here to provide a safe, supportive environment where you
            can explore your concerns and work toward meaningful change.
          </p>
          <p className="text-warmgray/80 text-base mb-8">
            Schedule an appointment through our secure booking system, or
            contact us to learn more about how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              href="https://www.zocdoc.com"
              external
              size="lg"
            >
              Schedule an Appointment
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-forest/10">
            <Image
              src="/assets/misc/lobby-1.jpg"
              alt="Welcoming lobby at New Horizons Center for Healing"
              width={500}
              height={350}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/10 to-transparent" />
          </div>
        </div>
      </div>
    </Section>
  );
}

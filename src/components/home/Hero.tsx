import Image from "next/image";
import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-sunrise/5 to-sky/10 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <Image
                src="/assets/logos/NHCH_15YR_LOGO.png"
                alt="New Horizons Center for Healing - 15 Years"
                width={280}
                height={140}
                className="mx-auto lg:mx-0"
                priority
              />
            </div>

            <h1 className="text-forest mb-6">
              15 Years of Trusted Mental Health Care
            </h1>

            <p className="text-warmgray text-lg lg:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              New Horizons Center for Healing provides ethical, clinician-led
              mental health services grounded in experience, integrity, and
              clinical depth. For fifteen years, we have served individuals,
              couples, families, and communities with care that is thoughtful,
              evidence-based, and never trend-driven.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="/services" size="lg">
                Explore Our Services
              </Button>
              <Button href="/team" variant="outline" size="lg">
                Meet Our Team
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/misc/building.jpg"
                alt="New Horizons Center for Healing office building"
                width={600}
                height={450}
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-border">
              <p className="text-forest font-semibold text-sm">Serving North Texas</p>
              <p className="text-gold font-bold text-2xl">Since 2011</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-gold/5 to-sky/8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky/15 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-6 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full">
              <p className="text-gold-rich font-semibold text-sm uppercase tracking-wide">
                Celebrating 15 Years of Excellence
              </p>
            </div>

            <h1 className="text-forest mb-6">
              Trusted Mental Health Care Since 2011
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-forest/10">
              <Image
                src="/assets/misc/building.jpg"
                alt="New Horizons Center for Healing office building"
                width={600}
                height={450}
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent" />
            </div>

            {/* Floating badge - enhanced design */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 border-2 border-gold/30">
              <p className="text-forest font-semibold text-sm mb-1">Serving North Texas</p>
              <p className="text-gold font-bold text-3xl">15 Years</p>
              <p className="text-warmgray text-xs mt-1">2011 - 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

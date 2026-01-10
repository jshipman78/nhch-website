import Image from "next/image";
import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/misc/hero-new-horizons.jpg"
          alt="A path leading toward new horizons at sunrise - representing hope and healing"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Sophisticated gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Anniversary badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <p className="text-white/90 font-medium text-sm tracking-wider uppercase">
              15 Years of Trusted Care
            </p>
          </div>

          {/* Headline */}
          <h1 className="!text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
            Your Journey to{" "}
            <span className="text-gold">Healing</span>{" "}
            Starts Here
          </h1>

          {/* Subheadline */}
          <p className="text-white/90 text-xl md:text-2xl leading-relaxed mb-8 max-w-2xl">
            For fifteen years, New Horizons has been a place of hope and renewal—offering
            compassionate, evidence-based mental health care that honors your unique path.
          </p>

          {/* Secondary text */}
          <p className="text-white/70 text-lg mb-10 max-w-xl">
            We believe healing happens through connection, trust, and the courage to take
            the first step. We&apos;re here to walk alongside you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button href="https://www.zocdoc.com" external size="lg" className="!bg-gold !text-primary-dark hover:!bg-gold-light !border-gold">
              Schedule Your First Session
            </Button>
            <Button href="/services" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white hover:!text-primary-dark">
              Explore Our Services
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-white/20">
            <div>
              <p className="text-gold font-bold text-4xl mb-1">25+</p>
              <p className="text-white/70 text-sm">Licensed Clinicians</p>
            </div>
            <div>
              <p className="text-gold font-bold text-4xl mb-1">6</p>
              <p className="text-white/70 text-sm">Insurance Networks</p>
            </div>
            <div>
              <p className="text-gold font-bold text-4xl mb-1">1000s</p>
              <p className="text-white/70 text-sm">Lives Transformed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

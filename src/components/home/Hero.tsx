"use client";

import Image from "next/image";
import { Button } from "@/components/ui";
import { BookingButton } from "@/components/booking";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/misc/hero-new-horizons.jpg"
          alt="A path leading toward new horizons at sunrise - representing hope and healing"
          fill
          className="object-cover object-center"
          priority
          quality={92}
        />
        {/* Premium gradient overlay for optimal text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/25" />
      </div>

      {/* Content - Enhanced spacing and typography */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Anniversary badge - Refined design */}
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/25 rounded-full shadow-lg">
            <div className="w-2 h-2 bg-gold-light rounded-full animate-pulse shadow-gold" />
            <p className="text-white/95 font-semibold text-sm tracking-widest uppercase">
              15 Years of Trusted Care
            </p>
          </div>

          {/* Headline - Premium typography */}
          <h1 className="!text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-[1.1] tracking-tight">
            Your Journey to{" "}
            <span className="text-gold-light">Healing</span>{" "}
            Starts Here
          </h1>

          {/* Subheadline - Enhanced readability */}
          <p className="text-white/95 text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 max-w-2xl font-light">
            For fifteen years, New Horizons has been a place of hope and renewal—offering
            compassionate, evidence-based mental health care that honors your unique path.
          </p>

          {/* Secondary text - Better contrast */}
          <p className="text-white/80 text-base sm:text-lg mb-10 max-w-xl leading-relaxed">
            We believe healing happens through connection, trust, and the courage to take
            the first step. We&apos;re here to walk alongside you.
          </p>

          {/* CTA Buttons - Enhanced mobile responsiveness */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-16">
            <BookingButton variant="gold" size="lg">
              Schedule Your First Session
            </BookingButton>
            <Button href="/services" variant="outline" size="lg" className="!border-2 !border-white !text-white hover:!bg-white hover:!text-forest-dark !font-semibold">
              Explore Our Services
            </Button>
          </div>

          {/* Trust indicators - Premium styling with better mobile layout */}
          <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-12 pt-8 border-t border-white/25">
            <div className="min-w-[100px]">
              <p className="text-gold-light font-bold text-3xl sm:text-4xl mb-2 font-serif">25+</p>
              <p className="text-white/80 text-xs sm:text-sm font-medium tracking-wide">Licensed Clinicians</p>
            </div>
            <div className="min-w-[100px]">
              <p className="text-gold-light font-bold text-3xl sm:text-4xl mb-2 font-serif">6</p>
              <p className="text-white/80 text-xs sm:text-sm font-medium tracking-wide">Insurance Networks</p>
            </div>
            <div className="min-w-[100px]">
              <p className="text-gold-light font-bold text-3xl sm:text-4xl mb-2 font-serif">1000s</p>
              <p className="text-white/80 text-xs sm:text-sm font-medium tracking-wide">Lives Transformed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Refined design */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/70">
        <span className="text-xs uppercase tracking-widest font-medium">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

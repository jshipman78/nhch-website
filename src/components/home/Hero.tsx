import Image from "next/image";
import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative bg-warm-cream warm-texture overflow-hidden min-h-[85vh] flex items-center">
      {/* Organic background shapes - distinctive and flowing */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large organic shape top-right */}
        <div className="accent-shape-1 -top-32 -right-32" />
        {/* Flowing shape bottom-left */}
        <div className="accent-shape-2 -bottom-48 -left-48" />

        {/* Growth arc - signature element representing healing journey */}
        <div className="growth-arc top-0 right-0 w-[600px] h-[600px]">
          <div className="absolute inset-0 bg-gradient-to-br from-forest/5 via-sky/5 to-gold/5"
               style={{ clipPath: 'path("M 0 0 Q 300 150 600 0 L 600 600 L 0 600 Z")' }} />
        </div>

        {/* Subtle curved accent line */}
        <svg className="absolute top-20 left-0 w-full h-96 opacity-[0.03]" viewBox="0 0 1200 400" fill="none" preserveAspectRatio="none">
          <path d="M-100 200 Q 300 50, 600 200 T 1300 200" stroke="currentColor" strokeWidth="3" className="text-forest"/>
          <path d="M-100 250 Q 350 100, 650 250 T 1300 250" stroke="currentColor" strokeWidth="2" className="text-gold"/>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content - Asymmetric layout for visual interest */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Anniversary badge with refined design */}
            <div className="inline-flex items-center gap-3 mb-8 px-5 py-3 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border-l-4 border-gold rounded-r-full backdrop-blur-sm">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <p className="text-forest font-semibold text-sm tracking-wider">
                15 YEARS OF TRUSTED CARE
              </p>
            </div>

            {/* Dramatic headline with better hierarchy */}
            <h1 className="text-forest mb-6 max-w-xl mx-auto lg:mx-0">
              Your Journey to Healing{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Starts Here</span>
                {/* Organic underline accent */}
                <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                  <path d="M0 8 Q 75 2, 150 8 T 300 8" stroke="currentColor" strokeWidth="3" className="text-gold opacity-40" fill="none"/>
                </svg>
              </span>
            </h1>

            <div className="flowing-accent max-w-2xl mx-auto lg:mx-0 mb-10">
              <p className="text-warmgray text-lg lg:text-xl leading-relaxed mb-6">
                For fifteen years, New Horizons has been a constant presence in North Texas—offering
                ethical, clinician-led mental health care grounded in experience, integrity, and genuine human connection.
              </p>
              <p className="text-warmgray/90 text-base lg:text-lg leading-relaxed">
                We believe healing isn&apos;t about quick fixes or trending approaches.
                It&apos;s about thoughtful, evidence-based care that honors your unique journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="/services" size="lg">
                Explore Our Services
              </Button>
              <Button href="/team" variant="outline" size="lg">
                Meet Our Team
              </Button>
            </div>

            {/* Trust indicators with refined spacing */}
            <div className="mt-12 pt-8 border-t border-forest/10 flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="text-center lg:text-left">
                <p className="text-forest font-bold text-3xl mb-1">25+</p>
                <p className="text-warmgray text-sm">Licensed Clinicians</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-forest font-bold text-3xl mb-1">6</p>
                <p className="text-warmgray text-sm">Insurance Networks</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-forest font-bold text-3xl mb-1">1000s</p>
                <p className="text-warmgray text-sm">Lives Transformed</p>
              </div>
            </div>
          </div>

          {/* Image - Asymmetric placement with organic framing */}
          <div className="relative lg:col-span-5 hidden lg:block">
            {/* Organic frame shape behind image */}
            <div className="absolute -inset-6 bg-gradient-to-br from-forest/5 to-sky/10 rounded-[40% 60% 45% 55% / 55% 45% 60% 40%] transform rotate-3" />

            <div className="relative rounded-[32px] overflow-hidden elevated-card">
              <Image
                src="/assets/misc/building.jpg"
                alt="New Horizons Center for Healing - A welcoming space for your healing journey"
                width={600}
                height={700}
                className="object-cover w-full h-[600px]"
                priority
              />
              {/* Sophisticated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-forest/5 to-transparent" />

              {/* Organic accent shape overlay */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/20 rounded-[45% 55% 60% 40%] blur-2xl" />
            </div>

            {/* Floating anniversary badge - more sophisticated */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl elevated-card p-6 max-w-[200px]">
              <div className="flex items-baseline gap-2 mb-2">
                <p className="text-forest font-bold text-5xl leading-none">15</p>
                <p className="text-gold font-semibold text-xl">Years</p>
              </div>
              <div className="h-1 w-16 bg-gradient-to-r from-gold to-gold/20 rounded-full mb-2" />
              <p className="text-warmgray text-sm font-medium">Serving North Texas</p>
              <p className="text-warmgray/60 text-xs mt-1">2011 - 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Curved section divider for smooth transition */}
      <div className="curved-divider">
        <svg viewBox="0 0 1200 80" fill="none" preserveAspectRatio="none">
          <path d="M0 80 L0 40 Q 300 0, 600 40 T 1200 40 L1200 80 Z" fill="currentColor" className="text-forest"/>
        </svg>
      </div>
    </section>
  );
}

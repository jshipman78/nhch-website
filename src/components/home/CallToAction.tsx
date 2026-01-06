import { Section, Button } from "@/components/ui";
import Image from "next/image";

export default function CallToAction() {
  return (
    <Section background="gradient" padding="lg" className="relative overflow-hidden">
      {/* Organic flowing shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <svg className="absolute -top-20 -left-20 w-[600px] h-[600px]" viewBox="0 0 600 600" fill="none">
          <path d="M300 0 Q 450 150, 300 300 T 300 600" stroke="currentColor" strokeWidth="3" className="text-forest"/>
        </svg>
        <svg className="absolute -bottom-20 -right-20 w-[600px] h-[600px]" viewBox="0 0 600 600" fill="none">
          <path d="M0 300 Q 150 150, 300 300 T 600 300" stroke="currentColor" strokeWidth="3" className="text-gold"/>
        </svg>
      </div>

      <div className="relative grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Content - takes more space for emphasis */}
        <div className="lg:col-span-7">
          {/* Refined badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-gold/15 via-gold/10 to-transparent border-l-4 border-gold rounded-r-full">
            <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <p className="text-forest font-semibold text-sm tracking-wider">
              TAKE THE FIRST STEP
            </p>
          </div>

          <h2 className="text-forest mb-6 max-w-xl">
            Ready to Begin Your{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Healing Journey?</span>
              <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                <path d="M0 6 Q 75 0, 150 6 T 300 6" stroke="currentColor" strokeWidth="4" className="text-sky opacity-20" fill="none"/>
              </svg>
            </span>
          </h2>

          <div className="flowing-accent space-y-5 mb-8 max-w-2xl">
            <p className="text-warmgray text-lg leading-relaxed">
              Taking the first step toward mental wellness is an act of courage.
              Our team is here to provide a safe, supportive environment where you
              can explore your concerns and work toward meaningful change.
            </p>
            <p className="text-warmgray/90 text-base leading-relaxed">
              Schedule an appointment through our secure booking system, or
              contact us to learn more about how we can help. We&apos;re here when you&apos;re ready.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
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

          {/* Trust reassurance */}
          <div className="flex flex-wrap gap-6 pt-6 border-t border-forest/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div>
                <p className="text-forest font-semibold text-sm">Confidential Care</p>
                <p className="text-warmgray text-xs">HIPAA compliant</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <p className="text-forest font-semibold text-sm">Flexible Scheduling</p>
                <p className="text-warmgray text-xs">Evening hours available</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div>
                <p className="text-forest font-semibold text-sm">Expert Team</p>
                <p className="text-warmgray text-xs">25+ licensed clinicians</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image with organic framing */}
        <div className="relative lg:col-span-5 hidden lg:block">
          {/* Organic background shape */}
          <div className="absolute -inset-8 bg-gradient-to-br from-sky/10 via-transparent to-gold/10 rounded-[45% 55% 50% 50% / 50% 60% 40% 50%] transform -rotate-6" />

          <div className="relative rounded-3xl overflow-hidden elevated-card">
            <Image
              src="/assets/misc/lobby-1.jpg"
              alt="Welcoming lobby at New Horizons Center for Healing"
              width={600}
              height={500}
              className="object-cover w-full h-[500px]"
            />
            {/* Sophisticated overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-forest/20 via-transparent to-gold/10" />

            {/* Floating quote card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 elevated-card">
              <p className="text-forest text-sm italic mb-2">
                &ldquo;A warm, welcoming environment where healing truly begins.&rdquo;
              </p>
              <p className="text-warmgray text-xs font-medium">— New Horizons Client</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

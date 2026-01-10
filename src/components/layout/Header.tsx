"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BookingModal } from "@/components/booking";

const services = [
  { name: "Individual Therapy", href: "/services/individual-therapy" },
  { name: "Couples Therapy", href: "/services/couples-therapy" },
  { name: "Family Therapy", href: "/services/family-therapy" },
  { name: "Child & Adolescent", href: "/services/child-adolescent-therapy" },
  { name: "Trauma & PTSD", href: "/services/trauma-ptsd" },
  { name: "Neurodiversity", href: "/services/neurodiversity" },
  { name: "Sex Therapy", href: "/services/sex-therapy" },
];

const navigation = [
  { name: "About", href: "/about" },
  { name: "Leadership", href: "/leadership" },
  { name: "Our Team", href: "/team" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Media", href: "/media" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-border-light">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo - Enhanced for readability */}
          <Link href="/" className="flex items-center transition-all duration-300 hover:opacity-90">
            <Image
              src="/assets/logos/NHCH_15YR_LOGO.png"
              alt="New Horizons Center for Healing"
              width={280}
              height={112}
              className="h-20 w-auto"
              priority
              quality={95}
            />
          </Link>

          {/* Desktop Navigation - Refined typography and spacing */}
          <div className="hidden lg:flex lg:items-center lg:gap-2">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-warmgray hover:text-forest-dark transition-colors tracking-wide"
                    >
                      {item.name}
                      <svg
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>

                    {/* Services Dropdown - Enhanced design */}
                    {servicesOpen && (
                      <div className="absolute left-0 top-full pt-3">
                        <div className="w-60 rounded-2xl bg-white shadow-xl border border-border-light py-2 overflow-hidden">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-5 py-3 text-sm font-medium text-warmgray hover:bg-primary-lighter hover:text-primary transition-all duration-200"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2.5 text-sm font-medium text-warmgray hover:text-forest-dark transition-colors tracking-wide"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* CTA Button - Premium styling */}
            <button
              onClick={() => setBookingModalOpen(true)}
              className="ml-6 inline-flex items-center px-7 py-3 text-sm font-semibold rounded-full text-white bg-primary hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg tracking-wide"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile menu button - Enhanced touch target */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-3 rounded-xl text-warmgray hover:text-forest-dark hover:bg-muted transition-colors min-w-[44px] min-h-[44px]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation - Polished design */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg border-t border-border-light">
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="w-full flex items-center justify-between px-5 py-3.5 text-base font-medium text-warmgray hover:text-forest-dark hover:bg-primary-lighter rounded-xl transition-all min-h-[48px]"
                      >
                        {item.name}
                        <svg
                          className={`h-5 w-5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {servicesOpen && (
                        <div className="ml-4 space-y-1 mt-1">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-5 py-3 text-sm font-medium text-warmgray-light hover:text-primary hover:bg-primary-lighter rounded-xl transition-all min-h-[44px]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-5 py-3.5 text-base font-medium text-warmgray hover:text-forest-dark hover:bg-primary-lighter rounded-xl transition-all min-h-[48px]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA - Premium styling */}
              <div className="pt-4 px-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setBookingModalOpen(true);
                  }}
                  className="block w-full text-center px-6 py-4 text-base font-semibold text-white bg-primary hover:bg-primary-dark rounded-full transition-all duration-300 shadow-lg min-h-[52px]"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </header>
  );
}

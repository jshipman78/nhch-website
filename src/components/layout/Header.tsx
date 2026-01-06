"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/logos/NHCH_15YR_LOGO.png"
              alt="New Horizons Center for Healing"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
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
                      className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-warmgray hover:text-forest transition-colors"
                    >
                      {item.name}
                      <svg
                        className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>

                    {/* Services Dropdown */}
                    {servicesOpen && (
                      <div className="absolute left-0 top-full pt-2">
                        <div className="w-56 rounded-lg bg-white shadow-lg ring-1 ring-black/5 py-2">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-2 text-sm text-warmgray hover:bg-muted hover:text-forest transition-colors"
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
                    className="px-4 py-2 text-sm font-medium text-warmgray hover:text-forest transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              href="#book"
              className="ml-4 inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-gold hover:bg-gold-dark rounded-lg transition-colors shadow-sm"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-warmgray hover:text-forest hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-warmgray hover:text-forest hover:bg-muted rounded-lg transition-colors"
                      >
                        {item.name}
                        <svg
                          className={`h-5 w-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {servicesOpen && (
                        <div className="ml-4 space-y-1">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-2 text-sm text-warmgray hover:text-forest hover:bg-muted rounded-lg transition-colors"
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
                      className="block px-4 py-3 text-base font-medium text-warmgray hover:text-forest hover:bg-muted rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 px-4">
                <Link
                  href="#book"
                  className="block w-full text-center px-5 py-3 text-base font-semibold text-white bg-gold hover:bg-gold-dark rounded-lg transition-colors shadow-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

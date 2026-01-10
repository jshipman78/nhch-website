"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check if we're on the homepage (which has a dark hero)
  const isHomepage = pathname === "/";

  // On non-homepage routes, always use the scrolled appearance
  const shouldUseDarkText = !isHomepage || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      shouldUseDarkText
        ? "bg-white/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-transform hover:scale-105">
            <div className={`transition-all duration-300 ${
              shouldUseDarkText
                ? ""
                : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            }`}>
              <Image
                src="/assets/logos/NHCH_15YR_LOGO.png"
                alt="New Horizons Center for Healing"
                width={200}
                height={80}
                className="h-12 w-auto"
                priority
              />
            </div>
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
                      className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                        shouldUseDarkText
                          ? "text-warmgray hover:text-primary"
                          : "text-white/90 hover:text-white"
                      }`}
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
                        <div className="w-56 rounded-xl bg-white shadow-xl ring-1 ring-black/5 py-2">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-2.5 text-sm text-warmgray hover:bg-primary-lighter hover:text-primary transition-colors"
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
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      shouldUseDarkText
                        ? "text-warmgray hover:text-primary"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              href="https://www.zocdoc.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-4 inline-flex items-center px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 ${
                shouldUseDarkText
                  ? "text-white bg-primary hover:bg-primary-dark"
                  : "text-primary-dark bg-gold hover:bg-gold-light"
              }`}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`lg:hidden inline-flex items-center justify-center p-2 rounded-md transition-colors ${
              shouldUseDarkText
                ? "text-warmgray hover:text-primary hover:bg-muted"
                : "text-white hover:text-white/80"
            }`}
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
          <div className="lg:hidden py-4 bg-white rounded-b-2xl shadow-lg">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-warmgray hover:text-primary hover:bg-primary-lighter rounded-lg transition-colors"
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
                              className="block px-4 py-2 text-sm text-warmgray hover:text-primary hover:bg-primary-lighter rounded-lg transition-colors"
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
                      className="block px-4 py-3 text-base font-medium text-warmgray hover:text-primary hover:bg-primary-lighter rounded-lg transition-colors"
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
                  href="https://www.zocdoc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-5 py-3 text-base font-semibold text-white bg-primary hover:bg-primary-dark rounded-full transition-all duration-300 shadow-md"
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

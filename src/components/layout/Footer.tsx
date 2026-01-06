import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Individual Therapy", href: "/services/individual-therapy" },
  { name: "Couples Therapy", href: "/services/couples-therapy" },
  { name: "Family Therapy", href: "/services/family-therapy" },
  { name: "Child & Adolescent", href: "/services/child-adolescent-therapy" },
];

const insuranceLogos = [
  { name: "Aetna", file: "aetna.png" },
  { name: "Ambetter", file: "ambetter.png" },
  { name: "BlueCross BlueShield", file: "bluecross-blueshield.png" },
  { name: "Cigna", file: "cigna.png" },
  { name: "Healthcare Highways", file: "healthcare-highways.webp" },
  { name: "UnitedHealthcare", file: "unitedhealthcare.jpg" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/newhorizonscenterforhealing",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/dallascounselor",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/user/mydallascounselor",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-white relative overflow-hidden">
      {/* Organic background accents */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky rounded-full blur-[120px]" />
      </div>

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <Image
              src="/assets/logos/NHCH_15YR_LOGO.png"
              alt="New Horizons Center for Healing"
              width={220}
              height={110}
              className="h-18 w-auto brightness-0 invert mb-4"
            />
            <p className="text-white/90 text-sm leading-relaxed">
              15 years of trusted, ethical mental health care for individuals, couples, and families.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-gold transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-gold hover:text-gold-light transition-colors text-sm font-medium"
                >
                  View All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Contact Us
            </h3>
            <address className="not-italic text-sm text-white/80 space-y-3">
              <p>
                4817 Medical Center Dr. Unit 3A
                <br />
                McKinney, TX 75069
              </p>
              <p>
                <a href="tel:+19726079650" className="hover:text-white transition-colors">
                  Phone: (972) 607-9650
                </a>
              </p>
              <p>
                <a href="sms:+14696348518" className="hover:text-white transition-colors">
                  Text: (469) 634-8518
                </a>
              </p>
              <p>Fax: (469) 519-0423</p>
            </address>
            <div className="mt-4">
              <p className="text-sm text-white/80">
                <span className="font-medium">Hours:</span> Mon-Thu 9am-8pm, Fri 9am-6pm
              </p>
            </div>
          </div>
        </div>

        {/* Insurance Section - Enhanced */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-sm text-white/70 mb-8">
            Many of our providers are credentialed or in-network with the following insurance networks:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8">
            {insuranceLogos.map((insurance) => (
              <div
                key={insurance.name}
                className="bg-white/95 rounded-xl p-3.5 h-14 flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-105 shadow-sm"
              >
                <Image
                  src={`/assets/insurance/${insurance.file}`}
                  alt={insurance.name}
                  width={110}
                  height={45}
                  className="h-7 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-forest-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} New Horizons Center for Healing. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

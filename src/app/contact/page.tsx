import { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading, Button } from "@/components/ui";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | NHCH McKinney",
  description:
    "Contact New Horizons Center for Healing in McKinney, TX. Schedule an appointment or reach out with questions. Phone, text, or visit us.",
};

const hours = [
  { day: "Monday", hours: "9:00 AM – 8:00 PM" },
  { day: "Tuesday", hours: "9:00 AM – 8:00 PM" },
  { day: "Wednesday", hours: "9:00 AM – 8:00 PM" },
  { day: "Thursday", hours: "9:00 AM – 8:00 PM" },
  { day: "Friday", hours: "9:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" },
];

const holidays = [
  "New Year's Eve (closes at 5:00 PM)",
  "New Year's Day",
  "Memorial Day",
  "Independence Day (July 4th)",
  "Labor Day",
  "Thanksgiving Day",
  "Day after Thanksgiving",
  "Christmas Eve",
  "Christmas Day",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-primary-dark mb-6">Contact Us</h1>
          <p className="text-warmgray text-lg leading-relaxed">
            We&apos;re here to help. Reach out to schedule an appointment or ask
            any questions about our services.
          </p>
        </div>
      </Section>

      {/* Contact Info and Form */}
      <Section background="white" padding="lg">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-primary-dark mb-6">Get in Touch</h2>

            {/* Location */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-primary-dark mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Location
              </h3>
              <address className="not-italic text-warmgray leading-relaxed">
                New Horizons Center for Healing
                <br />
                4817 Medical Center Dr. Unit 3A
                <br />
                McKinney, TX 75069
              </address>
              <p className="text-warmgray text-sm mt-2">
                Conveniently located in North Dallas (Exit 38B), one exit north
                of The Allen Outlet Malls, right across from the Medical Center
                of McKinney.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-primary-dark mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact
              </h3>
              <ul className="space-y-2 text-warmgray">
                <li>
                  <span className="font-medium">Phone:</span>{" "}
                  <a
                    href="tel:+19726079650"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    (972) 607-9650
                  </a>
                </li>
                <li>
                  <span className="font-medium">Text:</span>{" "}
                  <a
                    href="sms:+14696348518"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    (469) 634-8518
                  </a>
                </li>
                <li>
                  <span className="font-medium">Fax:</span> (469) 519-0423
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-primary-dark mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Office Hours
              </h3>
              <ul className="space-y-1">
                {hours.map((item) => (
                  <li key={item.day} className="flex justify-between text-sm">
                    <span className="text-warmgray">{item.day}</span>
                    <span
                      className={
                        item.hours === "Closed"
                          ? "text-warmgray/60"
                          : "text-primary-dark font-medium"
                      }
                    >
                      {item.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Building Photo */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/assets/misc/buildingSign.jpg"
                alt="New Horizons Center for Healing exterior sign"
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Appointment Request */}
          <div>
            <div className="bg-muted rounded-xl p-6 lg:p-8 mb-8">
              <h2 className="text-primary-dark mb-4">Schedule an Appointment</h2>
              <p className="text-warmgray mb-6">
                Ready to take the first step? Schedule your appointment through
                our secure online booking system.
              </p>
              <Button
                href="https://www.zocdoc.com"
                external
                size="lg"
                className="w-full"
              >
                Book via ZocDoc
              </Button>
              <p className="text-warmgray text-xs mt-4 text-center">
                ZocDoc provides secure, HIPAA-compliant appointment scheduling.
              </p>
            </div>

            {/* Callback Request Form */}
            <div className="bg-white rounded-xl border border-border p-6 lg:p-8">
              <h3 className="font-semibold mb-4">
                Request a Callback
              </h3>
              <p className="text-warmgray text-sm mb-6">
                Prefer to speak with us directly? Leave your information and
                we&apos;ll call you back during business hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="muted" padding="md">
        <SectionHeading title="Find Us" />
        <div className="rounded-xl overflow-hidden shadow-lg h-96 bg-warmgray/20 flex items-center justify-center">
          <div className="text-center p-8">
            <p className="text-warmgray mb-4">
              Interactive map will be displayed here
            </p>
            <a
              href="https://maps.google.com/?q=4817+Medical+Center+Dr+Unit+3A+McKinney+TX+75069"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark font-medium transition-colors"
            >
              Open in Google Maps &rarr;
            </a>
          </div>
        </div>
      </Section>

      {/* Holiday Closures */}
      <Section background="white" padding="md">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-primary-dark font-semibold mb-4 text-center">
            Holiday Closures
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {holidays.map((holiday) => (
              <span
                key={holiday}
                className="bg-muted px-3 py-1 rounded-full text-sm text-warmgray"
              >
                {holiday}
              </span>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

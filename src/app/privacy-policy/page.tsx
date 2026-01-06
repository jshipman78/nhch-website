import { Metadata } from "next";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy | NHCH",
  description:
    "Privacy Policy for New Horizons Center for Healing. Learn how we protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Section background="gradient" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-forest mb-6">Privacy Policy</h1>
          <p className="text-warmgray">Last updated: January 2026</p>
        </div>
      </Section>

      <Section background="white" padding="lg">
        <div className="max-w-3xl mx-auto prose prose-lg prose-forest">
          <h2>Introduction</h2>
          <p>
            New Horizons Center for Healing (&quot;NHCH,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;) is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website or use our
            services.
          </p>

          <h2>Information We Collect</h2>
          <h3>Information You Provide</h3>
          <p>
            We may collect information you provide directly to us, such as:
          </p>
          <ul>
            <li>Name, email address, and phone number</li>
            <li>Appointment scheduling information</li>
            <li>Information submitted through contact forms</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>
            When you visit our website, we may automatically collect certain
            information about your device and usage, including:
          </p>
          <ul>
            <li>Browser type and version</li>
            <li>Pages visited and time spent</li>
            <li>Referring website</li>
            <li>Device type and operating system</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Schedule and manage appointments</li>
            <li>Respond to your inquiries</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>HIPAA Compliance</h2>
          <p>
            As a mental health care provider, NHCH is committed to protecting
            your Protected Health Information (PHI) in accordance with the
            Health Insurance Portability and Accountability Act (HIPAA). Our
            Notice of Privacy Practices, which details how we use and disclose
            PHI for treatment, payment, and health care operations, is provided
            separately to patients.
          </p>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to outside parties except as described in this policy or
            with your consent. We may share information with:
          </p>
          <ul>
            <li>Service providers who assist with our operations</li>
            <li>
              Professional advisors (lawyers, accountants) as needed
            </li>
            <li>Government authorities when required by law</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction. However, no method of
            transmission over the Internet is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding
            your personal information, including the right to:
          </p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of certain uses of your information</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            Our website may use cookies and similar tracking technologies to
            enhance your browsing experience. You can configure your browser to
            refuse cookies, though some features may not function properly
            without them.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices of these external sites. We
            encourage you to review their privacy policies.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our website is not intended for children under 13 years of age. We
            do not knowingly collect personal information from children under
            13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &quot;Last updated&quot; date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us:
          </p>
          <address className="not-italic">
            New Horizons Center for Healing
            <br />
            4817 Medical Center Dr. Unit 3A
            <br />
            McKinney, TX 75069
            <br />
            Phone: (972) 607-9650
          </address>
        </div>
      </Section>
    </>
  );
}

import { Metadata } from "next";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Service | NHCH",
  description:
    "Terms of Service for New Horizons Center for Healing website and services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Section background="gradient" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-forest mb-6">Terms of Service</h1>
          <p className="text-warmgray">Last updated: January 2026</p>
        </div>
      </Section>

      <Section background="white" padding="lg">
        <div className="max-w-3xl mx-auto prose prose-lg prose-forest">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using the New Horizons Center for Healing
            (&quot;NHCH&quot;) website, you agree to be bound by these Terms of
            Service. If you disagree with any part of these terms, you may not
            access our website.
          </p>

          <h2>Services Description</h2>
          <p>
            NHCH provides mental health services including individual therapy,
            couples therapy, family therapy, child and adolescent therapy,
            psychiatric services, and related mental health care. Our website
            provides information about our services and facilitates appointment
            scheduling.
          </p>

          <h2>Not Emergency Services</h2>
          <p className="font-semibold text-forest">
            Our website and online services are NOT intended for emergency
            situations.
          </p>
          <p>
            If you are experiencing a mental health emergency, please call 911,
            go to your nearest emergency room, or call the National Suicide
            Prevention Lifeline at 988.
          </p>

          <h2>Website Use</h2>
          <p>You agree to use our website only for lawful purposes and in a way that does not:</p>
          <ul>
            <li>Infringe on the rights of others</li>
            <li>Restrict or inhibit others&apos; use of the website</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Transmit harmful or malicious code</li>
            <li>
              Attempt to gain unauthorized access to our systems
            </li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos,
            images, and software, is the property of NHCH or its content
            suppliers and is protected by copyright and other intellectual
            property laws. You may not reproduce, distribute, or create
            derivative works without our express written permission.
          </p>

          <h2>Information Accuracy</h2>
          <p>
            While we strive to provide accurate and up-to-date information, we
            make no warranties or representations about the completeness,
            reliability, or accuracy of the information on our website. The
            information provided is for general informational purposes and
            should not be considered medical advice.
          </p>

          <h2>Professional Relationship</h2>
          <p>
            Using our website does not establish a patient-provider
            relationship. A therapeutic relationship is only established when
            you have been formally accepted as a patient and have completed the
            required intake process.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites or services
            that are not owned or controlled by NHCH. We have no control over,
            and assume no responsibility for, the content, privacy policies, or
            practices of any third-party websites.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            Our website is provided &quot;as is&quot; and &quot;as
            available&quot; without any warranties of any kind, either express
            or implied. We do not warrant that the website will be
            uninterrupted, secure, or error-free.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, NHCH shall not be liable for
            any indirect, incidental, special, consequential, or punitive
            damages arising from your use of our website or services.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless NHCH, its officers,
            directors, employees, and agents from any claims, damages, losses,
            or expenses arising from your use of our website or violation of
            these terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in
            accordance with the laws of the State of Texas, without regard to
            its conflict of law provisions.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time.
            We will provide notice of material changes by updating the
            &quot;Last updated&quot; date. Your continued use of the website
            after changes constitutes acceptance of the new terms.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have questions about these Terms of Service, please contact
            us:
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

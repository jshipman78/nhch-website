import { Metadata } from "next";
import { Section, SectionHeading, Button } from "@/components/ui";
import { TeamMemberCard, AdminStaffCard, MemoriamCard } from "@/components/team";
import {
  psychiatrists,
  therapists,
  inactiveStaff,
  memoriam,
  adminStaff,
} from "@/lib/team-data";

export const metadata: Metadata = {
  title: "Meet Our Clinicians | NHCH",
  description:
    "Meet the licensed clinicians at New Horizons Center for Healing—experienced professionals committed to ethical, patient-centered care.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-forest mb-6">Our Team</h1>
          <p className="text-warmgray text-lg leading-relaxed">
            The clinicians at New Horizons Center for Healing are licensed
            professionals committed to ethical practice, continuing education,
            and collaborative care. Each provider brings specialized expertise
            while working within a shared framework of professionalism,
            integrity, and respect.
          </p>
        </div>
      </Section>

      {/* Psychiatrists Section */}
      <Section background="white" padding="lg">
        <SectionHeading
          title="Psychiatrists & Medical Staff"
          subtitle="Our medical team provides psychiatric evaluations, medication management, and comprehensive mental health care."
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {psychiatrists.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </Section>

      {/* Therapists Section */}
      <Section background="muted" padding="lg">
        <SectionHeading
          title="Therapists & Clinical Staff"
          subtitle="Our licensed therapists offer a range of therapeutic approaches to support your mental health journey."
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {therapists.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </Section>

      {/* Not Accepting Patients Section */}
      <Section background="white" padding="md">
        <SectionHeading
          title="Not Currently Accepting New Patients"
          subtitle="These clinicians are part of our team but are not currently accepting new patients."
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {inactiveStaff.map((member) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              variant="inactive"
            />
          ))}
        </div>
      </Section>

      {/* In Memoriam Section */}
      <Section background="forest" padding="lg">
        <div className="max-w-4xl mx-auto">
          <MemoriamCard member={memoriam} />
        </div>
      </Section>

      {/* Administrative Staff Section */}
      <Section background="white" padding="md">
        <SectionHeading
          title="Administrative Staff"
          subtitle="Our administrative team ensures smooth operations and a welcoming experience for all patients."
        />
        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {adminStaff.map((staff) => (
            <AdminStaffCard key={staff.name} {...staff} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="forest" padding="lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-gold mb-4">Ready to Get Started?</h2>
          <p className="text-white/90 mb-6">
            Schedule an appointment with one of our experienced clinicians and
            take the first step toward better mental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="https://www.zocdoc.com" external size="lg">
              Schedule Appointment
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

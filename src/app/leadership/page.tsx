import { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "NHCH Leadership | Clinician-Led Mental Health Care",
  description:
    "Meet the leadership team guiding New Horizons Center for Healing with integrity, clinical excellence, and ethical decision-making.",
};

interface LeaderProps {
  name: string;
  title: string;
  credentials?: string;
  bio: string;
  extendedBio?: string;
  photo?: string;
  initials: string;
}

function LeaderCard({
  name,
  title,
  credentials,
  bio,
  extendedBio,
  photo,
  initials,
}: LeaderProps) {
  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
      <div className="md:flex">
        {/* Photo */}
        <div className="md:w-1/3 lg:w-1/4">
          {photo ? (
            <Image
              src={photo}
              alt={name}
              width={300}
              height={400}
              className="w-full h-64 md:h-full object-cover object-[center_15%]"
            />
          ) : (
            <div className="w-full h-64 md:h-full min-h-[300px] bg-gradient-to-br from-forest to-forest-dark flex items-center justify-center">
              <span className="text-6xl font-bold text-white/80">{initials}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="md:w-2/3 lg:w-3/4 p-6 lg:p-8">
          <h2 className="text-2xl font-bold text-forest mb-1">{name}</h2>
          <p className="text-gold font-semibold mb-1">{title}</p>
          {credentials && (
            <p className="text-warmgray text-sm mb-4">{credentials}</p>
          )}
          <p className="text-warmgray leading-relaxed mb-4">{bio}</p>
          {extendedBio && (
            <p className="text-warmgray text-sm leading-relaxed">{extendedBio}</p>
          )}
        </div>
      </div>
    </div>
  );
}

const leaders: LeaderProps[] = [
  {
    name: "Dr. S. Dean Aslinia",
    title: "Chief Executive Officer",
    initials: "SDA",
    bio: "Dr. S. Dean Aslinia is the Chief Executive Officer of New Horizons Center for Healing. He is a licensed clinician, educator, and mental health leader with extensive experience across clinical practice, graduate education, and organizational leadership.",
    extendedBio:
      "His work emphasizes ethical decision-making, clinician development, and the integration of evidence-based practice with human-centered care. As CEO, Dr. Aslinia is committed to maintaining NHCH as a trusted institution grounded in professionalism, stability, and long-term credibility.",
  },
  {
    name: "Dr. Tannaz Moein",
    title: "Clinic Director",
    credentials: "PsyD, LPC-S",
    photo: "/assets/team-photos/tannaz-moein.jpg",
    initials: "TM",
    bio: "Dr. Tannaz Moein serves as Clinic Director at New Horizons Center for Healing. She brings a strong background in clinical supervision, program development, and compassionate leadership.",
    extendedBio:
      "Dr. Moein is a Doctor of Psychology who received her Bachelor of Arts degree in Psychology from University of Texas at Dallas, her Master's of Science degree in Counseling from Southern Methodist University, and her Doctor of Psychology degree from California Southern University. She works with children, adolescents, adults, couples, families, and the elderly population. Tannaz has gained advanced training in substance dependency and adolescence counseling. As an Adlerian counselor, she believes people are holistic, phenomenological, creative, teleological, and social.",
  },
  {
    name: "Dr. Catherine Hallam",
    title: "Director of Specialized Clinical Programs",
    initials: "CH",
    bio: "Dr. Catherine Hallam provides leadership in specialized clinical programming, with particular expertise in child, family, and neurodevelopmental care.",
    extendedBio:
      "Her role strengthens NHCH's capacity to deliver nuanced, evidence-informed services to diverse populations while supporting clinicians working in complex treatment areas.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-forest mb-6">Leadership</h1>
          <p className="text-warmgray text-lg leading-relaxed">
            The leadership team at New Horizons Center for Healing guides our
            organization with integrity, clinical excellence, and a commitment
            to ethical decision-making.
          </p>
        </div>
      </Section>

      {/* Leaders */}
      <Section background="muted" padding="lg">
        <div className="space-y-8">
          {leaders.map((leader) => (
            <LeaderCard key={leader.name} {...leader} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white" padding="lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-forest mb-4">Meet Our Full Team</h2>
          <p className="text-warmgray mb-6">
            Our leadership is supported by a dedicated team of licensed
            clinicians, each bringing specialized expertise to serve our
            community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/team" size="lg">
              View Our Clinicians
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

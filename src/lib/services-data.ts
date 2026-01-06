export interface Service {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  description: string;
  focusAreas: string[];
  cta: string;
  icon: string;
}

export const services: Service[] = [
  {
    slug: "individual-therapy",
    title: "Individual Therapy",
    metaTitle: "Individual Therapy | NHCH McKinney",
    metaDescription:
      "One-on-one therapy with licensed clinicians at NHCH. Evidence-based treatment for anxiety, depression, life transitions, and more.",
    h1: "Individual Therapy",
    description:
      "Individual therapy at New Horizons Center for Healing provides a confidential space to explore personal challenges, develop coping strategies, and work toward meaningful change. Our licensed clinicians use evidence-based approaches tailored to each client's unique needs.",
    focusAreas: [
      "Anxiety and depression",
      "Life transitions and adjustment",
      "Self-esteem and identity",
      "Grief and loss",
      "Stress management",
      "Relationship patterns",
    ],
    cta: "Schedule Your First Session",
    icon: "user",
  },
  {
    slug: "couples-therapy",
    title: "Couples Therapy",
    metaTitle: "Couples Therapy | NHCH McKinney",
    metaDescription:
      "Strengthen your relationship with couples therapy at NHCH. Communication, conflict resolution, and reconnection with licensed therapists.",
    h1: "Couples Therapy",
    description:
      "Couples therapy at NHCH helps partners improve communication, resolve conflicts, and rebuild connection. Our therapists create a balanced environment where both partners feel heard and supported.",
    focusAreas: [
      "Communication breakdowns",
      "Conflict resolution",
      "Rebuilding trust",
      "Intimacy concerns",
      "Pre-marital preparation",
      "Relationship transitions",
    ],
    cta: "Schedule a Couples Session",
    icon: "heart",
  },
  {
    slug: "family-therapy",
    title: "Family Therapy",
    metaTitle: "Family Therapy | NHCH McKinney",
    metaDescription:
      "Family counseling services at NHCH. Strengthen family dynamics, improve communication, and navigate challenges together.",
    h1: "Family Therapy",
    description:
      "Family therapy addresses the dynamics that affect the entire family system. Our therapists work with families to improve communication, resolve conflicts, and support each member's wellbeing within the context of the family unit.",
    focusAreas: [
      "Parent-child relationships",
      "Blended family dynamics",
      "Communication patterns",
      "Behavioral concerns",
      "Family transitions (divorce, relocation, loss)",
      "Supporting a family member with mental health challenges",
    ],
    cta: "Schedule a Family Session",
    icon: "users",
  },
  {
    slug: "child-adolescent-therapy",
    title: "Child & Adolescent Therapy",
    metaTitle: "Child & Adolescent Therapy | NHCH McKinney",
    metaDescription:
      "Specialized therapy for children and teens at NHCH. Play therapy, adolescent counseling, and psychiatric services available.",
    h1: "Child & Adolescent Therapy",
    description:
      "NHCH provides specialized care for children and adolescents, recognizing that young people have unique developmental needs. Our team includes play therapists, adolescent specialists, and board-certified child psychiatrists.",
    focusAreas: [
      "Play therapy for younger children",
      "Talk therapy for adolescents",
      "Family involvement when appropriate",
      "School-related concerns",
      "Behavioral challenges",
      "Child & adolescent psychiatric services",
    ],
    cta: "Schedule an Appointment",
    icon: "smile",
  },
  {
    slug: "trauma-ptsd",
    title: "Trauma & PTSD Treatment",
    metaTitle: "Trauma & PTSD Treatment | NHCH McKinney",
    metaDescription:
      "Evidence-based trauma therapy at NHCH. EMDR, trauma-focused CBT, and compassionate care for PTSD and trauma survivors.",
    h1: "Trauma & PTSD Treatment",
    description:
      "Trauma can have lasting effects on mental health, relationships, and daily functioning. NHCH offers evidence-based trauma treatment delivered by clinicians with specialized training in trauma-informed care.",
    focusAreas: [
      "EMDR (Eye Movement Desensitization and Reprocessing)",
      "Trauma-Focused Cognitive Behavioral Therapy",
      "Somatic approaches",
      "Trauma-informed talk therapy",
      "Complex trauma and PTSD",
      "Childhood trauma recovery",
    ],
    cta: "Begin Your Healing Journey",
    icon: "shield",
  },
  {
    slug: "neurodiversity",
    title: "Neurodiversity-Informed Care",
    metaTitle: "Neurodiversity-Informed Care | NHCH McKinney",
    metaDescription:
      "Affirming mental health care for neurodivergent individuals at NHCH. Autism, ADHD, and neurodevelopmental support.",
    h1: "Neurodiversity-Informed Care",
    description:
      "NHCH provides affirming, knowledgeable care for neurodivergent individuals. Our clinicians understand that neurological differences are natural variations, not deficits, and tailor their approach accordingly.",
    focusAreas: [
      "Therapy for autistic adults and adolescents",
      "ADHD support and coping strategies",
      "Psychological testing and assessment",
      "Support for late-diagnosed individuals",
      "Family education and support",
      "Executive functioning strategies",
    ],
    cta: "Schedule a Consultation",
    icon: "lightbulb",
  },
  {
    slug: "sex-therapy",
    title: "Sex Therapy",
    metaTitle: "Sex Therapy | NHCH McKinney",
    metaDescription:
      "Professional, evidence-based sex therapy at NHCH. Confidential support for intimacy, desire, and relational concerns.",
    h1: "Sex Therapy",
    description:
      "Sex therapy at New Horizons Center for Healing is approached with professionalism, discretion, and evidence-based care. Services support individuals and couples navigating intimacy, communication, desire, identity, and relational concerns without shame or sensationalism.",
    focusAreas: [
      "Intimacy and desire concerns",
      "Sexual communication",
      "Identity exploration",
      "Relationship and sexual health",
      "Recovery from sexual trauma",
      "Education and skill-building",
    ],
    cta: "Schedule a Confidential Consultation",
    icon: "heart",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

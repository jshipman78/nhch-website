export interface TeamMember {
  name: string;
  title: string;
  credentials?: string;
  bio: string;
  photo?: string;
  initials: string;
  category: "psychiatrist" | "therapist" | "inactive" | "memoriam" | "admin";
  acceptingPatients: boolean;
  supervisor?: string;
  note?: string;
}

export const psychiatrists: TeamMember[] = [
  {
    name: "Yee Yee Thein, MD",
    title: "Board Certified Adult Psychiatrist",
    credentials: "MD",
    photo: "/assets/team-photos/yee-yee-thein.jpg",
    initials: "YYT",
    category: "psychiatrist",
    acceptingPatients: true,
    bio: "Dr. Yee Yee Thein is a Board Certified Adult Psychiatrist. Dr. Thein has focused on many different areas of psychiatry and is well versed with working with adolescents 17 years of age and older. Dr. Thein completed her residency training at The University of Texas (UT) Southwestern Medical Center in Dallas. She is a Board Certified Adult Psychiatrist and Assistant Professor at UT Southwestern Medical Center in Dallas where she supervises residents and medical students. Her past clinical and practice experiences include inpatient and emergency psychiatry, diagnosis and management of Anxiety, Depression, Bipolar Disorder, Eating Disorder, and Attention Deficit Hyperactive Disorder (ADHD).",
  },
  {
    name: "Maximus Anitube, MD",
    title: "Board Certified Child and Adolescent Psychiatrist & Board Certified Adult Psychiatrist",
    credentials: "MD",
    initials: "MA",
    category: "psychiatrist",
    acceptingPatients: true,
    bio: "Dr. Maximus Anitube is a Board Certified Child Psychiatrist and a Board Certified Adult Psychiatrist. He has focused his clinical training and experience on many different areas of psychiatry and is well versed with working with children, adolescents, and adults. Dr. Anitube is a member of the American Academy of Child and Adolescent Psychiatry and the American Psychiatric Association.",
  },
  {
    name: "Babak Abbassi, MD, MBA",
    title: "Director of Medical Operations",
    credentials: "MD, MBA",
    photo: "/assets/team-photos/babak-abbassi.jpg",
    initials: "BA",
    category: "psychiatrist",
    acceptingPatients: true,
    bio: "Dr. Babak Abbassi holds a Masters of Business Administration degree with specialization in Health Care Management and Administration. He obtained his M.S. from the University of North Texas Health Science Center in Fort Worth and obtained his MBA from the University of Texas at Dallas. He completed his Doctorate in Medicine from Texas A&M University Health Science Center. With his vast educational background and experience in health care and Corporate America, he has served in the capacities of Operations Director and Medical and Health Care Operations Consultant.",
  },
];

export const therapists: TeamMember[] = [
  {
    name: "Jeri Marshall, LPC-S",
    title: "Licensed Professional Counselor-Supervisor",
    credentials: "LPC-S",
    photo: "/assets/team-photos/jeri-marshall.jpg",
    initials: "JM",
    category: "therapist",
    acceptingPatients: true,
    bio: "Jeri graduated from Dallas Baptist University with a Master's degree in counseling and has been counseling in private practice with children, teens, adults and families for over 20 years. She is passionate about being a counselor because it gives her the opportunity to work alongside children, teens, adults and their families encouraging resiliency, strong connections and healthy communication. She uses elements of cognitive behavioral techniques, experiential therapy, art therapy, DBT skills, ETT and other modalities to meet the specific needs of her clients. She has training and continued education in play therapy, equine/animal assisted therapy and art therapy.",
  },
  {
    name: "Allen Johnson, LPC",
    title: "Licensed Professional Counselor",
    credentials: "LPC",
    photo: "/assets/team-photos/allen-johnson.jpg",
    initials: "AJ",
    category: "therapist",
    acceptingPatients: true,
    bio: "Allen earned his Bachelor's degree in 1994 from West Texas A&M University and went to work teaching in Garland ISD. In 2014, Allen earned his Master of Arts in School Counseling. Subsequently he earned his Master of Arts in Professional Counseling in February of 2020. Allen has worked with teens as young as 16 and adults into their 80's. Allen predominantly uses Cognitive Behavioral Therapy (CBT), Existentialism and Client-centered approaches in helping clients create and maintain their best lives. Allen has assisted clients who struggled with anxiety, depression, Borderline Personality Disorder, work issues, health issues and the unfairness of life. Allen has a passion for marriages/relationships.",
  },
  {
    name: "Jeff Quan, LPC-S",
    title: "Licensed Professional Counselor-Supervisor, Mediator, EMDR Therapist",
    credentials: "LPC-S",
    photo: "/assets/team-photos/jeff-quan.jpg",
    initials: "JQ",
    category: "therapist",
    acceptingPatients: true,
    bio: "Jeff Quan is a Licensed Professional Counselor-Supervisor, Mediator, EMDR provider, Certified Trauma Model Therapist, Certified Aggression Management Trainer, and Certified Anger Resolution Therapist. Jeff earned his Bachelor's Degree in Professional Development from Amber University in 2001 and his Master's Degree in Counseling from Amberton University in 2004. He is currently pursuing his PhD in Counselor Education and Supervision through Texas A&M University-Commerce. Jeff has provided extensive therapy to trauma survivors through his clinical and private practice. Jeff is a veteran of Operation Desert Storm.",
  },
  {
    name: "Jon Johnston, LPC",
    title: "Licensed Professional Counselor",
    credentials: "LPC",
    photo: "/assets/team-photos/jon-johnston.jpg",
    initials: "JJ",
    category: "therapist",
    acceptingPatients: true,
    bio: "Jon Johnston is a Licensed Professional Counselor (LPC) and received his Masters Degree in Counseling from Amberton University. His specialties include chronic illness, anxiety and depression, grief work, men's issues, and couples counseling. He is a Level 2 trained Gottman Couples Counselor and his theoretical orientation is primarily Mindfulness-based Cognitive Therapy (MBCT) and Acceptance and Commitment Therapy (ACT). Jon mentors his clients to help them find purpose, meaning, and direction in their lives in a compassionate and non-judgmental space. Jon is also an accomplished musician who studied at Berklee College of Music.",
  },
  {
    name: "Travis Trayler, LPC",
    title: "Licensed Professional Counselor",
    credentials: "LPC, CSC",
    photo: "/assets/team-photos/travis-trayler.jpg",
    initials: "TT",
    category: "therapist",
    acceptingPatients: true,
    note: "Travis is unable to see clients who currently attend McKinney ISD",
    bio: "Mr. Travis Trayler, M.S., is a Licensed Professional Counselor (LPC) as well as a Certified School Counselor (CSC). He has worked with children and families for a number of years in the school system. Travis earned his bachelor's degree from the University of Texas at Arlington and his master's degree from Texas A&M University – Commerce. He has a vast amount of experience collaborating with, and supporting families and children with academic, social, emotional and behavioral difficulties.",
  },
  {
    name: "Fariba Abbasi, LPC-S",
    title: "Licensed Professional Counselor Supervisor",
    credentials: "LPC-S",
    photo: "/assets/team-photos/fariba-abbasi.jpg",
    initials: "FA",
    category: "therapist",
    acceptingPatients: true,
    bio: "Mrs. Fariba Abbasi received her Bachelor's degree in Computer Science from University of North Texas, and her Masters of Science degree in Clinical Psychology from Johns Hopkins University. Fariba is a Licensed Professional Counselor Supervisor (LPC-S), and a Certified Hypnotherapist by the National Guild of Hypnotists. Fariba has many years of experience in a variety of clinical settings. She has worked with clients suffering from depression, anxiety, attachment disorder, eating disorders, obsessive compulsive disorder (OCD), panic attacks, phobias, bipolar disorder, attention deficit hyperactivity disorder (ADHD), post-traumatic stress disorder (PTSD), addictions and other mental health issues.",
  },
  {
    name: "Heather Carlile, LPC-S",
    title: "Licensed Professional Counselor Supervisor",
    credentials: "LPC-S",
    photo: "/assets/team-photos/heather-carlile.jpg",
    initials: "HC",
    category: "therapist",
    acceptingPatients: true,
    bio: "Heather Carlile is known as a futurist and a wizard of human nature. She began teaching and facilitating for individuals, couples, corporations starting in 1993. Heather specializes in marriage counseling and mentoring. She is a pioneer with a passion for relationships, virtue, identity, gender, and lifestyle. Her unique transpersonal philosophy integrates archetypes and positive psychology with cognitive-behavioral techniques. The US Army welcomes Heather as a presenter for the Yellow Ribbon Reintegration conferences. She is a master teacher, a therapist, an author, a speaker, an expert in relationships and personality.",
  },
  {
    name: "Jennifer Frank, LPC-A",
    title: "Licensed Professional Counselor Associate",
    credentials: "LPC-A",
    photo: "/assets/team-photos/jennifer-frank.jpg",
    initials: "JF",
    category: "therapist",
    acceptingPatients: true,
    supervisor: "Jeff Quan, LPC-S",
    bio: "Mrs. Jennifer Frank holds a Bachelor of Arts degree in International Studies from the University of Washington, Seattle and dual Master of Arts degrees in Counseling and International Relations from Webster University, Leiden, The Netherlands. Jennifer's adventurous spirit and academic pursuits have taken her backpacking across 65 countries providing her with invaluable first-hand, in-depth cross-cultural understanding, awareness and sensitivity. Her professional background includes working at a crisis center in Florida, where she provided Trauma-Focused Cognitive Behavioral Therapy (TF-CBT) services.",
  },
  {
    name: "Karina Marino, LPC-A",
    title: "Licensed Professional Counselor Associate",
    credentials: "LPC-A",
    photo: "/assets/team-photos/karina-marino.jpg",
    initials: "KM",
    category: "therapist",
    acceptingPatients: true,
    supervisor: "Heather Carlile, LPC-S",
    bio: "Karina Marino focuses on helping youth and adults improve their quality of life and overcome the emotional and psychological challenges they face. Karina specializes in working with people overwhelmed by stress, anxiety, trauma and low self-esteem. She uses somatic interventions and is certified in the use of yoga as a tool to assist those who have been through traumatic experiences. She is also certified in the Eagala model of equine psychotherapy. She is especially committed to the Hispanic and bilingual community.",
  },
];

export const inactiveStaff: TeamMember[] = [
  {
    name: "Dr. Ryan Smith, LPC-S, LMFT-S",
    title: "Licensed Professional Counselor Supervisor, Licensed Marriage and Family Therapist Supervisor",
    credentials: "LPC-S, LMFT-S",
    photo: "/assets/team-photos/ryan-smith.jpg",
    initials: "RS",
    category: "inactive",
    acceptingPatients: false,
    bio: "",
  },
  {
    name: "Jennifer Akins, LPC, CSC",
    title: "Licensed Professional Counselor, Certified School Counselor",
    credentials: "LPC, CSC",
    photo: "/assets/team-photos/jennifer-akins.jpg",
    initials: "JA",
    category: "inactive",
    acceptingPatients: false,
    bio: "",
  },
  {
    name: "Dr. Sanaz Adibian",
    title: "Licensed Psychologist",
    credentials: "PhD",
    photo: "/assets/team-photos/sanaz-adibian.jpg",
    initials: "SA",
    category: "inactive",
    acceptingPatients: false,
    bio: "",
  },
];

export const memoriam: TeamMember = {
  name: "Dr. Amir Abbassi",
  title: "Former Clinic Director",
  credentials: "LPC-S, LMFT-S, AASECT Certified Sex Therapist",
  photo: "/assets/team-photos/amir-abbassi.jpg",
  initials: "AA",
  category: "memoriam",
  acceptingPatients: false,
  bio: "Dr. Amir Abbassi served as Clinic Director and was a Licensed Professional Counselor-Supervisor (LPC-S), Licensed Marriage and Family Therapist-Supervisor (LMFT-S), and a Certified Sex Therapist by AASECT. Dr. Abbassi was a professor emeritus and worked as a national and international consultant on marriage and family/child custody issues. He was a former president of the Texas Association of Marriage and Family Counselors.",
  note: "1955-2024",
};

export const adminStaff = [
  { name: "Erin Perry", title: "Clinic Director", photo: "/assets/team-photos/erin-perry.jpg", initials: "EP" },
  { name: "Cynthia", title: "Office Manager", photo: "/assets/team-photos/cynthia.jpg", initials: "C" },
  { name: "Cheri", title: "Administrative Staff", photo: "/assets/team-photos/cheri.jpg", initials: "CH" },
  { name: "Christian", title: "Administrative Staff", photo: "/assets/team-photos/christian.jpg", initials: "CR" },
];

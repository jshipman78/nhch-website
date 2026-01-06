import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Navigating Grief: A Compassionate Guide | NHCH",
  description:
    "Understanding grief and finding your way through loss. A compassionate guide from licensed mental health professionals.",
};

export default function NavigatingGriefArticle() {
  return (
    <>
      {/* Hero */}
      <Section background="gradient" padding="lg">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/media"
            className="inline-flex items-center text-gold hover:text-gold-dark mb-6 text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Media Hub
          </Link>
          <span className="text-gold text-sm font-medium uppercase tracking-wide">
            Grief & Loss
          </span>
          <h1 className="text-forest mt-2 mb-4">
            Navigating Grief: A Compassionate Guide
          </h1>
          <p className="text-warmgray text-lg">
            There is no right way to grieve—only your way. Here&apos;s what might help.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-warmgray">
            <span>8 min read</span>
            <span>•</span>
            <span>By NHCH Clinical Team</span>
          </div>
        </div>
      </Section>

      {/* Featured Image */}
      <div className="relative h-64 md:h-96 -mt-8">
        <Image
          src="/assets/misc/sunrise-path.jpg"
          alt="A path toward new horizons at sunrise"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      {/* Article Content */}
      <Section background="white" padding="lg">
        <article className="max-w-3xl mx-auto prose prose-lg prose-forest">
          <p className="lead text-xl text-warmgray">
            Grief is one of the most universal human experiences, yet it can feel
            profoundly isolating. If you&apos;re reading this, you may be in the midst
            of loss—or perhaps you&apos;re trying to understand why grief from long ago
            still surfaces. Either way, we want you to know: what you&apos;re experiencing
            is valid, and you don&apos;t have to navigate it alone.
          </p>

          <h2>Understanding Grief</h2>
          <p>
            Grief is our natural response to loss. While we often associate it with
            death, grief can accompany many types of loss:
          </p>
          <ul>
            <li>The death of a loved one (including pets)</li>
            <li>End of a relationship or marriage</li>
            <li>Loss of a job or career</li>
            <li>Health changes or diagnosis</li>
            <li>Loss of a dream or expected future</li>
            <li>Major life transitions (children leaving home, retirement)</li>
            <li>Loss of safety or security after trauma</li>
          </ul>
          <p>
            Whatever your loss, your grief is real and deserves to be honored.
          </p>

          <h2>What Grief Actually Looks Like</h2>
          <p>
            You may have heard of the &quot;five stages of grief&quot; (denial, anger,
            bargaining, depression, acceptance). While this framework can be useful,
            grief rarely follows a neat progression. In reality, grief is messy,
            non-linear, and highly individual.
          </p>
          <p>
            <strong>Grief may show up as:</strong>
          </p>
          <ul>
            <li><strong>Emotional waves:</strong> Sadness, anger, guilt, relief, numbness—sometimes all in the same hour</li>
            <li><strong>Physical symptoms:</strong> Fatigue, changes in appetite, sleep difficulties, aches and pains</li>
            <li><strong>Cognitive changes:</strong> Difficulty concentrating, forgetfulness, confusion, preoccupation with the loss</li>
            <li><strong>Behavioral shifts:</strong> Social withdrawal, restlessness, crying, searching behaviors</li>
            <li><strong>Spiritual questioning:</strong> Wondering about meaning, fairness, or your beliefs</li>
          </ul>
          <p>
            All of these responses are normal. There&apos;s no &quot;right&quot; way to grieve.
          </p>

          <h2>Common Grief Experiences</h2>

          <h3>&quot;I Should Be Over This By Now&quot;</h3>
          <p>
            There&apos;s no timeline for grief. Society often expects us to &quot;move on&quot;
            within weeks or months, but significant losses can affect us for years.
            Anniversary dates, holidays, and unexpected triggers can bring grief
            flooding back even after long periods of feeling okay.
          </p>
          <p>
            Grief doesn&apos;t mean you&apos;re stuck or doing something wrong. It means you loved.
          </p>

          <h3>&quot;I Feel Guilty for Laughing/Enjoying Life&quot;</h3>
          <p>
            Experiencing moments of joy or normalcy doesn&apos;t mean you&apos;ve forgotten
            your loss or that you didn&apos;t love deeply enough. Humans are capable of
            holding grief and joy simultaneously. Allowing yourself moments of
            lightness isn&apos;t betrayal—it&apos;s survival.
          </p>

          <h3>&quot;I Feel Angry&quot;</h3>
          <p>
            Anger is a normal part of grief—at the person who died, at yourself,
            at God or the universe, at the unfairness of it all. Anger often masks
            the more vulnerable feelings underneath: helplessness, fear, profound sadness.
            Let yourself feel it without judgment.
          </p>

          <h3>&quot;I&apos;m Grieving a Complicated Relationship&quot;</h3>
          <p>
            Grief becomes especially complex when our relationship with the person
            or thing we&apos;ve lost was complicated—marked by conflict, ambivalence,
            abuse, or estrangement. You might feel guilty for not grieving &quot;enough,&quot;
            or confused by grief for someone who hurt you. This is one of the most
            difficult forms of grief, and professional support can be particularly valuable.
          </p>

          <h2>Navigating Your Grief: What Might Help</h2>

          <h3>Allow Yourself to Feel</h3>
          <p>
            Suppressing grief doesn&apos;t make it go away—it just delays and complicates
            the process. Give yourself permission to feel whatever arises, even when
            it&apos;s uncomfortable. Cry if you need to. Sit with the sadness. It will shift.
          </p>

          <h3>Take Care of Your Body</h3>
          <p>
            Grief is exhausting. As much as possible, try to:
          </p>
          <ul>
            <li>Get adequate sleep (even if it&apos;s fragmented)</li>
            <li>Eat nourishing food, even when you don&apos;t feel hungry</li>
            <li>Move your body gently—walks, stretching, whatever feels manageable</li>
            <li>Limit alcohol and other substances that can complicate grief</li>
          </ul>

          <h3>Lean on Support</h3>
          <p>
            You don&apos;t have to grieve alone. Let trusted people in—not to fix your
            grief, but to witness it. Sometimes just having someone sit with you
            in the pain is enough.
          </p>

          <h3>Create Rituals</h3>
          <p>
            Many people find comfort in rituals that honor their loss: lighting a
            candle, visiting a meaningful place, creating a memory box, writing
            letters to the person they&apos;ve lost. These practices can help externalize
            grief and create structure around formless pain.
          </p>

          <h3>Be Patient with Yourself</h3>
          <p>
            Grief takes enormous energy. Lower your expectations for yourself during
            this time. The dishes can wait. The email can wait. Right now, your job
            is to survive and gradually heal.
          </p>

          <h2>When to Seek Professional Support</h2>
          <p>
            While grief itself isn&apos;t a disorder requiring treatment, sometimes
            grief becomes &quot;complicated&quot;—stuck, overwhelming, or accompanied by
            symptoms that significantly impair functioning. Consider seeking
            professional support if:
          </p>
          <ul>
            <li>You&apos;re having persistent thoughts of suicide or self-harm</li>
            <li>Grief is preventing you from functioning in daily life for an extended period</li>
            <li>You&apos;re using substances to cope</li>
            <li>You&apos;re experiencing prolonged inability to accept the reality of the loss</li>
            <li>You&apos;re isolating completely and refusing all support</li>
            <li>You simply want support navigating this difficult experience</li>
          </ul>
          <p>
            Grief therapy doesn&apos;t rush you through your loss. A skilled therapist
            provides a safe space to process, helps you understand your grief
            responses, and supports you in integrating the loss into your ongoing life.
          </p>

          <h2>Carrying Grief Forward</h2>
          <p>
            Here&apos;s a truth that may feel counterintuitive: you will never fully
            &quot;get over&quot; a significant loss. Instead, you will learn to carry it
            differently. The grief may always be there, but over time, it typically
            becomes less constant, less sharp, more integrated into who you are.
          </p>
          <p>
            Many people find that grief, while devastating, also opens them to
            greater compassion, deeper appreciation for life, and more authentic
            relationships. This doesn&apos;t make the loss worth it—nothing could do
            that. But it does suggest that carrying grief can coexist with living
            a meaningful life.
          </p>
          <p>
            <em>
              Be gentle with yourself. Grief is not a problem to be solved, but a
              process to be lived. You are doing harder work than most people realize.
            </em>
          </p>
        </article>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-12 p-8 bg-muted rounded-xl text-center">
          <h3 className="text-forest text-xl font-semibold mb-3">
            Need Support Through Your Grief?
          </h3>
          <p className="text-warmgray mb-6">
            Our compassionate therapists specialize in helping people navigate loss.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="https://www.zocdoc.com" external>
              Schedule a Consultation
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

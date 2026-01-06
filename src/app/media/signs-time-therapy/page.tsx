import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "5 Signs It Might Be Time to Seek Therapy | NHCH",
  description:
    "Learn to recognize when professional mental health support could benefit you. A licensed counselor explains the common signs that therapy might help.",
};

export default function SignsTimeTherapyArticle() {
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
            Mental Health Awareness
          </span>
          <h1 className="text-forest mt-2 mb-4">
            5 Signs It Might Be Time to Seek Therapy
          </h1>
          <p className="text-warmgray text-lg">
            Recognizing when you need support is a sign of strength, not weakness.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-warmgray">
            <span>5 min read</span>
            <span>•</span>
            <span>By NHCH Clinical Team</span>
          </div>
        </div>
      </Section>

      {/* Featured Image */}
      <div className="relative h-64 md:h-96 -mt-8">
        <Image
          src="/assets/misc/therapy-office-warm.jpg"
          alt="Warm, welcoming therapy space"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      {/* Article Content */}
      <Section background="white" padding="lg">
        <article className="max-w-3xl mx-auto prose prose-lg prose-forest">
          <p className="lead text-xl text-warmgray">
            As licensed professional counselors, one of the most common questions we hear is:
            &quot;How do I know if I really need therapy?&quot; The truth is, you don&apos;t need to
            be in crisis to benefit from professional support. Therapy is for anyone who wants
            to grow, heal, or simply navigate life&apos;s challenges with guidance.
          </p>

          <p>
            That said, there are certain signs that suggest therapy could be particularly
            beneficial right now. Here are five indicators we often see in our practice:
          </p>

          <h2>1. Your Emotions Feel Overwhelming or Unmanageable</h2>
          <p>
            We all experience difficult emotions—sadness, anger, anxiety, frustration.
            These feelings are a normal part of being human. However, when emotions begin
            to feel overwhelming, persistent, or disproportionate to situations, it may
            indicate that your usual coping strategies need reinforcement.
          </p>
          <p>
            <strong>Signs to watch for:</strong>
          </p>
          <ul>
            <li>Crying frequently without clear triggers</li>
            <li>Anger that feels explosive or difficult to control</li>
            <li>Anxiety that interferes with daily activities</li>
            <li>Feeling emotionally &quot;numb&quot; or disconnected</li>
            <li>Mood swings that surprise you or others</li>
          </ul>

          <h2>2. You&apos;re Withdrawing from People and Activities You Once Enjoyed</h2>
          <p>
            Social withdrawal and loss of interest in previously enjoyable activities
            are hallmark signs that something deeper may be affecting your mental health.
            When we&apos;re struggling internally, we often pull away from the very connections
            and activities that could help us heal.
          </p>
          <p>
            This doesn&apos;t mean you need to be a social butterfly. Introverts need alone time,
            and that&apos;s healthy. The concern arises when isolation feels involuntary—when
            you&apos;re avoiding life rather than choosing solitude.
          </p>

          <h2>3. You&apos;re Experiencing Physical Symptoms Without Medical Explanation</h2>
          <p>
            The mind-body connection is powerful. Emotional distress often manifests
            physically when we haven&apos;t processed it psychologically. If you&apos;ve seen
            your doctor and medical causes have been ruled out, consider whether stress,
            anxiety, or unresolved emotional issues might be contributing.
          </p>
          <p>
            <strong>Common physical manifestations include:</strong>
          </p>
          <ul>
            <li>Chronic headaches or migraines</li>
            <li>Digestive issues (stomach aches, IBS symptoms)</li>
            <li>Muscle tension, especially in the neck, shoulders, and back</li>
            <li>Fatigue that doesn&apos;t improve with rest</li>
            <li>Changes in appetite or sleep patterns</li>
          </ul>

          <h2>4. You&apos;re Relying on Unhealthy Coping Mechanisms</h2>
          <p>
            We all have ways of managing stress and difficult emotions. The question is
            whether your coping strategies are helping you or causing additional harm.
            If you find yourself increasingly dependent on substances, behaviors, or
            patterns that provide temporary relief but long-term consequences, therapy
            can help you develop healthier alternatives.
          </p>
          <p>
            This might include excessive alcohol use, overeating or undereating,
            overworking to avoid feelings, excessive screen time or social media use,
            or avoiding problems rather than addressing them.
          </p>

          <h2>5. You&apos;re Going Through a Major Life Transition or Trauma</h2>
          <p>
            Life changes—even positive ones—create stress. Divorce, job loss, relocation,
            the death of a loved one, becoming a parent, retirement... these transitions
            challenge our sense of identity and require psychological adjustment.
          </p>
          <p>
            Therapy provides a dedicated space to process these changes, grieve what
            was lost, and develop strategies for moving forward. You don&apos;t have to
            navigate major life transitions alone.
          </p>

          <h2>Taking the First Step</h2>
          <p>
            If you recognized yourself in any of these signs, please know that seeking
            help is an act of courage and self-care—not weakness. Therapy is a collaborative
            process where you work with a trained professional to understand your experiences,
            develop new skills, and move toward the life you want to live.
          </p>
          <p>
            At New Horizons Center for Healing, we&apos;ve spent 15 years helping people
            just like you navigate life&apos;s challenges. Our team of licensed clinicians
            provides a warm, non-judgmental space where you can explore your concerns
            at your own pace.
          </p>
          <p>
            <em>
              Remember: The fact that you&apos;re reading this article suggests you&apos;re
              already taking your mental health seriously. That&apos;s the first step.
            </em>
          </p>
        </article>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-12 p-8 bg-muted rounded-xl text-center">
          <h3 className="text-forest text-xl font-semibold mb-3">
            Ready to Take the Next Step?
          </h3>
          <p className="text-warmgray mb-6">
            Our team is here to answer your questions and help you find the right fit.
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

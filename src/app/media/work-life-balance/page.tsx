import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "The Importance of Work-Life Balance for Mental Health | NHCH",
  description:
    "Discover why work-life balance matters for your mental health and practical strategies to create boundaries that support your wellbeing.",
};

export default function WorkLifeBalanceArticle() {
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
            Wellness
          </span>
          <h1 className="text-forest mt-2 mb-4">
            The Importance of Work-Life Balance for Mental Health
          </h1>
          <p className="text-warmgray text-lg">
            Balance isn&apos;t a luxury—it&apos;s essential for sustainable wellbeing.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-warmgray">
            <span>4 min read</span>
            <span>•</span>
            <span>By NHCH Clinical Team</span>
          </div>
        </div>
      </Section>

      {/* Featured Image */}
      <div className="relative h-64 md:h-96 -mt-8">
        <Image
          src="/assets/misc/watercolor-healing.jpg"
          alt="Abstract watercolor representing balance and peace"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      {/* Article Content */}
      <Section background="white" padding="lg">
        <article className="max-w-3xl mx-auto prose prose-lg prose-forest">
          <p className="lead text-xl text-warmgray">
            In our always-connected world, the line between work and personal life
            has blurred—and for many people, it&apos;s nearly disappeared. We answer emails
            at dinner, take calls on vacation, and measure our worth by our productivity.
            But this constant state of &quot;on&quot; takes a significant toll on mental health.
          </p>

          <h2>Why Work-Life Balance Matters</h2>
          <p>
            Work-life balance isn&apos;t about perfect equilibrium or rigid time divisions.
            It&apos;s about having enough space in your life for rest, relationships, and
            activities that restore you—not just those that deplete you.
          </p>
          <p>
            Research consistently links poor work-life balance to:
          </p>
          <ul>
            <li>Increased rates of anxiety and depression</li>
            <li>Burnout and chronic stress</li>
            <li>Relationship strain and family conflict</li>
            <li>Physical health problems (heart disease, sleep disorders, weakened immunity)</li>
            <li>Decreased job satisfaction and performance—ironically, the opposite of what overwork intends</li>
          </ul>

          <h2>Signs Your Balance Is Off</h2>
          <p>
            Sometimes we&apos;re so deep in patterns of overwork that we don&apos;t recognize the
            imbalance until it manifests in symptoms:
          </p>
          <ul>
            <li>You can&apos;t remember the last time you did something purely for enjoyment</li>
            <li>Your relationships feel neglected or strained</li>
            <li>You feel guilty when you&apos;re not working</li>
            <li>Rest feels unproductive rather than restorative</li>
            <li>You&apos;re constantly tired but have trouble sleeping</li>
            <li>Small frustrations trigger outsized reactions</li>
            <li>You&apos;ve lost touch with hobbies or interests outside work</li>
          </ul>

          <h2>Creating Better Balance: Practical Strategies</h2>

          <h3>Define Your Non-Negotiables</h3>
          <p>
            Identify 2-3 commitments outside work that matter most to you—family dinner,
            exercise, a hobby, religious practice. Treat these with the same respect you&apos;d
            give a work meeting. They&apos;re appointments with your wellbeing.
          </p>

          <h3>Set Boundaries with Technology</h3>
          <p>
            Technology makes us accessible 24/7, but accessibility isn&apos;t obligation.
            Consider:
          </p>
          <ul>
            <li>Turning off work email notifications after hours</li>
            <li>Keeping your phone out of the bedroom</li>
            <li>Designating tech-free times (meals, first hour of morning)</li>
            <li>Using separate devices or profiles for work and personal use</li>
          </ul>

          <h3>Learn to Say No</h3>
          <p>
            Every yes to something is a no to something else. When asked to take on
            additional commitments, pause before responding. Ask yourself: What will
            I have to give up to say yes to this? Is that trade-off worth it?
          </p>

          <h3>Reframe Your Relationship with Rest</h3>
          <p>
            Rest is not laziness or wasted time. It&apos;s essential maintenance for your
            mind and body. Just as you wouldn&apos;t expect a car to run forever without
            refueling, you can&apos;t expect yourself to function well without genuine rest.
          </p>

          <h3>Start Small</h3>
          <p>
            If your current balance is severely off, dramatic changes rarely stick.
            Instead, make one small change this week. Maybe it&apos;s leaving work on time
            one day, or taking a real lunch break away from your desk. Build from there.
          </p>

          <h2>When Work-Life Imbalance Requires Professional Support</h2>
          <p>
            Sometimes imbalance has deeper roots—difficulty setting boundaries,
            perfectionism, anxiety about job security, or using work to avoid other
            life areas. If you&apos;ve tried to create better balance but can&apos;t seem to
            make changes stick, therapy can help you:
          </p>
          <ul>
            <li>Understand the underlying drivers of overwork</li>
            <li>Develop healthier relationship with achievement and productivity</li>
            <li>Learn to tolerate the discomfort of setting boundaries</li>
            <li>Address anxiety or perfectionism that fuels imbalance</li>
            <li>Reconnect with values and priorities beyond work</li>
          </ul>

          <h2>The Courage to Change</h2>
          <p>
            Creating work-life balance in a culture that celebrates overwork requires
            intention and sometimes courage. You may face pushback—from employers,
            colleagues, or your own inner critic. Remember: Protecting your mental
            health isn&apos;t selfish. It&apos;s what allows you to show up fully in all areas
            of your life, including work.
          </p>
          <p>
            <em>
              Balance isn&apos;t something you find—it&apos;s something you create,
              one choice at a time.
            </em>
          </p>
        </article>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-12 p-8 bg-muted rounded-xl text-center">
          <h3 className="text-forest text-xl font-semibold mb-3">
            Struggling with Burnout or Work Stress?
          </h3>
          <p className="text-warmgray mb-6">
            Our therapists can help you develop healthier patterns and boundaries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/services/individual-therapy">
              Explore Individual Therapy
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

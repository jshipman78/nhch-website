import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Supporting a Loved One Through Depression | NHCH",
  description:
    "Learn how to support someone with depression while maintaining your own wellbeing. Practical guidance from licensed mental health professionals.",
};

export default function SupportingDepressionArticle() {
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
            Family Support
          </span>
          <h1 className="text-forest mt-2 mb-4">
            Supporting a Loved One Through Depression
          </h1>
          <p className="text-warmgray text-lg">
            Your presence matters more than you know. Here&apos;s how to help.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-warmgray">
            <span>7 min read</span>
            <span>•</span>
            <span>By NHCH Clinical Team</span>
          </div>
        </div>
      </Section>

      {/* Featured Image */}
      <div className="relative h-64 md:h-96 -mt-8">
        <Image
          src="/assets/misc/sunrise-path.jpg"
          alt="A path leading toward hope"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      {/* Article Content */}
      <Section background="white" padding="lg">
        <article className="max-w-3xl mx-auto prose prose-lg prose-forest">
          <p className="lead text-xl text-warmgray">
            Watching someone you love struggle with depression can feel helpless and
            heartbreaking. You want to fix it, to take their pain away, to see them
            smile again. While you can&apos;t cure their depression, your support plays
            a crucial role in their recovery journey.
          </p>

          <p>
            As counselors who work with both individuals experiencing depression and
            their loved ones, we&apos;ve seen how powerful—and how challenging—this support
            role can be. This guide offers practical strategies for helping someone
            with depression while also taking care of yourself.
          </p>

          <h2>Understanding Depression: What Your Loved One Is Experiencing</h2>
          <p>
            Depression is not simply &quot;feeling sad&quot; or having a bad day. It&apos;s a
            clinical condition that affects how a person thinks, feels, and functions.
            Understanding this distinction is the first step to providing meaningful support.
          </p>
          <p>
            <strong>People with depression may experience:</strong>
          </p>
          <ul>
            <li>Persistent feelings of sadness, emptiness, or hopelessness</li>
            <li>Loss of interest in activities they once enjoyed</li>
            <li>Changes in sleep patterns (sleeping too much or too little)</li>
            <li>Difficulty concentrating or making decisions</li>
            <li>Physical symptoms like fatigue, aches, or changes in appetite</li>
            <li>Feelings of worthlessness or excessive guilt</li>
            <li>In severe cases, thoughts of death or suicide</li>
          </ul>
          <p>
            Importantly, depression lies to the people it affects. It tells them they&apos;re
            a burden, that they&apos;ll never feel better, that no one truly cares. Your
            consistent presence counters these lies, even when they can&apos;t fully receive it.
          </p>

          <h2>What Helps: Practical Ways to Support</h2>

          <h3>Be Present Without Pressure</h3>
          <p>
            Sometimes the most powerful thing you can do is simply be there. You don&apos;t
            need to have the right words or solutions. Sitting together in silence,
            watching a show, or just being in the same room can provide comfort.
          </p>
          <p>
            Avoid pressuring them to &quot;snap out of it&quot; or pushing them to participate
            in activities before they&apos;re ready. Instead, offer gentle invitations:
            &quot;I&apos;m going for a walk if you&apos;d like to join me. No pressure either way.&quot;
          </p>

          <h3>Listen Without Trying to Fix</h3>
          <p>
            When your loved one opens up, resist the urge to immediately problem-solve.
            Often, they need to feel heard more than they need advice. Try responses like:
          </p>
          <ul>
            <li>&quot;That sounds really hard. I&apos;m here for you.&quot;</li>
            <li>&quot;Thank you for telling me. I&apos;m glad you trust me with this.&quot;</li>
            <li>&quot;I can&apos;t fully understand what you&apos;re going through, but I care about you.&quot;</li>
          </ul>

          <h3>Help With Practical Tasks</h3>
          <p>
            Depression depletes energy and makes everyday tasks feel overwhelming.
            Offering specific, concrete help can make a real difference:
          </p>
          <ul>
            <li>&quot;I&apos;m picking up groceries—can I grab anything for you?&quot;</li>
            <li>&quot;I have time to help with laundry or dishes if that would help.&quot;</li>
            <li>&quot;Would it help if I sat with you while you make that phone call?&quot;</li>
          </ul>

          <h3>Encourage Professional Help—Gently</h3>
          <p>
            If your loved one isn&apos;t already seeing a mental health professional,
            encourage them to consider it. Frame it as a sign of strength, not weakness:
          </p>
          <p>
            &quot;I&apos;ve noticed you&apos;ve been struggling, and I wonder if talking to someone
            professionally might help. I could help you find someone if you&apos;d like.&quot;
          </p>
          <p>
            Be prepared for resistance. Depression often creates barriers to seeking help.
            Continue gently encouraging without ultimatums or pressure.
          </p>

          <h2>What to Avoid</h2>
          <p>
            Even with the best intentions, some approaches can inadvertently make things
            harder for someone with depression:
          </p>
          <ul>
            <li><strong>Minimizing their experience:</strong> &quot;Everyone feels sad sometimes&quot; or &quot;You have so much to be grateful for&quot;</li>
            <li><strong>Comparing struggles:</strong> &quot;Other people have it worse&quot;</li>
            <li><strong>Offering toxic positivity:</strong> &quot;Just think positive!&quot; or &quot;Everything happens for a reason&quot;</li>
            <li><strong>Taking it personally:</strong> Their withdrawal isn&apos;t about you</li>
            <li><strong>Giving ultimatums:</strong> &quot;If you don&apos;t get help, I&apos;m done&quot;</li>
          </ul>

          <h2>Taking Care of Yourself</h2>
          <p>
            Supporting someone with depression is emotionally demanding. You cannot pour
            from an empty cup, and burning out helps no one. Self-care isn&apos;t selfish—it&apos;s
            necessary.
          </p>
          <ul>
            <li>Set boundaries around your time and emotional capacity</li>
            <li>Maintain your own social connections and activities</li>
            <li>Consider joining a support group for families of those with depression</li>
            <li>Seek your own therapy if you&apos;re struggling with the situation</li>
            <li>Acknowledge your own feelings—frustration, grief, and helplessness are normal</li>
          </ul>

          <h2>When to Seek Immediate Help</h2>
          <p>
            If your loved one expresses thoughts of suicide or self-harm, take it seriously.
            Ask directly: &quot;Are you thinking about hurting yourself?&quot; Contrary to myth,
            asking about suicide doesn&apos;t plant the idea—it opens the door for honest conversation.
          </p>
          <p>
            <strong>In a crisis:</strong>
          </p>
          <ul>
            <li>Call 988 (Suicide and Crisis Lifeline)</li>
            <li>Go to the nearest emergency room</li>
            <li>Call 911 if there&apos;s immediate danger</li>
          </ul>

          <h2>The Long Road: Patience and Hope</h2>
          <p>
            Recovery from depression isn&apos;t linear. There will be good days and setbacks.
            Your consistent, patient presence matters even when progress seems slow.
            Many people recover from depression and go on to live fulfilling lives—often
            with deeper empathy and resilience because of what they&apos;ve been through.
          </p>
          <p>
            <em>
              Your love won&apos;t cure their depression, but it can be a lifeline while
              they do the hard work of healing. That matters more than you know.
            </em>
          </p>
        </article>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-12 p-8 bg-muted rounded-xl text-center">
          <h3 className="text-forest text-xl font-semibold mb-3">
            Need Support for Your Family?
          </h3>
          <p className="text-warmgray mb-6">
            We offer family therapy and support for loved ones of those struggling with mental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/services/family-therapy">
              Learn About Family Therapy
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

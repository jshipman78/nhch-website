import { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading, Button } from "@/components/ui";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mental Health Education & Media | NHCH",
  description:
    "Explore podcasts, videos, and clinician-led mental health education from New Horizons Center for Healing.",
};

const podcastEpisodes = [
  {
    title: "Understanding Anxiety in Modern Life",
    description:
      "Dr. Tannaz Moein discusses the rising prevalence of anxiety and evidence-based approaches to treatment.",
    duration: "32 min",
    date: "Coming Soon",
  },
  {
    title: "Couples Communication: Breaking the Cycle",
    description:
      "Heather Carlile shares insights on improving communication patterns in relationships.",
    duration: "28 min",
    date: "Coming Soon",
  },
  {
    title: "Trauma-Informed Care: What It Really Means",
    description:
      "Jeff Quan, EMDR specialist, explains trauma-informed approaches and the healing process.",
    duration: "35 min",
    date: "Coming Soon",
  },
];

const videoContent = [
  {
    title: "What to Expect at Your First Therapy Session",
    description:
      "A walkthrough of the intake process and what new patients can expect.",
    thumbnail: "/assets/misc/lobby-1.jpg",
  },
  {
    title: "Meet Our Team",
    description:
      "Get to know the clinicians at New Horizons Center for Healing.",
    thumbnail: "/assets/misc/lobby-2.jpg",
  },
  {
    title: "Understanding Mental Health Treatment Options",
    description:
      "An overview of therapy modalities and how to find the right fit.",
    thumbnail: "/assets/misc/counseling-office.jpg",
  },
];

const articles = [
  {
    title: "5 Signs It Might Be Time to Seek Therapy",
    category: "Mental Health Awareness",
    readTime: "5 min read",
  },
  {
    title: "Supporting a Loved One Through Depression",
    category: "Family Support",
    readTime: "7 min read",
  },
  {
    title: "The Importance of Work-Life Balance for Mental Health",
    category: "Wellness",
    readTime: "4 min read",
  },
  {
    title: "Navigating Grief: A Compassionate Guide",
    category: "Grief & Loss",
    readTime: "8 min read",
  },
];

export default function MediaPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full">
            <p className="text-gold-rich font-semibold text-sm uppercase tracking-wide">
              Education & Resources
            </p>
          </div>
          <h1 className="text-forest mb-6">Education & Media Hub</h1>
          <p className="text-warmgray text-lg leading-relaxed">
            The Education & Media Hub provides access to thoughtful
            conversations, educational content, and clinician-led discussions on
            mental health topics. This content reflects NHCH&apos;s commitment to
            public education without oversimplification or sensationalism.
          </p>
        </div>
      </Section>

      {/* Podcast Section */}
      <Section background="white" padding="lg">
        <SectionHeading
          title="Podcast Library"
          subtitle="Listen to our clinicians discuss mental health topics with depth and expertise."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {podcastEpisodes.map((episode) => (
            <div
              key={episode.title}
              className="bg-muted/50 rounded-xl p-6 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-gold font-medium uppercase tracking-wide">
                    {episode.date}
                  </span>
                  <p className="text-warmgray text-xs">{episode.duration}</p>
                </div>
              </div>
              <h3 className="text-forest font-semibold mb-2">{episode.title}</h3>
              <p className="text-warmgray text-sm leading-relaxed">
                {episode.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-warmgray text-sm mb-4">
            Podcast episodes coming soon. Subscribe to be notified when new
            content is available.
          </p>
        </div>
      </Section>

      {/* Video Section */}
      <Section background="muted" padding="lg">
        <SectionHeading
          title="Video & YouTube Content"
          subtitle="Watch educational videos from our clinical team."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {videoContent.map((video) => (
            <div
              key={video.title}
              className="bg-white rounded-xl overflow-hidden border border-border shadow-sm"
            >
              <div className="relative aspect-video bg-forest/10">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-forest/30">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-forest ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-gold text-forest text-xs font-bold px-2 py-1 rounded">
                  Coming Soon
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-forest font-semibold mb-2">{video.title}</h3>
                <p className="text-warmgray text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Articles Section */}
      <Section background="white" padding="lg">
        <SectionHeading
          title="Featured Articles"
          subtitle="Read insights from our clinicians on mental health and wellness topics."
        />

        <div className="max-w-3xl mx-auto">
          <div className="divide-y divide-border">
            {articles.map((article) => (
              <div
                key={article.title}
                className="py-5 flex items-center justify-between gap-4"
              >
                <div>
                  <span className="text-xs text-gold font-medium uppercase tracking-wide">
                    {article.category}
                  </span>
                  <h3 className="text-forest font-semibold mt-1">
                    {article.title}
                  </h3>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-warmgray text-sm">{article.readTime}</span>
                  <p className="text-xs text-gold mt-1">Coming Soon</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-warmgray text-sm">
            Articles are currently in development. Check back soon for new
            content.
          </p>
        </div>
      </Section>

      {/* Featured: Shanna Wilder */}
      <Section background="forest" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-gold text-sm font-medium uppercase tracking-wide">
              Featured Clinician
            </span>
            <h2 className="text-white mt-2">Sex Therapy with Shanna Wilder</h2>
          </div>
          <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Shanna Wilder is a clinician specializing in sex therapy and
              relational health. Her work emphasizes education, emotional safety,
              and thoughtful exploration of complex personal and relational
              dynamics. Shanna integrates clinical practice with educational
              outreach through podcast and video content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services/sex-therapy"
                className="inline-flex items-center justify-center px-6 py-3 bg-gold text-forest font-semibold rounded-lg hover:bg-gold-dark transition-colors"
              >
                Learn About Sex Therapy
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-forest transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-forest mb-4">Stay Connected</h2>
          <p className="text-warmgray mb-6">
            Follow us on social media for mental health tips, updates, and new
            educational content.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.facebook.com/newhorizonscenterforhealing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-forest text-white flex items-center justify-center hover:bg-forest-dark transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/dallascounselor"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-forest text-white flex items-center justify-center hover:bg-forest-dark transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/user/mydallascounselor"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-forest text-white flex items-center justify-center hover:bg-forest-dark transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

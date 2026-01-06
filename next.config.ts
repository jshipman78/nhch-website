import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // Legacy domain redirects (when deployed)
      // These will be used if migrating from mydallascounselors.com
      {
        source: "/about-the-new-horizons-team/mission-statement",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about-the-new-horizons-team",
        destination: "/team",
        permanent: true,
      },
      {
        source: "/new-horizons-counseling-center-services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/marriage-counseling",
        destination: "/services/couples-therapy",
        permanent: true,
      },
      {
        source: "/play-therapy",
        destination: "/services/child-adolescent-therapy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

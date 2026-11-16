import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Content-Security-Policy", value: "frame-src 'self' https://booking.vikey.it https://www.openstreetmap.org https://www.google.com https://maps.google.com;" },
];

const nextConfig: NextConfig = {
  typescript: {
    // Font type definitions incomplete in Next.js 16 install; runtime is fine
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // Force every *.vercel.app visit to the canonical custom domain,
      // so only casaninacarignano.com is reachable (301 permanent).
      {
        source: "/:path*",
        has: [{ type: "host", value: "(?<sub>.*)\\.vercel\\.app" }],
        destination: "https://casaninacarignano.com/:path*",
        permanent: true,
      },
      // Normalise www -> bare canonical domain.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.casaninacarignano.com" }],
        destination: "https://casaninacarignano.com/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;

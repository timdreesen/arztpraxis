import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)", // all routes
        headers: [
          // Content Security Policy
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // required for Decap admin
              "style-src 'self' 'unsafe-inline'", // required for Tailwind and admin
              "img-src 'self' data:",
              "font-src 'self' data:",
              "connect-src 'self'", // allow API/admin connections
            ].join("; "),
          },
          // Referrer Policy
          {
            key: "Referrer-Policy",
            value: "strict-origin",
          },
          // XSS & content type
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // Clickjacking
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // Permissions policy (some browsers)
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

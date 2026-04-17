import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  async redirects() {
    return [
      {
        destination: "/legal",
        permanent: true,
        source: "/rechtliches",
      },
      {
        destination: "/legal/datenschutz",
        permanent: true,
        source: "/datenschutz",
      },
      {
        destination: "/legal/impressum",
        permanent: true,
        source: "/impressum",
      },
      {
        destination: "/legal/agb",
        permanent: true,
        source: "/agb",
      },
      {
        destination: "/legal/cookies",
        permanent: true,
        source: "/cookies",
      },
    ];
  },
};

export default nextConfig;

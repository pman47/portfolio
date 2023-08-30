/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    favicon: "/images/favicon.png",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;

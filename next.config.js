/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["api.talentnetwork.ir"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.talentnetwork.ir",
        port: "",
        pathname: "/assets/imgs/**",
      },
    ],
  },
};





module.exports = nextConfig;

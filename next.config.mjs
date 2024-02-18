/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/graphql",
        destination: "https://api.uniswap.org/v1/graphql",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/api/graphql",
        headers: [{ key: "Origin", value: "http://localhost:3000" }],
      },
    ];
  },
};

module.exports = nextConfig;

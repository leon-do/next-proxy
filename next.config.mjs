/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/graphql",
        destination: "https://api.uniswap.org/v1/graphql",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/graphql",
        headers: [{ key: "Origin", value: "http://localhost:3000" }],
      },
    ];
  },
};

export default nextConfig;

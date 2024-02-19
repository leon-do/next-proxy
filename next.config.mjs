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
};

export default nextConfig;

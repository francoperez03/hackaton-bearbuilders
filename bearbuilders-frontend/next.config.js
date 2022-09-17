/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['nextui.org', 't-cf.bstatic.com'],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Handle static assets from public directory
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig

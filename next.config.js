/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    domains: ['images.unsplash.com', 'tailwindui.com', 'placekitten.com'],
  },
}

module.exports = nextConfig

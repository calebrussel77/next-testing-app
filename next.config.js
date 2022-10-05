/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  images: {
    domains: ['pbs.twimg.com'],
  },
  eslint: {
    dirs: ['src'],
  },
};

module.exports = nextConfig;

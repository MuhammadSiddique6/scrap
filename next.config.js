/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // allow local images from /public
    unoptimized: false
  }
};

module.exports = nextConfig;

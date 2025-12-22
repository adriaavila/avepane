/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Mark Node.js modules as external for Turbopack compatibility
  serverExternalPackages: [
    'gray-matter',
    'remark',
    'remark-html',
    'rehype-sanitize',
    'rehype-raw',
    'unified',
  ],
}

export default nextConfig
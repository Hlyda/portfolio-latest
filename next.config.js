/** @type {import('next').NextConfig} */
const repoName = 'portfolio-latest';
const nextConfig = {
  reactStrictMode: true,
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  output: 'export',
  images: {
    unoptimized: true, // ← Add this line!
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig

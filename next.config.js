/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['nsohhtlgbafrydzjkqle.supabase.co'],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig 
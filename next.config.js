/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['nsohhtlgbafrydzjkqle.supabase.co']
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    return config
  },
  experimental: {
    esmExternals: 'loose'
  }
}

module.exports = nextConfig 
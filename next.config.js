/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['nsohhtlgbafrydzjkqle.supabase.co'],
<<<<<<< HEAD
=======
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
>>>>>>> 98c9c67ead9145d502e89e9ef460bf7512025a66
  }
}

module.exports = nextConfig 
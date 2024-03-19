/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./env.mjs'))

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },

  images: {
    domains: ['cdn.sanity.io'],
  },

  redirects() {
    return [
      {
        source: '/twitter',
        destination: 'https://x.com/dark9wesley',
        permanent: true,
      },
      {
        source: '/x',
        destination: 'https://x.com/dark9wesley',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/dark9wesley',
        permanent: true,
      },
    ]
  },

  rewrites() {
    return [
      {
        source: '/feed',
        destination: '/feed.xml',
      },
      {
        source: '/rss',
        destination: '/feed.xml',
      },
      {
        source: '/rss.xml',
        destination: '/feed.xml',
      },
    ]
  },
}

export default nextConfig

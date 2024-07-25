/** @type {import('next').NextConfig} */
module.exports = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'closerdaybyday.org'
      },
      {
        protocol: 'http',
        hostname: 'closerdaybyday.org'
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net'
      }
    ]
  }
};

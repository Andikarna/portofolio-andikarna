/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US', 'fr', 'nl-NL', "kr", "id-ID"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US',
  },
  images: {
    remotePatterns: [
      {
        hostname: 'fakestoreapi.com',
      },
    ],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',

    // experimental: {
    //     appDir: true
    //   },
      eslint: {
        ignoreDuringBuilds: true,
      },
      typescript: {
        ignoreBuildErrors: true,
      },
      reactStrictMode: true,
      i18n: {
        locales: ["en"],
        defaultLocale: "en",
      },


   
}

module.exports = nextConfig

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  
  i18n: {
    locales: ['en', 'pt', 'it'],
    defaultLocale: 'en',
    localeDetection: false,
  },
}

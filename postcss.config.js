module.exports = {
  parser: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'precss': {},
  },
  env: {
    production: {
      cssnano: { autoprefixer: false },
    },
  },
}

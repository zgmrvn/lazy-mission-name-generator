const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

const plugins = [
  tailwindcss,
  autoprefixer
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    purgecss({
      content: [
        './src/**/*.vue'
      ],
      whitelist: ['html', 'body'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  )
}

module.exports = { plugins }

module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(require('./tailwind.config.js')),
    require('autoprefixer'),
  ],
};

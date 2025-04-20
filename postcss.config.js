module.exports = {
  plugins: {
    'postcss-import': {},
<<<<<<< HEAD
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' 
      ? { cssnano: { preset: 'default' } } 
      : {})
  }
}
=======
    'postcss-nesting': {},
    '@tailwindcss/postcss': {}, // Use the new package name
    'autoprefixer': {},
  },
};
>>>>>>> local-master

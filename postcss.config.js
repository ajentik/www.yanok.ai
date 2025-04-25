module.exports = {
  plugins: function() {
    // Define a base set of plugins
    const plugins = [
      'postcss-import',
      'postcss-nesting',
      'autoprefixer'
    ];

    // Try to load @tailwindcss/postcss which depends on lightningcss
    // Use a try/catch to handle potential loading errors
    try {
      const tailwindcss = require('@tailwindcss/postcss');
      return {
        'postcss-import': {},
        'postcss-nesting': {},
        '@tailwindcss/postcss': {},
        'autoprefixer': {},
        ...(process.env.NODE_ENV === 'production' ? { 'cssnano': {} } : {})
      };
    } catch (err) {
      console.warn('Warning: Could not load @tailwindcss/postcss. Using tailwindcss as fallback.');
      console.error('Original error:', err.message);

      // Try to load regular tailwindcss as fallback
      try {
        return {
          'postcss-import': {},
          'postcss-nesting': {},
          'tailwindcss': {},
          'autoprefixer': {},
          ...(process.env.NODE_ENV === 'production' ? { 'cssnano': {} } : {})
        };
      } catch (fallbackErr) {
        console.error('Failed to load tailwindcss fallback:', fallbackErr.message);
        // Return minimal plugin set to at least process CSS
        return {
          'postcss-import': {},
          'postcss-nesting': {},
          'autoprefixer': {},
          ...(process.env.NODE_ENV === 'production' ? { 'cssnano': {} } : {})
        };
      }
    }
  }
}

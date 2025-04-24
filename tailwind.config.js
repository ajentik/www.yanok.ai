/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    fontFamily: {
      jost: ['Jost', 'sans-serif'],
      sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      serif: ['ui-serif', 'Georgia', 'serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
    },
    extend: {
      colors: {
        darkerBlue: '#051b30',
        darkBlue: '#0a2540',
        teal: '#22d3ee',
        blue: '#4ade80',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
        },
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
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
        'container': '1280px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

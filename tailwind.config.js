/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
      screens: {
        '2xl': '1376px',
      }
    },
    
    extend: {
      colors: {
        'bg-color': '#121829',
        'grey-100': '#C3C8D4',
        'grey-300': '#8E95A9',
        'grey-400': '#767E94',
      },
      
    },
  },
  plugins: [],
};

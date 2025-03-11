/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF8C00',
        dark: '#1A1A1A',
      },
    },
  },
  plugins: [],
};

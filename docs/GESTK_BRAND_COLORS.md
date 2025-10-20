/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gestk: {
          primary: '#1F3A52',
          secondary: '#8B9BA8',
          accent: '#4A90E2',
          dark: '#0F2234',
          light: '#E8EDF2',
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(26, 25, 25, 1)',
        secondary: 'rgba(117, 117, 117, 1)',
        border: 'rgba(163, 163, 163, 1)',
        linear1: 'rgba(126, 144, 254, 1)',
        linear1Light: 'rgba(126, 144, 254, 0.1)',
        linear1Lighter: 'rgba(126, 144, 254, 0.05)',
        linear2: 'rgba(152, 115, 255, 1)',
        linear2Light: 'rgba(152, 115, 255, 0.1)',
        linear2Lighter: 'rgba(152, 115, 255, 0.05)',
        footerText1: 'rgba(255, 255, 255, 0.7)',
        footerText2: 'rgba(255, 255, 255, 0.4)',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


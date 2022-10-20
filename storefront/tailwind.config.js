/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display'],
        notosans: ['Noto Sans']
      },
      screens: {
        '2xl': {'min': '1535px'},
        'xl': {'min': '1279px'},
        'lg': {'min': '1023px'},
        'md': {'min': '767px'},
        'sm': {'min': '639px'},
      },
      maxWidth: {
        '1/2': '50%',
        '1/3': '33.33%',
        '3/4': '75%',
      }
    },
  },
  plugins: [],
};

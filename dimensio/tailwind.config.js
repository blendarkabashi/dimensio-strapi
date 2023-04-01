/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#2081C3',
        orange: '#FF874F',
        green: '#558B6E',
        lightGray: '#F5F5F5',
        darkGray: '#959595',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

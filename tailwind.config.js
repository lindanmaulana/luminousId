/** @type {import('tailwindcss').Config} */
export default {
  content: ["/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'InriaSans' : ['Inria Sans', 'Poppins'],
        'Abel' : ['Abel', 'Poppins'],
        'Poppins' : ['Poppins'],
        'Caveat' : ['Caveat', 'Poppins']
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        garamond : ["Garamond", "serif"],
      },
    },
    transitionProperty: {
      transform: "transform",
    },
  },
  plugins: [],
};



/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        garamond: ["Garamond", "serif"],
      },
      transitionProperty: {
        transform: "transform",
      },
      maxWidth: {
        "8xl": "90rem",  // 1440px
        "9xl": "96rem",  // 1536px
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};

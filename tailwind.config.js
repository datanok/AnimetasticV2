/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes:{
        "fade-in-left": {
          "0%": {
              opacity: 0,
              transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
              opacity: 1,
              transform: "translate3d(0, 0, 0)",
          },
      },
      animation:{
        fadeinleft: 'fade-in-left 1s ease-in-out 0.25s 1',
      }
      }
    },
  },
  plugins: [],
};

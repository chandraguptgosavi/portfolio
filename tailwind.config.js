const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        mono: ["Fira Code", "monospace"],
        cursive: ["Dancing Script", "cursive"],
      },
      transitionProperty: {
        top: "top",
      },
      colors: {
        navy: "#0a192f",
        lightNavy: "#112240",
        lightestNavy: "#233554",
        slate: "#8892b0",
        lightSlate: "#a8b2d1",
        lightestSlate: "#ccd6f6",
        white: "#e6f1ff",
        green: "#64ffda",
      },
      inset: {
        "2/100": "2%",
        "3/100": "3%",
      },
      height: {
        "11/12": "91.666667%",
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

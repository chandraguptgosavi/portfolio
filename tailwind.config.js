import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        top: "top",
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

export default config;
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#000000",
      white: "#ffffff",
      app: {
        red: "#ED1D24",
        offBlack: "#28282850",
        pink: "#FF1F9F",
        yellow: "#EEF51B",
        lightGreen: "#C1FE00",
        green: "#00E94F",
        gray: "#787878",
        orange: "#FFA616",
        blue: "#0093FF",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      myblack: "#010101",
      myyellow: "#AF9B46",
      myblue: "#6F8695",
      mywhite: "#F5F5F5",
      myred: "#D51414",
    },
    fontFamily: {
      cabin: ["Cabin", "sans-serif"],
      lf: ["Libre Franklin", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin"), require("tw-elements/dist/plugin")],
};

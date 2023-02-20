/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
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
  },
  plugins: [require("flowbite/plugin")],
};

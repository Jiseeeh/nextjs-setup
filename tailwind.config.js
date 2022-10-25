/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#393E46",
        "dark-primary": "#222831",
        secondary: "#EEEEEE",
        accent: "#00ADB5",
      },
    },
  },
  plugins: [require("daisyui")],
};

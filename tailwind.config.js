/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        120: "30rem", // Custom height value
        150: "37.5rem", // Another custom height value
      },
      width: {
        100: "24rem", // Custom height value
        150: "37.5rem", // Another custom height value
      },
    },
  },
  plugins: [],
};

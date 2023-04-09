/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      tablet: { max: "1100px" },
      largeMobile: { max: "700px" },
      mobile: { max: "600px" },
      smallLaptop: {max: "1250px", min: "1100px"},
    },
  },
  plugins: [],
};

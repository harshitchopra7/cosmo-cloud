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
      tablet: { max: "950px" },
      largeMobile: { max: "700px" },
      mobile: { max: "600px" },
    },
  },
  plugins: [],
};

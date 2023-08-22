/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-lausanne)", "sans-serif"],
        body: ["var(--font-lausanne)", "sans-serif"],
        lausanne: ["var(--font-lausanne)"],
      },
      screens: {
        desktop: { min: "1321px" },
        tablet: { min: "741px", max: "1320px" },
        mobile: { max: "740px" },
      },
    },
    colors: {
      primary: "#23E588",
      green: "#23E588",
      grey: "#EEEEEE",
      white: "#FFFFFF",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

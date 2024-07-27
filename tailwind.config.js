/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD704",
        secondary: "#05BF44",
      },
      fontFamily: {
        NSLight: ["NunitoSans-Light", "sans-serif"],
        NSMedium: ["NunitoSans-Medium", "sans-serif"],
        NSSemibold: ["NunitoSans-Semibold", "sans-serif"],
        NSBold: ["NunitoSans-Bold", "sans-serif"],
        PTSRegular: ["PTSans-Regular", "sans-serif"],
        PTSBold: ["PTSans-Bold", "sans-serif"],
      }
    },
  },
  plugins: [],
}


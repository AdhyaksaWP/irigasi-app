/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#31511e",
        secondary: "#859f3d",
        tertiary: "#00d1a4",
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


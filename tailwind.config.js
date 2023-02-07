/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Aeonik", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#D1F225",
        },
        body: "#F8F8FB",
        dark: {
          DEFAULT: "#131313",
        },
        accent: {
          DEFAULT: "#F2B925",
        },
      },
    },
  },
  plugins: [],
};

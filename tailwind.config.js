/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D3557",
        secondary: "#457B9D",
        accent: "#A8DADC",
        neutral: "#F1FAEE",
      },
    },
  },
  plugins: [],
};

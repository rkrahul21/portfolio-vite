/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode support
  content: [
    "./index.html", // Include the root HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/JSX/TS/TSX files in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
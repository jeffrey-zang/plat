/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#128DC4",
        primary_light: "#0CAED0",
        primary_dark: "#186CB8",
        outline: "rgb(223, 225, 228)"
      }
    },
  },
  plugins: [],
}
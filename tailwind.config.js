/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBgColor: "#171a21",
        white: "#fff",
        black: "#000",
        primary: {
          1: "#252a34",
          2: "#445167",
        },
        secondary: {
          1: "#267ce6",
        },
      },
    },
  },
  plugins: [],
};

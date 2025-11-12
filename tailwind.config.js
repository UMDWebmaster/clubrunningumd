/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        maryland: {
          red: "#E03A3E",
          gold: "#FFCD00",
          black: "#000000",
          white: "#FFFFFF",
          gray: "#1f1f1f",
        },
      },
      fontFamily: {
        display: [
          "Montserrat",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        mdElevated: "0 8px 24px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-image": "url('./assets/header.jpg')",
      },
    },
  },
  plugins: [],
};

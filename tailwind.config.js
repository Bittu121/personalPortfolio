/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "rgb(var(--c-page) / <alpha-value>)",
        card: "rgb(var(--c-card) / <alpha-value>)",
        content: "rgb(var(--c-content) / <alpha-value>)",
        invert: "rgb(var(--c-invert) / <alpha-value>)",
        "invert-fg": "rgb(var(--c-invert-fg) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

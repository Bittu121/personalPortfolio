/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        brand: {
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
        },
      },
      animation: {
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99, 102, 241, 0.2)" },
          "50%": { boxShadow: "0 0 50px rgba(99, 102, 241, 0.5)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

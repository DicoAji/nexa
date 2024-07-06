/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: "#E4A012",
      },
      opacity: {
        65: "0.65",
      },
      backgroundImage: {
        "hero-header": "url('/public/img/hero-header.png')",
        "product-gif": "url('/public/img/hero.gif')",
      },
    },
  },
  plugins: [],
};

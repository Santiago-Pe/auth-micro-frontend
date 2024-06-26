/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#fff",
      gray: "#e5e7eb",
      violet: "#4c1d95",
      red: "#dc2626",
    },
    extend: {
      transitionDuration: {
        600: "600ms",
      },
      transitionProperty: {
        width: "width",
        transform: "transform",
        colors: "colors",
      },
      transitionTimingFunction: {
        "in-out": "ease-in-out",
      },
    },
  },
  plugins: [],
};

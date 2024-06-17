/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        1000: "1000ms",
      },
      transitionProperty: {
        width: "width",
        transform: "transform",
      },
      transitionTimingFunction: {
        "in-out": "ease-in-out",
      },
    },
  },
  plugins: [],
};

/*


*/

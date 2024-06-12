/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#f8fafc",
      gray: {
        400: "#9ca3af",
        700: "#374151",
        900: "#111827",
        950: "#030712",
      },
      teal: {
        400: "#2dd4bf",
        600: "#0891b2",
        700: "#0e7490",
        900: "#164e63",
        950: "#083344",
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

/*


*/

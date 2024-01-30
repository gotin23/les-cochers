/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      white: "#f9f6f6",
      red: "#d31703",
      green: "#097405",
      redHover: "#e44c3b",
      greenHover: "#30a92c",
    },
    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1279px" },

      lg: { max: "1060px" },

      md: { max: "840px" },

      sm: { max: "700px" },
    },
  },
  plugins: [],
};

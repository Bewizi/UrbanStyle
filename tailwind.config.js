/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "100px", max: "480px" },
      tab: { min: "481px", max: "768px" },
      mcom: { min: "769px", max: "1024px" },
      com: { min: "1024px", max: "1512px" },
      tv: { min: "1513px", max: "2067px" },
      cin: { min: "2068px" },
    },
    extend: {
      colors: {
        primary: "#414141",
        secondary: "#EBEBEB",
        "Charcoal-Gray": "#121212",
        "Dark-Gray": "#333333",
        Gunmetal: "#595959",
        Sconce: "#5E5E5E",
        DimGray: "#2A2A2A",
        Plantium: "#F5F5F5",
      },
    },
  },
  plugins: [],
};

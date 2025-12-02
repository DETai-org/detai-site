module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        basic: {
          dark: "#050509",
          light: "#F6F1E9",
          gold: {
            primary: "#E2B768",
            dark: "#CBA95C",
            soft: "#FFF6E0",
          },
        },
      },
      fontFamily: {
        serif: ["Lora", "serif"],
        sans: ["Open Sans", "sans-serif"],
        accent: ["Great Vibes", "cursive"],
      },
      borderRadius: {
        lg: "12px",
        xl: "16px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [],
};

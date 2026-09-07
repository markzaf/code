module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FF2D55",
          dark: "#E0244C"
        },
        accent: "#0A84FF",
        surface: "#F6F7F9",
        midgray: "#6B7280",
        text: "#111827",
        darkSurface: "#0B0D10",
        darkElevated: "#121316"
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        xxl: "48px"
      },
      borderRadius: {
        md: "8px"
      },
      boxShadow: {
        card: "0 1px 6px rgba(16,24,40,0.06)"
      }
    }
  },
  plugins: []
};

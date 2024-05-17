/**
  @type {import("tailwindcss").Config}
*/
export default {
  content: [
    "src/**/*.{css,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gray: "#D4D9E3",
        blue: {
          100: "#B8DEE7",
          200: "#9ACFDD",
          300: "#7BC1D2",
          400: "#5DB2C8",
          500: "#40A3BC",
          600: "#327F92",
          700: "#245A68",
          800: "#15363E",
          900: "#071215"
        },
        red: {
          100: "#E7BCB8",
          200: "#DD9F9A",
          300: "#D2827B",
          400: "#C8665D",
          500: "#BC4A40",
          600: "#923A32",
          700: "#682924",
          800: "#3E1915",
          900: "#150807"
        },
        yellow: {
          100: "#ECD7BA",
          200: "#E3C59A",
          300: "#DBB37A",
          400: "#D2A05A",
          500: "#C98E3A",
          600: "#9F702C",
          700: "#735120",
          800: "#473214",
          900: "#1B1307"
        },
        green: {
          100: "#C0E7B8",
          200: "#A5DD9A",
          300: "#8AD27B",
          400: "#70C866",
          500: "#55BC40",
          600: "#429232",
          700: "#2F6824",
          800: "#1C3E15",
          900: "#091507"
        },
        "blue-start": "#3BAFDA",
        "blue-end": "#0D9DC7"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-btn": "linear-gradient(to right, #7BC1D2, #327F92)"
      }
    }
  },
  plugins: []
};

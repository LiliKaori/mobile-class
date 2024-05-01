/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange50: { DEFAULT: "#FFF0E8" },
        orange100: { DEFAULT: "#FFD2B9" },
        orange200: { DEFAULT: "#FFBC97" },
        orange300: { DEFAULT: "#FF9D68" },
        orange400: { DEFAULT: "#FF8A4A" },
        orange500: { DEFAULT: "#FF6D1D" },
        orange600: { DEFAULT: "#E8631A" },
        orange700: { DEFAULT: "#B54D15" },
        orange800: { DEFAULT: "#8C3C10" },
        orange900: { DEFAULT: "#6B2E0C" },
        yellow50: { DEFAULT: "#FFF6E8" },
        yellow100: { DEFAULT: "#FFE3B7" },
        yellow200: { DEFAULT: "#FFD695" },
        yellow300: { DEFAULT: "#FFC364" },
        yellow400: { DEFAULT: "#FFB746" },
        yellow500: { DEFAULT: "#FFA518" },
        yellow600: { DEFAULT: "#E89616" },
        yellow700: { DEFAULT: "#B57511" },
        yellow800: { DEFAULT: "#8C5B0D" },
        yellow900: { DEFAULT: "#6B450A" },
        gray50: { DEFAULT: "#fcfcfc" },
        gray100: { DEFAULT: "#F6F5F5" },
        gray200: { DEFAULT: "#F1F0F0" },
        gray300: { DEFAULT: "#EBE9E9" },
        gray400: { DEFAULT: "#E7E5E5" },
        gray500: { DEFAULT: "#E1DEDE" },
        gray600: { DEFAULT: "#CDCACA" },
        gray700: { DEFAULT: "#A09E9E" },
        gray800: { DEFAULT: "#7C7A7A" },
        gray900: { DEFAULT: "#5F5D5D" },
        neutrals50: { DEFAULT: "#E9EAEC" },
        neutrals100: { DEFAULT: "#BCBFC3" },
        neutrals200: { DEFAULT: "#9ba0a6" },
        neutrals300: { DEFAULT: "#6E747D" },
        neutrals400: { DEFAULT: "#515964" },
        neutrals500: { DEFAULT: "#26303D" },
        neutrals600: { DEFAULT: "#232C38" },
        neutrals700: { DEFAULT: "#1B222B" },
        neutrals800: { DEFAULT: "#151A22" },
        neutrals900: { DEFAULT: "#10141A" },
        green: { DEFAULT: "#2DB224" },
        greenLight: { DEFAULT: "#4CE13F" },
        red: { DEFAULT: "#FF0000" },
        grayTransparent: { DEFAULT: "#D9D9D980" },
      },
      // textColor: {
      //   // Define o texto padrão para usar a cor Neutrals500 se nenhuma cor for especificada
      //   default: 'var(--colors-neutrals500)',
      // },
      fontSize: {
        10: 10,
        11: 11,
        12: 12,
        14: 14,
        16: 16,
        18: 18,
        20: 20,
        24: 24,
        28: 28,
        48: 48,
      },
    },
  },
};

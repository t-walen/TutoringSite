/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Black: "#010101",
        Pearl: "#e6ddd6",
        Grey: "#918983",
        DarkPurple: "#682bd7",
        LightPurple: "#a37cf0",
        Pink:"#bd2e95",
        Brown: "#5b3629",
        Lightbrown: "#EADDCA",
        LightBlue: "#CAEBF2",
        LightGrey: "#A9A9A9",
        Red:"#FF3B3F",
        NeutralGrey:"#EFEFEF",
        PinkGrey:"#DBD3D8"
       },
       fontfmily:{
        mr: ["var(--font-mr)"],
        in: ["var(--font-in)"],
       },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

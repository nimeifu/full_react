module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black_900_cc: "#000000cc",
        black_900: "#000000",
        gray_800: "#424242",
        light_blue_A700: "#0192fd",
        black_900_3f: "#0000003f",
        white_A700: "#ffffff",
        cyan_A700: "#1aa8d3",
        black_900_bf: "#000000bf",
        gray_100: "#f5f5f5",
      },
      fontFamily: { inter: "Inter" },
      textShadow: { ts: "0px 4px  4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};

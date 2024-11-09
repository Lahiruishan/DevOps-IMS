module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        indigo: { 100: "#c3dae7", 300: "#7d95b8", 900: "#112e5a", A200: "#4673e7" },
        purple: { 50: "#f2e1f4" },
        white: { A700: "#ffffff" },
        blue_gray: { 100: "#d9d9d9", 900: "#070e4f" },
        black: { 900: "#000000" },
        blue: { 200: "#9fb8f9" },
      },
      boxShadow: { xs: "0px 4px  4px 0px #0000003f", bs: "inset 0px 4px  4px 0px #0000003f" },
      fontFamily: { inter: "Inter", aclonica: "Aclonica" },
      backgroundImage: { gradient: "linear-gradient(180deg, #8bd7ef,#47a1bfea,#a3d7f500)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

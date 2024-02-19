module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SofiaBold: ['"SofiaBold"'],
        SofiaMedium: ['"SofiaMedium"'],
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'mobile':"480px"
    },
    fontFamily: {
      // sans: ["Syne", "sans-serif"],
    },
    extend: {
      colors:{
        primary:"#fff9ea",
        secondary:"#ff7f32",
        accent:"#10393b"
      }
    },
  },
  plugins: [],
}
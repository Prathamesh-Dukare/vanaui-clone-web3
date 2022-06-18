module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'mobile':"480px",
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    fontFamily: {
      // sans: ["Syne", "sans-serif"],
    },
    extend: {
      colors:{
        primary:"#fff9ea",
        secondary:"#ff7f32",
        'secondary-light':"#f99e48",
        accent:"#10393b",
        'accent-bg':"#f5f8fa",
        'accent-light':"#e2e2e2",

      }
    },
  },
  plugins: [],
}
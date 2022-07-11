module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#FFA323",
        secondary: "#0F172A"
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(1%)' },
          '50%': { transform: 'translateX(-1%)' },
        }
      },
      animation: {
        wiggle: 'wiggle 0.3s ease-in-out ',
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#0067B8",
        "dark-blue": "#014173",
        grey: "#F2F2F2",
      },
      maxWidth: {
        title: "110px",
      },
    },
  },
  plugins: [],
};

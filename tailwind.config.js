/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      body: ["Spartan"],
    },
    extend: {
      colors: {
        accent: "#b38736",
      },
    },
  },
  plugins: [],
};

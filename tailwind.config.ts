/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./styles/*.css",

 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
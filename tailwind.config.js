/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // enable dark mode via class strategy
  darkMode: 'class',

  theme: {
    extend: {
      
    },
  },
  plugins: [
    require('flowbite/plugin'),
    "@babel/plugin-transform-react-jsx", {
      "throwIfNamespace": false
    }
  ],
}


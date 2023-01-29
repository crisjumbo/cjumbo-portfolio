/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'main-blue': '#C2D0DE',
            'linkedin-blue': '#4875B4',
            'github-black': '#333333',
            'github-white-one': '#f5f5f5'
        }
    },
  },
  plugins: [],
}

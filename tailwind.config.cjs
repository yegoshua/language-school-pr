/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-blue': '#00DDDD',
        'bg-col-var1': '#ECEFFF',
        'card-level': '#153BFF',
      },
    },
  },
  plugins: [],
}

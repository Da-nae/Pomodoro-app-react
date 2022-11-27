/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bisque': '#ffe4c4',
        'dark-salmon': '#e9967a',
        'txtgrey': '#4A5568',
        'pine': '#6E9887',
        'blueish': '#79B4A9',
      },
      textColor: {
        "grey" : "v#4A5568",
        "title" : "var(--color-secondary)",
      },
    backgroundColor: {
      "dark" : "var(--color-primary)",
      "light" : "var(--color-secondary)",
    },
    },
  },
  plugins: [],
}

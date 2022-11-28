/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'txtgrey': '#4A5568',
        'darker': "var(--color-primary)",
        'light' : 'var(--color-secondary)',
        'darker-op' : 'var(--color-opposite-dark)',
        'light-op' : 'var(--color-opposite-light)'
      },
      textColor: {
        "grey" : "#4A5568",
        "title" : "var(--color-secondary)",
      },
      backgroundColor: {
        "darker" : "var(--color-primary)",
        "light" : "var(--color-secondary)",
      },
    },
  },
  plugins: [],
}

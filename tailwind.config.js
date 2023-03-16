/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    extend: {},
    colors: {
      'lyell': '#d7aa43',
      'khaki': '#d7aa43',
      'dmint': '#8CBA80',
      'green': '#6C9A60',
      'black': '#030F07',
      'mgray': '#AAAAAA',
      'lgray': '#CCCCCC',
      'white': '#EEEEEE',
      'lblue': '#e69429',
      'lorng': '#282828',
      'dorng': '#212121',
      'bblue': '#e69429',
    }
  },
  plugins: [],
}
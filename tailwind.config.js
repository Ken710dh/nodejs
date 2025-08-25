/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/views/**/*.hbs",   // theo dõi toàn bộ file hbs
    "./src/public/**/*.js"    // nếu có js cần purge
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
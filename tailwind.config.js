module.exports = {
  darkMode: "class",
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./src/**/*.vue",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.html",
      "./src/**/*.pug",
      "./src/**/*.md",
    ],
    safelist: [
      "body",
      "html",
      "img",
      "a",
      "ol",
      "ul",
      "g-image",
      "g-image--lazy",
      "g-image--loaded",
    ],
  },
  theme: {
    fontFamily: {},
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};

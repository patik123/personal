const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcssPlugins = [tailwind(), autoprefixer()];
module.exports = {
  siteName: "Hey Hygge",
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
};

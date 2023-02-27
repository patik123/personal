const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcssPlugins = [tailwind(), autoprefixer()];
module.exports = {
  siteName: "Hej Hygge",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "BlogPost",
        path: "./blog/**/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Content",
        path: "./content/**/*.md",
      },
    },
    {
      use: 'gridsome-plugin-sentry',
      options: {
        dsn: process.env.GRIDSOME_SENTRY_DSN,
        attachProps: true,
        logErrors: process.env.NODE_ENV === 'development',
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  templates: {
    BlogPost: "/blog/:slug",
  },
};

const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcssPlugins = [tailwind(), autoprefixer()];
module.exports = {
  siteName: "Hej Hygge",
  siteDescription: "Blog o načinu življenja v skandinavskem slogu.",
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
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
      },
    },
    {
      use: "gridsome-plugin-sentry",
      options: {
        dsn: process.env.GRIDSOME_SENTRY_DSN,
        attachProps: true,
        logErrors: process.env.NODE_ENV === "development",
      },
    },
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

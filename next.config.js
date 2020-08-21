const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

console.log(process.env.NODE_ENV)

const PWA =
  process.env.NODE_ENV === "development"
    ? {}
    : withPWA({
        pwa: {
          dest: "public",
          runtimeCaching,
        },
      });

module.exports = withCSS(withSass(PWA));

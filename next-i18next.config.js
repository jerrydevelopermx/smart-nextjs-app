const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
    localePath: path.resolve("./public/locales"),
    otherLanguages: ["en", "es"],
    defaultLanguage: "es",
    fallbackLng: ["es"],
  },
};
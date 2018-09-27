const postcssCssNext = require("postcss-cssnext");
const postcssImport = require("postcss-import");

module.exports = {
  plugins: [
    postcssImport, /*order of the plugin is important | 1st cssNext is applied and then import | last to first*/
    postcssCssNext
  ]
};
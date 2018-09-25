const postcssCssNext = require("postcss-cssnext");
const postcssImport = require("postcss-import");

module.exports = {
  plugins: [
    postcssCssNext,
    postcssImport /*order of the plugin is important | 1st impost is applied and then cssNext | last to first*/
  ]
};
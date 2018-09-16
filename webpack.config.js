const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  "mode": "development",
  "entry": "./src/index.js",
  "output": {
    "path": __dirname + '/dist',
    "filename": "[name].[chunkhash:8].js"
  },
  "devtool": "source-map",
  "module": {
    "rules": [
      {
        "test": /\.js$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader"
        }
      },
      {
        "test": /\.css$/,
        "use": [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      favicon: './favicon.png'
    })
  ]
};
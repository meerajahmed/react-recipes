const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  "mode": "development",
  "context": path.join(__dirname, 'src'),
  "entry": "./index.js",
  "output": {
    "path": path.join(__dirname, 'dist'),
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
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
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
      template: './index.html',
      favicon: './favicon.png'
    })
  ]
};
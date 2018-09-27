const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

require('dotenv').config();

module.exports = {
  mode: 'development',
  context: path.join(__dirname, 'src'),
  entry: ['whatwg-fetch', './index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash:8].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // 3. load styles in HTML head tag
          'css-loader', // 2. load styles using require
          'postcss-loader', // 1. convert cssNex to normal css using config postcss.config.js
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      favicon: './favicon.png',
    }),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL),
    }),
  ],
};

/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.resolve(__dirname, '../src/');
const dist = path.resolve(__dirname, '../dist/');

module.exports = {
  entry: `${src}/client.jsx`,

  output: {
    filename: 'bundle.js',
    path: dist,
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.json?$/,
        loader: 'json-loader',
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin({
    template: `${src}/index.tpl.html`,
  })],
};
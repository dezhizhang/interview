/*
 * :file description:
 * :name: /interview/weback.config.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-07 22:26:50
 * :last editor: 张德志
 * :date last edited: 2024-04-07 22:33:22
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js',
  },
  devServer: {
    port: 8002,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.glsl$/,
        use: ['webpack-glsl-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
    }),
  ],
};

/*
 * :file description:
 * :name: /webpack/webpack.common.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-05-03 21:07:12
 * :last editor: 张德志
 * :date last edited: 2024-05-03 21:32:22
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
    port: 8000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
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

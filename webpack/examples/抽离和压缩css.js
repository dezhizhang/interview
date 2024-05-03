/*
 * :file description: 
 * :name: /webpack/examples/抽离和压缩css.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-05-03 22:34:11
 * :last editor: 张德志
 * :date last edited: 2024-05-03 22:34:12
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
    other: path.resolve(__dirname, 'src/other.js'),
  },
  // entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[hash:8].js',
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: './public/other.html',
      inject: 'body',
      filename: 'other.html',
      chunks: ['other'],
    }),
    new MiniCssExtractPlugin({
      filename:'css/[hash:8].css',
    })
  ],
  optimization:{
   // 压缩css
   minimizer:[new TerserPlugin({}),new OptimizeCssAssetsPlugin()]
  }

};

/*
 * :file description:
 * :name: /webpack/examples/2分割代码块.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-05-03 21:07:12
 * :last editor: 张德志
 * :date last edited: 2024-05-04 21:32:41
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
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
      // 分割代码块 加入引用模块
      chunks: ['index', 'vendor', 'common'],
    }),
    new HtmlWebpackPlugin({
      template: './public/other.html',
      inject: 'body',
      filename: 'other.html',
      // 分割代码块 加入引用模块
      chunks: ['other', 'vendor', 'common'],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[hash:8].css',
    }),
  ],
  optimization: {
    // 压缩css
    minimizer: [new TerserPlugin({}), new OptimizeCssAssetsPlugin()],

    // 分割代码块
    splitChunks: {
      // all 全部
      chunks: 'all',

      // 缓存分组
      cacheGroups: {
        // 第三方模块
        vendor: {
          // thunk名称
          name: 'vendor',
          // 优先抽离
          priority: 1,
          test: /node_modules/,
          // 大小限制
          minSize: 0,
          // 最少复用几次
          minChunks: 1,
        },

        // 公共的模块
        common: {
          // thunk名称
          name: 'common',
          // 优先级
          priority: 1,
          minSize: 0,
          // 最少复用几次
          minChunks: 2,
        },
      },
    },
  },
};

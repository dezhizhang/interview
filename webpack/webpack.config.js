/*
 * :file description:
 * :name: /webpack/webpack.config.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-07-25 22:20:46
 * :last editor: 张德志
 * :date last edited: 2024-09-30 20:40:52
 */
const os = require("os");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const BannerWebpackPlugin = require("./plugins/banner-webpack-plugin");
const ClearWebpackPlugin = require('./plugins/clear-webpack-plugin');
const WorkboxPlugin = require("workbox-webpack-plugin");

const threads = os.cpus().length;

module.exports = {
  // 模式
  mode: "production",
  devtool: "source-map",
  stats: {
    children: true,
  },
  // 多入口
  // entry: {
  //   app: "./src/app.js",
  //   main: "./src/main.js"
  // },
  entry: "./src/main.js",

  // 出口
  output: {
    // 文件输出路径
    path: path.resolve(__dirname, "build"),
    // 输出文件名
    // filename: "js/[name].js",
    // // 分包后的命名
    // chunkFilename:'js/[name].chunk.js',
    // 自动清空上次打包内容
    // clean: true,
  },
  devServer: {
    port: 8082,
    open: true,
    hot: true, // 开启HMR功能
  },
  // 加载器
  module: {
    rules: [
      {
        test: /\.(png | jpe?g|gif)$/,
        loader: "./loaders/file-loader",
        type: "javascript/auto",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // 插入
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new ClearWebpackPlugin(),
    // new BannerWebpackPlugin(),
  ],
};

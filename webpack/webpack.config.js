const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 模式
  mode: "development",
  // 入口
  entry: "./src/main.js",
  // 出口
  output: {
    // 文件输出路径
    path: path.resolve(__dirname, "build"),
    // 输出文件名
    filename: "main.js",
  },
  // 加载器
  module: {
    rules: [
      {
        test: /\.css$/,
        // 执行顺序从右到左（从下到上）
        use: ["style-loader", "css-loader"],
      },
      {
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader']
      },
      {
        test:/\.s[ac]ss$/,
        use:['style-loader','css-loader','sass-loader']
      }
    ],
  },
  // 插入
  plugins: [
    new HtmlWebpackPlugin({
      inject:'body',
      template: './public/index.html'
    })
  ],
};

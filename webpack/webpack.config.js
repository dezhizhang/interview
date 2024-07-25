const path = require("path");

module.exports = {
  // 模式
  mode:'development',
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
  module:{
    rules:[]
  },
  // 插入
  plugins:[]


};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const EsLintWebpackPluin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');



module.exports = {
  // 模式
  mode: "development",
  devtool:'source-map',
  stats: {
    children: true,
  },
  // 入口
  entry: "./src/main.js",
  // 出口
  output: {
    // 文件输出路径
    path: path.resolve(__dirname, "build"),
    // 输出文件名
    filename: "js/main.js",
    // 自动清空上次打包内容
    clean: true,
  },
  devServer: {
    port: 8080,
    open: true,
    hot:true, // 开启HMR功能
  },
  // 加载器
  module: {
    rules: [
      {
        oneOf:[
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
              },
            },
          },
          {
            test: /\.css$/,
            // 执行顺序从右到左（从下到上）
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      'postcss-preset-env'
                    ]
                  }
                }
              }
            ]
          },
          {
            test: /\.less$/,
            // 执行顺序从右到左（从下到上）
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      'postcss-preset-env'
                    ]
                  }
                }
              },
              "less-loader"
            ],
          },
          {
            test: /\.s[ac]ss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
          {
            test: /\.styl$/,
            // 执行顺序从右到左（从下到上）
            use: ["style-loader", "css-loader", "stylus-loader"],
          },
          {
            test: /\.(ttf|woff2)$/,
            type: "asset/resource",
            generator: {
              filename: "font/[hash:8][ext][query]",
            },
          },
          {
            test: /\.(png|jpeg|gif|webp)$/,
            type: "asset",
            parser: {
              dataUrlCondition: {
                // 小于10kb
                maxSize: 10 * 1024,
              },
            },
            generator: {
              filename: "img/[hash:10][ext][query]",
            },
          },
          {
            test: /\.(map4|map3|avi)$/,
            type: "asset/resource",
            generator: {
              filename: "media/[hash:10][ext][query]",
            },
          },

        ]
      }
    ],
  },
  // 插入
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    }),
    new CssMinimizerWebpackPlugin(),

    // new EsLintWebpackPluin({
    //   context: path.resolve(__dirname, "src"),
    // }),
  ],
};
const os = require('os');
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const EsLintWebpackPluin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');


const threads = os.cpus().length;


module.exports = {
  // 模式
  mode: "development",
  devtool: "source-map",
  stats: {
    children: true,
  },
  // 多入口
  // entry: {
  //   app: "./src/app.js",
  //   main: "./src/main.js"
  // },
  entry:"./src/main.js",

  optimization:{
    runtimeChunk:{
      name:(entrypoint) => `runtime~${entrypoint.name}.js`, 
    }
  },
  // 出口
  output: {
    // 文件输出路径
    path: path.resolve(__dirname, "build"),
    // 输出文件名
    filename: "js/[name].js",
    // 分包后的命名
    chunkFilename:'js/[name].chunk.js',
    // 自动清空上次打包内容
    clean: true,
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
        oneOf: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use:[
              {
                loader:'thread-loader',
                options:{
                  threads:threads
                }
              },
              {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env"],
                  // 开启babel缓存
                  cacheDirectory: true,
                  // 关闭缓存文件压缩
                  // cacheCompression: false,
                  plugins:['@babel/plugin-transform-runtime']
                },
              },
            ]
          },
          {
            test: /\.css$/,
            // 执行顺序从右到左（从下到上）
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  postcssOptions: {
                    plugins: ["postcss-preset-env"],
                  },
                },
              },
            ],
          },
          {
            test: /\.less$/,
            // 执行顺序从右到左（从下到上）
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  postcssOptions: {
                    plugins: ["postcss-preset-env"],
                  },
                },
              },
              "less-loader",
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
        ],
      },
    ],
  },
  // 插入
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "css/main.css",
    }),
    new CssMinimizerWebpackPlugin(),

    new PreloadWebpackPlugin({
      rel: 'preload',
      as: 'script'
    }),
    new WorkboxPlugin.GenerateSW({
      // 这些选项帮助快速启用 ServiceWorkers
      // 不允许遗留任何“旧的” ServiceWorkers
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};

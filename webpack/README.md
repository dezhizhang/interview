# webpack 面试题

### 基本配置

```js
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
```

### 多入口与多出口

```js
// 多入口
entry:{
  index:path.resolve(__dirname,'src/index.js'),
  other:path.resolve(__dirname,'src/other.js')
},
// 多出口
output: {
  path: path.resolve(__dirname, 'build'),
  filename: '[name].[contentHash:8].js',
},
// 多页面
 plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
      filename:'index.html',
      chunks:['index']
    }),
    new HtmlWebpackPlugin({
      template:'./public/other.html',
      inject: 'body',
      filename:'other.html',
      chunks:['other']
    })
  ],

```

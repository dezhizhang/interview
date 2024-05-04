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

### 抽离和压缩 css

```js
{
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
},
{
  test: /\.less$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader'],
},

new MiniCssExtractPlugin({
  filename:'css/[hash:8].css',
})

optimization:{
  // 压缩css
  minimizer:[new TerserPlugin({}),new OptimizeCssAssetsPlugin()]
}
```

### 分割代码块

```js
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
```
### 懒加载
```js
setTimeout(() => {
    // 懒加载
  import('./dynamic-data.js').then((res) => {
    console.log('res', res.default);
  });
}, 1000);
```
### module chunk bundle的区别
```js
module 各个源码文件 webpack中一切皆模块
chunk 多个模块合并成的, 如entry import() splitChunk
bundle 最终的输出文件
```



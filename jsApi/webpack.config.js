/*
 * :file description: 
 * :name: /jsApi/webpack.config.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:48:41
 * :last editor: 张德志
 * :date last edited: 2024-04-18 05:52:51
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "build.js"
    },
    devServer: {
        port: 8000,
        open: true
    },
    module: {
        rules: [{
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.glsl$/,
                use: ['webpack-glsl-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: 'body'
        })
    ]
}
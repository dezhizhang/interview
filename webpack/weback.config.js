/*
 * @Author: your name
 * @Date: 2021-03-08 22:54:30
 * @LastEditTime: 2021-03-08 23:14:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/weboack.config.js
 */

 const path = require('path');
 module.exports = {
    entry:'./src/index.ts',
    mode:'development',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'build.js'
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:'ts-loader',
                exclude:/node-modules/
            }
        ]
    }

 }

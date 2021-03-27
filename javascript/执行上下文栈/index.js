/*
 * @Author: your name
 * @Date: 2021-03-27 19:23:09
 * @LastEditTime: 2021-03-27 19:27:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /javascript/执行上下文栈/index.js
 */



console.log('gb:' + i);
var i = 1;
foo(1)

function foo(i) {
    if(i == 4) {
        return
    }
    console.log('fb:'+ i)
    foo(i+1)
    console.log('fe'+i)
}

console.log('ge'+i);

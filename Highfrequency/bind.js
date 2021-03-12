/*
 * @Author: your name
 * @Date: 2021-03-12 18:35:12
 * @LastEditTime: 2021-03-12 18:48:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/Highfrequency/bind.js
 */


// Function.prototype.myBind = function() {
//     const args = Array.prototype.slice.call(arguments);
//     //获取this
//     const t = args.shift();
//     const that = this;
//     return function() {
//         return that.apply(t,args);
//     }
// }

// Function.prototype.myBind = function() {
//     const args = Array.prototype.slice.call(arguments);
//     const t = args.shift();
//     const that = this;
//     return function() {
//         return that.apply(t,args);
//     }
// }

Function.prototype.myBind = function() {
    const args = Array.prototype.slice.call(arguments);
    const t = args.shift();
    const that = this;
    return function() {
        return that.apply(t,args);
    }
}

function fn1(a,b,c) {
    console.log('this',this);
    console.log(a,b,c);
    return 'this is fn1';
}

const fn2 = fn1.myBind({x:100},10,20,30);
const res = fn2();
console.log(res);
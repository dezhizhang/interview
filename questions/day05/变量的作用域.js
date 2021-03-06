/*
 * @Author: your name
 * @Date: 2021-03-06 10:29:11
 * @LastEditTime: 2021-03-06 10:50:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /questions/day05/变量的作用域.js
 */

// let b = 10;
// (function b() {
//     b = 20
//     console.log(b);
// })();

// console.log(b);

// let b = 10;
// (function b() {
//     b = 20
//     console.log(b);
// })()

// console.log(b);

let b = 10;
(function b() {
    b = 20
    console.log(b);
})();

console.log(b);





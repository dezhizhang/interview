/*
 * @Author: your name
 * @Date: 2021-03-12 17:59:13
 * @LastEditTime: 2021-03-12 18:26:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/Highfrequency/原型与原型链.js
 */


 //函数作为返回值
//  function create() {
//     const a = 100;
//     return function() {
//         console.log(a);
//     }
//  }

//  let fn = create();
//  const a = 200;
//  fn()

//函数作为参数
function print(fn) {
    const a = 200;
    fn();
}

const a = 100;
function fn() {
    console.log(a);
}

print(fn);

 
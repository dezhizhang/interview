/*
 * @Author: your name
 * @Date: 2021-03-07 01:25:18
 * @LastEditTime: 2021-03-07 01:40:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/promise/3常见错误.js
 */


//  console.log(a);


// let b 
// console.log(b.xxx);

let num = 1;
function fn() {
    num++
    if(num < 100000) return
    fn()
   
}
fn();
console.log(num);



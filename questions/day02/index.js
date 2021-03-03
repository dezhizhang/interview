/*
 * @Author: your name
 * @Date: 2021-03-03 22:51:07
 * @LastEditTime: 2021-03-03 23:16:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day02/index.js
 */

//  function fn() {
//      console.log(arguments);
//  }

//  let obj = {}
//  fn.call(obj,10,20,30);
//  fn.apply(obj,[30,40,50,60]);


// function fn() {
//     console.log(arguments);
// }

// let obj = {};
// fn.call(obj,10,20,30);
// fn.apply(obj,[30,40,50]);

// function fn() {
//     console.log(arguments);
// }

// let obj = {};
// fn.call(obj,10,20,30);
// fn.apply(obj,[30,40,50]);

function fn(x,y,z) {
    console.log(x);
    console.log(y);
    console.log(z);
    
    console.log(arguments);
}
let arr = [10,20,30];
let obj = {};
fn.call(obj,...arr)

 
 

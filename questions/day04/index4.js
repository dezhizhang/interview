/*
 * @Author: your name
 * @Date: 2021-03-05 17:25:58
 * @LastEditTime: 2021-03-05 17:58:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day04/index4.js
 */


//  let obj = {
//      name:"obj"
//  }

//  function fn1() {
//      console.log(this);
//  }

//  fn1.call(obj);

//  let fn2 = () => {
//      console.log(this)
//  }

//  fn2.call(obj);

// let fn2 = (...arg) => {
//     console.log(arg);
// }

// fn2(1,2,3,4);

// let fn2 = (...arg) => {
//     console.log(arg);
// }

// fn2(1,2,3,4);

// let fn2 = (...arg) => {
//     console.log(arg);
// }
// fn2(1,2,3,4);

let Fn = () => {
    this.x = 200;
}

let f = new Fn();





 
 
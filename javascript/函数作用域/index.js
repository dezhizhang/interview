/*
 * @Author: your name
 * @Date: 2021-03-27 20:45:55
 * @LastEditTime: 2021-03-27 21:00:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /javascript/函数作用域/index.js
 */


//  var x = 10
//  function fn() {
//      console.log(x);
//  }

//  function show(f) {
//      var x = 20
//      f()
//  }

//  show(fn);

// var x = 10;
// function fn() {
//     console.log(x);
// }

// function show(f) {
//     var x = 20
//     f()
// }

// show(fn);

// var x = 10;
// function fn() {
//     console.log(x);
// }

// function show(f) {
//     var x = 20
//     fn()
// }

// show(fn);

var x = 10;
function fn() {
    console.log(x);
}

function show(f) {
    var x = 20;
    fn();
}

show(fn);



 
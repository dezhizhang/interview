/*
 * @Author: your name
 * @Date: 2021-03-06 21:57:45
 * @LastEditTime: 2021-03-06 22:02:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day06/定时器问题.js
 */


//  var a = 6
//  setTimeout(function() {
//      var a = 666
//      console.log(a)
//  },1000)

//  a = 66
//  console.log(a);

function setN(obj) {
    obj.name = 'hello';
    obj = new Object();
    obj.name = "world";
}

var per = new Object();
setN(per);
console.log(per.name);

 
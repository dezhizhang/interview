/*
 * @Author: your name
 * @Date: 2021-03-07 01:12:48
 * @LastEditTime: 2021-03-07 01:21:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/promise/二种类型的回调函数.js
 */


//  const arr = [1,3,5];
//  arr.forEach(item => {
//      console.log(item);
//  });
//  console.log("forEach之后");

setTimeout(()=>{
    console.log('time callback');
},0)

console.log('setTimeout之后');

 
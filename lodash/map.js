/*
 * @Author: your name
 * @Date: 2021-03-13 19:55:30
 * @LastEditTime: 2021-03-13 20:11:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/lodash/map.js
 */



 const arr = [1,3,6,9,15,19,16];
//  let res = arr.map(item => {
     
//  });

//  console.log('item',res);



const res = arr.find((item,index) => item > 8 && index %2 === 0);
console.log('res',res);

// const res = arr.filter((item,index) => item > 8 && index % 2 === 0 );

 
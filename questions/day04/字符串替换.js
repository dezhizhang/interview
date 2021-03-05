/*
 * @Author: your name
 * @Date: 2021-03-05 18:08:45
 * @LastEditTime: 2021-03-05 18:25:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day04/index5.js
 */

//  let str = "dezhiZhang哈哈哈 HAHA";

//  str = str.replace(/[a-zA-Z]/g,item => {
//     return item.charCodeAt() >=65 && item.charCodeAt() <=90 ? item.toLowerCase():item.toUpperCase()
//  });

//  console.log(str);

// let str = "dezhiZhang哈哈哈 HAHA";
// str = str.replace(/[a-zA-Z]/g,item => {
//     return item.charCodeAt() >=65 && item.charCodeAt() <=90 ? item.toLowerCase():item.toUpperCase();
// });

// console.log(str);

let str = "dezhiZhang哈哈哈 HAHA";
str = str.replace(/[a-zA-Z]/g,item => {
    return item.charCodeAt() >=65 && item.charCodeAt() <=90 ? item.toLowerCase():item.toUpperCase();
});

console.log("str",str);



 

/*
 * @Author: your name
 * @Date: 2021-03-06 21:16:14
 * @LastEditTime: 2021-03-06 21:21:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day06/index9.js
 */

let str = "12345678";
let newStr = '';
for(let i=str.length - 1;i >=0;i--) {
    newStr+= `${str[i]}`
}


 console.log(newStr);
 
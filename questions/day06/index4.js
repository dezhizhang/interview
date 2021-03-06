/*
 * @Author: your name
 * @Date: 2021-03-06 17:50:00
 * @LastEditTime: 2021-03-06 17:54:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day06/index4.js
 */


let arr = [1,3,1,5,2,3,7];
let newArr = [...new Set(arr)];
console.log(newArr);

// let ary = [];
// for(let i=0;i < arr.length;i++) {
//     let item = arr[i];
//     let newArr = arr.slice(i+1);
//     if(!newArr.includes(item)) {
//         ary.push(item)
//     }
// }



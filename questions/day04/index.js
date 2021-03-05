/*
 * @Author: your name
 * @Date: 2021-03-03 23:18:04
 * @LastEditTime: 2021-03-05 16:37:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day04/index.js
 */


// let arr = [12,23,12,15,25,23,25,14,16];
// let arr1 = Array.from(new Set(arr));
// console.log(arr1);

// let arr = [12,23,12,15,25,23,25,14,16];
// let arr1 = Array.from(new Set(arr));
// console.log(arr1);


// let arr = [12,23,12,15,25,23,25,14,16];
// for(let i=0;i < arr.length;i++) {
//     let item = arr[i];
//     let args = arr.slice(i+1);
//     if(args.indexOf(item) > -1) {
//         arr[i] = null
//     }
// }

// let arr1 = arr.filter(item => item!==null);

// console.log(arr1);

// let arr = [12,23,12,15,25,23,25,14,16];
// for(let i=0;i < arr.length;i++) {
//     let item = arr[i];
//     let args = arr.slice(i+1);
//     if(args.indexOf(item) > -1) {
//         arr[i] = null
//     }
// }

// let arr1 = arr.filter(item => item => null);
// console.log(arr1);

let arr = [12,23,12,15,25,23,25,14,16];
let obj = {};
let arr1 = [];
for(let i=0;i < arr.length;i++) {
    obj[arr[i]] = arr[i];
}

for(let key in obj) {
    arr1.push(key);
}
console.log(arr1);






 

/*
 * @Author: your name
 * @Date: 2021-03-05 18:26:50
 * @LastEditTime: 2021-03-05 18:51:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day04/字符串查找.js
 */


//  String.prototype.myIndexOf = function(T) {
//     let reg = new RegExp(T);
//     let res = reg.exec(this);
//     return res ===null ? -1:res.index;
//  }

//  let s = "zhangdezhi";
//  let index = s.myIndexOf("de");
//  console.log(index)


// String.prototype.myIndexOf = function(T) {
//     let reg = new RegExp(T);
//     let res = reg.exec(this);
//     return res === null ? -1:res.index;
// }

// let s = "zhangdezhi";
// let index = s.myIndexOf("de");
// console.log(index);

String.prototype.myIndexOf = function(T) {
    let reg = new RegExp(T);
    let res = reg.exec(this);
    return res === null ? -1:res.index;
}

let s = "zhangdezhi";
let index = s.myIndexOf("de");
console.log(index);


/*
 * @Author: your name
 * @Date: 2021-03-05 21:41:16
 * @LastEditTime: 2021-03-05 22:21:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day04/旋转数组.js
 */


//  let arr = [1,2,3,4,5,6,7];

//  Array.prototype.rotate = function(n) {
//      if(n < 0 || n===0 || n === this.length) return this;
//      if(k > this.length) n = n % this.length;
//      let newArr = [];
//      let endArr = this.slice(-n);
//      let statArr = this.slice(0,this.length - n);

//     newArr = endArr.concat(statArr);
//      return newArr;
//  }


//  let res = arr.rotate(3);
//  console.log('res',res);

// Array.prototype.rotate = function(n) {
//     for(let i=0;i < n;i++) {
//         this.unshift(this.pop());
//     }
// }
 
// arr.rotate(3);

// console.log(arr)
// let arr = [1,2,3,4,5,6,7];
// Array.prototype.rotate = function(n) {
//     for(let i=0;i < n;i++) {
//         this.unshift(this.pop());
//     }
// }

// arr.rotate(3);
// console.log(arr);

let arr = [1,2,3,4,5,6,7];
Array.prototype.rotate = function(n) {
    for(let i=0;i < n;i++) {
        this.unshift(this.pop());
    }
}

console.log(arr);






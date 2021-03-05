/*
 * @Author: your name
 * @Date: 2021-03-05 17:09:59
 * @LastEditTime: 2021-03-05 17:22:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day04/index3.js
 */

Number.prototype.add = function(n) {
    return this + n;
}

Number.prototype.minus = function(n) {
    return this - n;
}

let res = (5).add(3).minus(2);
console.log("res",res);

 

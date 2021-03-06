/*
 * @Author: your name
 * @Date: 2021-03-06 21:00:11
 * @LastEditTime: 2021-03-06 21:10:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day06/index8.js
 */


let str = "abcdaba";
let json = {};
for(let i=0;i < str.length;i++) {
    if(json[str[i]]) {
        json[str[i]] = json[str[i]]+1
    }else {
        json[str[i]] = 1
    }
}

let maxKey = 0;
let max = '';
for(let key in json) {
    if(json[key] > maxKey) {
        maxKey = json[key]
        max = key;
    }
}

console.log(maxKey);
console.log(max);

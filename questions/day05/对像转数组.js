/*
 * @Author: your name
 * @Date: 2021-03-06 12:22:37
 * @LastEditTime: 2021-03-06 12:29:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /questions/day05/对像转数组.js
 */

let obj = {
    1:222,
    2:123,
    5:888
}
let arr = [];
for(let i=0;i <= 12;i++) {
    if(obj[i]) {
        arr[i] = obj[i]
    } else {
        arr[i] = null
    }
}

arr.shift();


console.log(arr);


/*
 * @Author: your name
 * @Date: 2021-03-05 20:30:44
 * @LastEditTime: 2021-03-05 21:09:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day04/数组扁平化.js
 */
let arr = [[1,2,2],[3,4,5,5],[6,7,8,9,[11,12,[14]]],10];
let newArr = [];

function flat(arr) {
    if(arr&&arr.length <=0) return
    let length = arr.length;
    for(let i=0;i < length;i++) {
        if(!Array.isArray(arr[i])) {
            newArr.push(arr[i]);
        }else {
            flat(arr[i])
        }  
    }
}

flat(arr);

console.log(newArr);



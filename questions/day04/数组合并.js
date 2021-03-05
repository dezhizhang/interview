/*
 * @Author: your name
 * @Date: 2021-03-05 23:22:11
 * @LastEditTime: 2021-03-05 23:54:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day04/数组合并.js
 */

 let arr1 = ["A1","A2","B1","B2","C1","C2","D1","D2"];
 let arr2 = ["B","A","D","C"];

//  arr2 = arr2.map(item => item + "3");
//  let arr = arr1.concat(arr2);
//  arr = arr.sort((a,b) => a.localeCompare(b)).map(item => {
//      return item.replace('3',"");
//  });

//  console.log(arr);

let n = 0;
for(let i=0;i < arr2.length;i++) {
    for(let j=0;j < arr1.length;j++) {
        if(arr1[j].includes(arr2[i])) {
            n=j
        }
    }
    arr1.splice(n+1,0,arr2[i]);
}

console.log(arr1);
 

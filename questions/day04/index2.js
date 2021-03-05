/*
 * @Author: your name
 * @Date: 2021-03-05 16:09:22
 * @LastEditTime: 2021-03-05 17:01:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day04/index2.js
 */


//  let arr = [12,8,24,16,1];

//  for(let j=0;j < arr.length - 1;j++) {
//     for(let i=0;i < arr.length - j - 1;i++) {
//         let temp = arr[i]
//         if(arr[i] > arr[i+1]) {
//             arr[i] = arr[i+1];
//             arr[i+1] = temp;
//         }
//     }
//  }
 
//  console.log(arr);

let arr = [12,8,24,16,1];
for(let i=0;i < arr.length - 1;i++) {
    for(let j=0;j < arr.length - 1 - i;j++) {
        let temp = arr[j];
        if(arr[j] > arr[j + 1]) {
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr);

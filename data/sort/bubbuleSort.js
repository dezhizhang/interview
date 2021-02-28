/*
 * @Author: your name
 * @Date: 2021-02-28 15:33:21
 * @LastEditTime: 2021-02-28 16:04:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/sort/index.js
 */

//  Array.prototype.bubbuleSort = function() {
//     for(let i=0;i < this.length;i++) {
//         for(let j =0;j < this.length - 1 + i;j++) {
//             if(this[j] > this[j + 1]) {
//                 let temp = this[j + 1];
//                 this[j+1] = this[j];
//                 this[j] = temp;
//             }
//         }
//     }
    
// }

// let arr = [5,4,3,2,1];
// arr.bubbuleSort();

// console.log(arr);

Array.prototype.bubbuleSort = function() {
    for(let i=0;i < this.length - 1;i++) {
        for(let j =0;j < this.length - 1 + i;j++) {
            if(this[j + 1] > this[j]) {
                let temp = this[j + 1];
                this[j + 1] = this[j];
                this[j] = temp;
            }
        }
    }
   
}

let arr = [5,4,3,2,1];
arr.bubbuleSort();
console.log(arr);



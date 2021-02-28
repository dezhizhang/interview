/*
 * @Author: your name
 * @Date: 2021-02-28 16:37:17
 * @LastEditTime: 2021-02-28 17:12:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/sort/insertSort.js
 */


//  Array.prototype.insertSort = function() {
//     for(let i=1;i < this.length;i++) {
//         let j = i;
//         let temp = this[j];
//         while(j > 0) {
//             if(this[j - 1] > temp) {
//                 this[j] = this[j -1];
//             } else {
//                 break;
//             }
//             j--;
//         }
//         this[j] = temp;
//     }
    
// }  

// let arr = [5,4,3,2,1];
// arr.insertSort();
// console.log(arr);


Array.prototype.insertSort = function() {
    for(let i=1;i < this.length;i++) {
        let j= i;
        let temp = this[j];
        while(j > 0) {
            if(this[j - 1] > temp) {
                this[j] = this[j - 1];
                // this[j - 1] = this[j];
            }else {
                break
            }
            j--;
        }
        this[j] = temp;
    }
    
}

let arr = [5,4,3,2,1];
arr.insertSort();
console.log(arr);



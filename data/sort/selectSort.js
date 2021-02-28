/*
 * @Author: your name
 * @Date: 2021-02-28 16:15:06
 * @LastEditTime: 2021-02-28 16:26:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/sort/selectSort.js
 */

 Array.prototype.selectionSort = function() {
    for(let i=0;i < this.length;i++) {
        let indexMin = i;
        for(let j=i;j < this.length;j++) {
            if(this[indexMin] > this[j]) {
                indexMin = j;
            }
        }
        if(indexMin !== i) {
            let temp = this[i];
            this[i] = this[indexMin];
            this[indexMin] = temp;
        }
    }

   

 }

 let arr = [5,4,3,2,1];
 arr.selectionSort();


 console.log(arr);
 


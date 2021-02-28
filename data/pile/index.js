/*
 * @Author: your name
 * @Date: 2021-02-28 11:34:42
 * @LastEditTime: 2021-02-28 12:14:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/pile/index.js
 */


 //js中通用数组表示堆
 //1,左侧子节点的位置2 * index + 1
 //2,右则子节点的位置2 * index + 2
 //3,父节点的位置(index - 1) / 2


 class MinHeap {
     constructor() {
         this.heap = [];
     }
     swap(i1,i2) {
         const temp = this.heap[i1];
         this.heap[i1] = this.heap[i2];
         this.heap[i2] = temp;
     }

     getPrentIndex(i) {
         return (i - 1) >> 1
     }

     shiftUp(index) {
         if(index == 0) return;
         const parentIndex = this.getPrentIndex(index);
         if(this.heap[parentIndex] > this.heap[index]) {
             this.swap(parentIndex,index);
             this.shiftUp(parentIndex);
         }
     }
     insert(value) {
         this.heap.push(value);
         this.shiftUp(this.heap.length - 1);
     }
 }

 const h = new MinHeap();
 h.insert(3);
 h.insert(2);
 h.insert(1);

 console.log(h.heap);
 
 

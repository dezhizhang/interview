/*
 * @Author: your name
 * @Date: 2021-02-28 11:37:07
 * @LastEditTime: 2021-02-28 15:11:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/pile/index2.js
 */

//最小堆类
class MinHeap {
    constructor() {
        this.heap = [];
    }
    swap(l1,l2) {
        let temp = this.heap[l1];
        this.heap[l1] = this.heap[l2];
        this.heap[l2] = temp;
    }
    getPrentIndex(i) {
        return Math.floor((i - 1) / 2); 
    }
    getLeftIndex(i) {
        return i * 2 + 1;
    }
    getRightIndex(i) {
        return i * 2 + 2;
    }
    shiftUp(index) {
        if(index == 0) return;
        let parentIndex = this.getPrentIndex(index);
        if(this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex,index);
            this.shiftUp(parentIndex);
        }
    }
    shiftDown(index) {
        let leftIndex = this.getLeftIndex(index);
        let rightIndex = this.getRightIndex(index);
        if(this.heap[leftIndex] < this.heap[index]) {
            this.swap(leftIndex,index);
            this.shiftDown(leftIndex);
        }

        if(this.heap[rightIndex] < this.heap[index]) {
            this.swap(rightIndex,index);
            this.shiftDown(rightIndex);
        }

    }
    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }

    pop() {
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
    }
    peek() {
        return this.heap[0];
    }
    size() {
        return this.heap.length;
    }
}


 let findKthLargest = function(nums,k) {
     const m = new MinHeap();
     nums.forEach(n => {
         m.insert(n);
         if(m.size() > k) {
             m.pop();
         }
     })

     console.log(m.heap);
     
     return m.peek();
     
 }

 findKthLargest([3,2,1,5,6,4],2);
 

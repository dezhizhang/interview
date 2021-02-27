/*
 * @Author: your name
 * @Date: 2021-02-27 15:25:47
 * @LastEditTime: 2021-02-27 15:41:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/link/index3.js
 */

 let reverseList = function(head) {
     let p1 = head;
     let p2 = null;
     while(p1) {
        const temp = p1.next;
        p1.next = p2;
        p2 = p1;
        p1 = temp;
     }
     return p2
 }

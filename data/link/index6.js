/*
 * @Author: your name
 * @Date: 2021-02-27 17:07:43
 * @LastEditTime: 2021-02-27 17:17:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/link/index6.js
 */


 var hasCycle = function(head) {
     let p1 = head;
     let p2 = head;
     while(p1 && p2 && p2.next) {
         p1 = p1.next;
         p2 = p2.next.next;
         if(p1 === p2) {
             return true;
         }
     }
     return false
 }
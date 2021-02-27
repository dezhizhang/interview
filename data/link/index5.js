/*
 * @Author: your name
 * @Date: 2021-02-27 16:25:55
 * @LastEditTime: 2021-02-27 16:33:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/link/index5.js
 */


 let deleteDup = function(head) {
     let p = head;
     while(p && p.next) {
         if(p.value == p.next.value) {
             p.next = p.next.next;
         }else {
             p = p.next;
         }
     }
     return head
 }


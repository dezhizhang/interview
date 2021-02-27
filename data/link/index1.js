/*
 * @Author: your name
 * @Date: 2021-02-27 15:15:15
 * @LastEditTime: 2021-02-27 15:21:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/link/index1.js
 */


let ListNode = function(value) {
    this.value = value;
    this.next = null;
}


let deleteNode = function(node) {
    node.value = node.next.value;
    node.next = node.next.next;
}







 

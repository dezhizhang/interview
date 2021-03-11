/*
 * @Author: your name
 * @Date: 2021-03-11 22:39:00
 * @LastEditTime: 2021-03-11 22:43:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/Highfrequency/index3.js
 */

 function Parent(value) {
     this.val = value;
 }

 Parent.prototype.getValue = function() {
     console.log(this.val);
 }

 function Child(value) {
     Parent.call(this,value);
 }

 Child.prototype = Object.create(Parent.prototype,{
    constructor:{
        value:Child,
        enumerable: false,
        writable: true,
        configurable: true
    }
 })

 const child = new Child(1);
 child.getValue();
 console.log(child instanceof Parent);
 


/*
 * @Author: your name
 * @Date: 2021-03-11 22:34:20
 * @LastEditTime: 2021-03-11 22:34:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/Highfrequency/index2.js
 */


 //组合继承
 function Parent(value) {
     this.val = value;
 }

Parent.prototype.getValue = function() {
    console.log(this.val);
}

function Child(value) {
    Parent.call(this,value);
    // console.log
}

Child.prototype = new Parent();


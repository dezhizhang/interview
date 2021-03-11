/*
 * @Author: your name
 * @Date: 2021-03-11 22:44:42
 * @LastEditTime: 2021-03-11 22:47:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/Highfrequency/class继承.js
 */


 class Parent{
     constructor(value) {
         this.value = value;
     }
     getValue() {
         console.log(this.value);
     }
 }

 class Child extends Parent{
     constructor(value) {
         super(value);
         this.val = value;
     }
 }

 let child = new Child(1);
 child.getValue();
 console.log(child instanceof Parent);
 
//  child instanceof Parent
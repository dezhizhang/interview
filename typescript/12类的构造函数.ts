/*
 * @Author: your name
 * @Date: 2021-03-08 22:39:09
 * @LastEditTime: 2021-03-08 22:51:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/typescript/12类的构造函数.ts
 */


 class Person{
    // name:string;
    // age:number;
    constructor(public name:string,public age:number) {
        this.name = name;
        this.age = age;
    }
 }

 class Teacher extends Person {
     constructor(public name:string,public age:number) {
         super(name,age);
     }
 }

 const t = new Teacher("zhang",20);
 console.log(t);
 
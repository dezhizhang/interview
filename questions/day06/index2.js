/*
 * @Author: your name
 * @Date: 2021-03-06 16:01:47
 * @LastEditTime: 2021-03-06 17:11:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day06/index2.js
 */

//原型链继际
// function Animal() {
//     this.age = 20;
// }

// function Cat() {
//     this.name = 'cat';
// }

// Cat.prototype = new Animal();
// let c = new Cat();
// console.log(c.age);

//借用构鵠函数继承
// function Animal() {
//     this.age = 20;
// }

// function Cat() {
//     Animal.call(this);
//     this.name = 'cat';
// }

// let c = new Cat();
// console.log(c.age);

//工厂模式创建对像
// function create(age,sex) {
//     let obj = {}
//     obj.age = age;
//     obj.sex = sex;
//     return obj;
// }

// let person1 = create('张三','女');
// let person2 = create('张三','女');
// console.log(person1 === person2);


//寄生模式
// function Japanese(name,language) {
//     this.name = name;
//     this.language = language;
//     this.say = function() {
//         console.log(this.name + '正在说'+this.language);
//     } 
// }

// function createChinese(name,language) {
//     let obj = {}
//     Japanese.call(obj,name,language);
//     return obj
// }
// let c = createChinese('张三','茵语');
// c.say();

// function Japanese(name,language) {
//     this.name = name;
//     this.language = language;
//     this.say = function() {
//         console.log(this.name + '正在说' + this.language);
//     }
// }

// function createChinese(name,language) {
//     let obj = {}
//     Japanese.call(obj,name,language);
//     return obj;

// }

// let c = createChinese('张三','英语');
// c.say();

function Japanese(name,language) {
    this.name = name;
    this.language = language;
    this.say = function() {
        console.log(this.name + '正在说' + this.language);
    }
}

function createChinese(name,language) {
    let obj = {};
    Japanese.call(obj,name,language);
    return obj;
}

let c = createChinese('张三','英语');
c.say();















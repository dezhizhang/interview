/*
 * @Author: your name
 * @Date: 2021-03-05 22:21:48
 * @LastEditTime: 2021-03-05 23:20:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day04/手写new.js
 */


function Dog(name) {
    this.name = name;
}

Dog.prototype.break = function() {
    console.log('break');
}

Dog.prototype.sayName = function() {
    console.log('this is a '+this.name);
}

function _new(Fn,...args) {
    let obj = {};
    obj.__proto__ = Fn.prototype;
    Fn.call(obj,...args);
    return obj;
}

let d = _new(Dog,"hello");
d.break();
d.sayName();
console.log(d instanceof Dog);











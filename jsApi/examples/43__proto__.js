/*
 * :file description: 
 * :name: /jsApi/examples/43__proto__.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-29 17:09:00
 * :last editor: 张德志
 * :date last edited: 2024-08-29 17:35:36
 */
function Fn() {
    // 内部语句 this.prototype={}
}

// 每个函数function 都有一个prototype 即显示原型属性，默认指向一个空的Object对像
console.log(Fn.prototype);

// 每个实例对像都有一个__proto__ 可称为隐式原型

var fn = new Fn();
console.log(fn.__proto__);

// 对像的隐式原型的值为其对应构造函数的显示原型的值
console.log(Fn.prototype === fn.__proto__); // true

Fn.prototype.test = function() {
    console.log('test()');
}

fn.test();

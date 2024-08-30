/*
 * :file description: 
 * :name: /jsApi/examples/44prototype.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-29 20:21:35
 * :last editor: 张德志
 * :date last edited: 2024-08-29 20:28:26
 */
function Fn() {

}
// 函数的显示原型默认是空Object实例对像(但Object不满足)
console.log(Fn.prototype instanceof Object); // 
console.log(Object.prototype instanceof Object); // false

// 所有函数都是Function实列包括Function
console.log(Function.__proto__ === Function.prototype);

// Object的原型对像是原型链的尽头
console.log(Object.prototype.__proto__); // null


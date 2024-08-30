/*
 * :file description: 
 * :name: /jsApi/examples/47原型边面试题2.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 19:52:55
 * :last editor: 张德志
 * :date last edited: 2024-08-30 19:57:50
 */
var F = function() {}

Object.prototype.a = function() {
    console.log('a()');
}

Function.prototype.b = function() {
    console.log('b()');
}

var f = new F();
F.a(); // 'a()'
f.a(); // 'a()'
F.b(); // 'b()'
f.b(); // 报错
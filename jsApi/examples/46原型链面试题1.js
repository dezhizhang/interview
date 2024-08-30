/*
 * :file description: 
 * :name: /jsApi/examples/46原型链面试题1.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 19:33:01
 * :last editor: 张德志
 * :date last edited: 2024-08-30 19:33:09
 */
function A() {

}

A.prototype.n = 1;

var b = new A();

A.prototype = {
    n:2,
    m:3
}

var c = new A();
console.log(b.n,b.m,c.n,c.m);// 1,undefined,2,3


/*
 * :file description: 
 * :name: /jsApi/examples/45prototypeattr.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-29 20:44:36
 * :last editor: 张德志
 * :date last edited: 2024-08-29 20:44:36
 */

function Fn() {

}

Fn.prototype.a = 'xxx';

var fn1 = new Fn();
console.log(fn1.a);

var fn2 = new Fn();
console.log(fn2.a);



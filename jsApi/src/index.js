/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-05-07 04:53:29
 */

function Foo() {
  Foo.a = function() {console.log(1)}
  this.a = function() {console.log(2)}
}

Foo.prototype.a = function() {console.log(3)}

Foo.a = function() {console.log(4)}

Foo.a(); // 4

let obj = new Foo();

obj.a(); // 2;

Foo.a(); // 1

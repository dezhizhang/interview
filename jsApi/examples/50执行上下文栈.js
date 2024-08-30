/*
 * :file description: 
 * :name: /jsApi/examples/50执行上下文栈.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 20:36:34
 * :last editor: 张德志
 * :date last edited: 2024-08-30 21:23:26
 */

var a = 10;

var bar = function(x) {
    var b = 5;
    foo(x + b);
}

var foo = function(y) {
    var c = 5;
    console.log(a + c + y)
}

bar(10);

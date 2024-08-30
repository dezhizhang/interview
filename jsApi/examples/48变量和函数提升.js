/*
 * :file description: 
 * :name: /jsApi/examples/48变量和函数提升.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 20:10:47
 * :last editor: 张德志
 * :date last edited: 2024-08-30 20:20:41
 */
var a = 3;

function fn() {
    // 变量声明提升
    // var a = undefined;
    console.log(a);
    var a = 4;
}

fn(); // undefined
// 函数提升只能使用声明的方式
fn2(); // 'fn2'
fn3(); // 报错
function fn2() {
    console.log('fn2');
}

var fn3 = function() {
    console.log('fn3');
}

/*
 * :file description: 
 * :name: /jsApi/examples/54闭包的产生.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-31 15:39:31
 * :last editor: 张德志
 * :date last edited: 2024-08-31 16:15:12
 */
// 产生的条件
// 函数嵌套
// 内部函数引用了外部函数的数据

function fn1() {
    var a = 2;
    function fn2() {
        console.log(a);
    }
}

fn1();


// 内部函数引用外部函数的数据
// 将函数作为另一个函数的返回值

function fn1() {
    var a = 2;
    function fn2() {
        a++;
        console.log(a);
    }
    return fn2
}

var f = fn1();
f(); // 3
f(); // 4


// 内部函数引用外部函数的数据
// 将函数作为实参传递给另一个函数调用
function showDelay(msg,time) {
    setTimeout(function() {
        console.log(msg);
    },time)
}

showDelay('hello',2000);

// 函数执行完后，函数内部声明的局部变量一搬不存在，存在于闭包中的变量才可能存在
function fn1() {
    var a = 2;
    function fn3() {
        a--;
        console.log(a);
    }
    return fn3;
}

var f = fn1();
f();
f();



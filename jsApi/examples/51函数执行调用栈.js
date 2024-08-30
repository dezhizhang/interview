/*
 * :file description: 
 * :name: /jsApi/examples/51函数执行调用栈.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 21:38:20
 * :last editor: 张德志
 * :date last edited: 2024-08-30 21:38:21
 */

console.log('global begin:' + i); // undefined

var i = 1;

foo(1);

function foo(i) {
    if(i == 4) {
        return
    }

    console.log('foo() begin:' + i); // 1,2,3
    foo(i + 1);
    console.log('foo() end:' + i); // 3,2,1
}

console.log('global end:' + i); // 1

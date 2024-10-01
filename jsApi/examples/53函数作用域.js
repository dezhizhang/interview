/*
 * :file description: 
 * :name: /jsApi/examples/53函数作用域.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 22:40:16
 * :last editor: 张德志
 * :date last edited: 2024-08-30 22:46:52
 */

var fn = function () {
    console.log(fn); // fucntion
}

fn();

var obj = {
    fn2: function () {
        console.log(window.fn2); // 报错
    }
}
obj.fn2();
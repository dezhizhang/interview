/*
 * :file description: 
 * :name: /jsApi/examples/52变量与函数提升的优先级.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 21:54:19
 * :last editor: 张德志
 * :date last edited: 2024-08-30 22:01:54
 */
function a() {}

var a;

console.log(typeof a);

if(!(b in window)) {
    var b = 1;
}

console.log(b);


var c = 1;
function c(c) {
    console.log(c);

}
c(2);

console.log(undefined in window);


/*
 * :file description: 
 * :name: /jsApi/examples/42prototype.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-29 16:56:51
 * :last editor: 张德志
 * :date last edited: 2024-08-29 16:57:31
 */
// 原型对像中有一个属性constructor 它指向函数对像
console.log(Date.prototype.constructor === Date);

function Fun() {

}

console.log(Fun.prototype);

// 给原型对像添加属性（一搬是方法）=> 实例对像可以访问
Fun.prototype.test = function() {
    console.log('test');
}


const fn = new Fun();
fn.test();


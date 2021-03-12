/*
 * @Author: your name
 * @Date: 2021-03-12 00:09:40
 * @LastEditTime: 2021-03-12 00:44:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/Highfrequency/new的实现.js
 */


//  function create() {
//     let obj = {}
//     let Con = [].shift.call(arguments)
//     obj.__proto__ = Con.prototype;
//     let result = Con.applay(obj,arguments);
//     return result instanceof Object ? result:obj;
//  }

function create() {
    let obj = {}
    let Con = [].shift.call(arguments)
    obj.__proto__ = Con.prototype;
    let result = Con.applay(obj,arguments)
    return result instanceof Object ? result:obj
}
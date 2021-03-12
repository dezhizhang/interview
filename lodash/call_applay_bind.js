/*
 * @Author: your name
 * @Date: 2021-03-12 20:09:25
 * @LastEditTime: 2021-03-12 21:19:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/lodash/call_applay_bind.js
 */



//  Function.prototype.apply = function(obj,args) {
//     if(obj === undefined || obj === null) {
//         obj = window;
//     }
//     obj.fn = this;
//     const result = obj.fn(...args);
//     delete obj.fn;
//     return result;
//  }

// Function.prototype.apply = function(obj,args) {
//     if(obj === undefined || obj === null) {
//         obj = window;
//     }
//     obj.fn = this;
//     const result = obj.fn(...args);
//     delete obj.fn;
//     return result;
// }

// Function.prototype.apply = function(obj,args) {
//     if(obj === undefined || obj === null) {
//         obj = window;
//     }
//     obj.fn = this;
//     const result = obj.fn(...args);
//     delete obj.fn;
//     return result;
// }

// Function.prototype.apply = function(obj,args) {
//     if(obj === undefined || obj === null) {
//         obj = window;
//     }
//     obj.fn = this;
//     const result = obj.fn(...args);
//     delete obj.fn;
//     return result;
// }


Function.prototype.apply = function(obj,args) {
    if(obj === undefined || obj === null) {
        obj = window;
    }
    obj.fn = this;
    const result = obj.fn(...args);
    delete obj.fn;
    return result;
}

Function.prototype.bind = function(obj,...args) {
    const that = this;
    return function(...args1) {
        return that.apply(obj,[...args1,...args])
    }
}


function fn(a,b) {
    this.xxx = 3;
    console.log(a,b,this,arguments);
}

let obj = {x:1,y:2}

fn.apply(obj,[5,6]);
fn.bind(obj,7,8)(1,2);
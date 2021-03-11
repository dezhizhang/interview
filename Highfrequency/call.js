/*
 * @Author: your name
 * @Date: 2021-03-11 23:39:06
 * @LastEditTime: 2021-03-11 23:53:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/Highfrequency/call.js
 */


//  Function.prototype.myCall = function(context) {
//     if(typeof this !== 'function') {
//         throw new TypeError('Error')
//     }
//     context = context || window;
//     context.fn = this;
//     const args = [...arguments].slice(1);
//     const result = context.fn(...args);
//     delete context.fn;
//     return result;
//  }

Function.prototype.myCall = function(context) {
    if(typeof this!== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    context.fn = this;
    const args = [...arguments].slice(1);
    const result = context.fn(...args)
    delete context.fn;
    return result;
    
}
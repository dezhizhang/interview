/*
 * @Author: your name
 * @Date: 2021-03-11 23:53:48
 * @LastEditTime: 2021-03-11 23:56:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/Highfrequency/applay.js
 */


 Function.prototype.myApplay = function(context) {
     if(typeof this!== 'function') {
         throw new TypeError('Error');
     }
     context = context || window;
     context.fn = this;
     let results
     if(arguments[1]) {
         results = context.fn(...arguments[1]);
     } else {
         results = context.fm();
     }
     delete context.fn;
     return results
 }
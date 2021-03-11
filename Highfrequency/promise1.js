/*
 * @Author: your name
 * @Date: 2021-03-11 23:37:10
 * @LastEditTime: 2021-03-11 23:37:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/Highfrequency/promise1.js
 */
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

new Promise((resolve) => {
    console.log('Promise')
    resolve()
}).then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');

// start -> end -> promise -> promise1 -> promise2
/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-05-05 16:41:53
 */

console.log('start');

setTimeout(() => {
  console.log('timeout');
});

Promise.resolve().then(() => {
  console.log('promise then');
});

console.log('end');

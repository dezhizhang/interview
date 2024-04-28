/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-04-28 19:54:41
 */
const arr = [];
for(let i=0;i < 1000 * 10000;i++) {
  arr.push(i);
}

console.time('arr unshift');
arr.unshift('a');
console.timeEnd('arr unshift');

console.time('arr push');
arr.push('b');
console.timeEnd('arr push');

const set = new Set();
for(let i=0;i < 1000 * 10000;i++) {
  set.add(i);
}

console.time('set add');
set.add('a');
console.timeEnd('set add');









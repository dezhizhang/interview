/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-05-05 17:28:01
 */

const arr = [];

for(let i=0;i < 10000 * 10000;i++) {
  arr.push(i);
}

const length = arr.length;

console.time('for');
let n = 0;

for(let i=0;i < length;i++) {
  n++;
}

console.timeEnd('for'); // 2.36 for更快

console.time('forEach');
let n1 = 0;
arr.forEach(() => {
  n1++;
});
console.timeEnd('forEach'); //8.78


/*
 * :file description:
 * :name: /promise/src/index.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-23 15:42:55
 * :last editor: 张德志
 * :date last edited: 2024-09-26 06:54:45
 */
setTimeout(() => {
  console.log('0');
},0);

new Promise((resolve,reject) => {
  console.log('1');
  resolve();
}).then(() => {
  console.log('2');
  return new Promise((resolve,reject) => {
    console.log('3');
    resolve();
  }).then(() => {
    console.log('4');
  }).then(() => {
    console.log('5');
  })
}).then(() => {
  console.log('6');
});


new Promise((resolve,reject) => {
  console.log('7');
  resolve();
}).then(() => {
  console.log('8');
});


//1
// index.js:33 7
// index.js:18 2
// index.js:20 3
// index.js:36 8
// index.js:23 4
// index.js:25 5
// index.js:28 6
// index.js:11 0
// 1,3,7,2,4,5,6,8,0;






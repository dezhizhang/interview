/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-04-18 07:39:17
 */
// async function fn1() {
//     return 100;
// }

// const res1 = fn1();
// console.log('res1',res1);

// !(async function() {
//     const data = await 400;
//     console.log('data',data);
// })()

// !(async function () {
//   const p = Promise.reject('err');
//   try {
//     const d = await p;
//     console.log('d', d);
//   } catch (err) {
//     console.log(err);
//   }
// })();

// !(async function() {
//     const p4 = Promise.reject('err1');
//     const d = await p4;
//     console.log('data',d);
// })()

console.log(100);

setTimeout(() => {
    console.log(200);
});

Promise.resolve().then(() => {
    console.log(300);
});

console.log(400);



/*
 * :file description:
 * :name: /promise/ examples/3.静态方法.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-23 20:22:49
 * :last editor: 张德志
 * :date last edited: 2024-09-23 20:55:03
 */
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("失败的数据");
//   }, 1000);
// });

// const p1 = Promise.resolve(1);
// const p2 = Promise.reject(2);

// p1.then((value) => console.log("p1", value));
// p2.then((value) => console.log("p2", value));
// p2.catch((reson) => console.log("p2", reson));

const p = new Promise((resolve, reject) => {
  throw 3;
});

p.then(
  (value) => {},
  (reason) => {
    console.log("reason", reason);
  }
);

p.then(
  (value) => {},
  (reason) => {
    console.log("reason", reason);
  }
);

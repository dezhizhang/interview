/*
 * :file description:
 * :name: /promise/src/index.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-23 15:42:55
 * :last editor: 张德志
 * :date last edited: 2024-09-24 22:43:40
 */
import MyPromise from "../lib/Promise";

const p = new MyPromise((resolve, reject) => {
  resolve("hello");
  console.log('reject状态改变了')
});

p.then(
  (value) => {
    console.log('onResolved1()',value)
  },
  (reason) => {
    console.log("onRejected1()", reason);
  }
);

p.then(
  (value) => {
    console.log('onResolved2()',value)
  },
  (reason) => {
    console.log("onRejected2()", reason);
  }
);





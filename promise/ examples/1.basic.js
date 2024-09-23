/*
 * :file description:
 * :name: /promise/ examples/1.basic.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-23 19:17:17
 * :last editor: 张德志
 * :date last edited: 2024-09-23 19:29:44
 */


const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const time = Date.now();
    if (time % 2 === 0) {
      resolve("ok");
    } else {
      reject("error");
    }
  }, 1000);
});

p.then(
  (value) => {
    console.log("value", value);
  },
  (resone) => {
    console.log("接收失败数据", resone);
  }
);

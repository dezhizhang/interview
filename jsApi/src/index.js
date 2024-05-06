/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-05-07 05:10:58
 */

Promise.resolve().then(() => {
  console.log(0);
  return Promise.resolve(4)
}).then((res) => {
  // console.log('hello')
  console.log(res);
});


Promise.resolve().then(() => {
  console.log(1)
}).then(() => {
  console.log(2);
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(5);
}).then(() => {
  console.log(6)
})
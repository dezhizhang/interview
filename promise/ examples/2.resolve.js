/*
 * :file description:
 * :name: /promise/ examples/2.resolve.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-23 20:11:35
 * :last editor: 张德志
 * :date last edited: 2024-09-23 20:11:41
 */
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("成功时的数据");
  }, 1000);
})
  .then(
    (value) => {
      console.log("value", value);
    },
    (reson) => {
      console.log("reson", reson);
    }
  )
  .catch((reson) => {
    console.log("onRejected", reson);
});

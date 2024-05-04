/*
 * :file description:
 * :name: /webpack/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-05-03 20:43:02
 * :last editor: 张德志
 * :date last edited: 2024-05-04 21:36:00
 */
setTimeout(() => {
    // 懒加载
  import('./dynamic-data.js').then((res) => {
    console.log('res', res.default);
  });
}, 1000);

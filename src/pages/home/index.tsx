/*
 * :file description:
 * :name: /interview/src/pages/home/index.tsx
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-08 23:03:11
 * :last editor: 张德志
 * :date last edited: 2024-04-08 23:33:44
 */
Promise.resolve()
  .then(() => {
    console.log(1);
    throw new Error('error1');
  })
  .catch(() => {
    console.log(2);
  })
  .catch(() => {
    console.log(3);
  });

/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-07-25 22:20:46
 * :last editor: 张德志
 * :date last edited: 2024-10-20 23:03:33
 */

function flatten(arr) {
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      const flattenItem = flatten(item);
      flattenItem.forEach((n) => result.push(n));
    } else {
      result.push(item);
    }
  });
  return result;
}

const arr = [1,[2,3,[4,[5,[6]]]]];
console.log(flatten(arr));


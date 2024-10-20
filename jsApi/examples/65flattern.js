/*
 * :file description: 
 * :name: /jsApi/examples/65flattern.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-20 23:04:14
 * :last editor: 张德志
 * :date last edited: 2024-10-20 23:04:35
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

const arr = [1, [2, 3, [4, [5, [6]]]]];
console.log(flatten(arr));

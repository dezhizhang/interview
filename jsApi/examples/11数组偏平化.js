/*
 * :file description:
 * :name: /jsApi/examples/11数组偏平化.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-05-08 05:25:15
 * :last editor: 张德志
 * :date last edited: 2024-05-08 05:40:45
 */
function flatten(arr) {
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      item.forEach((n) => result.push(n));
    } else {
      result.push(item);
    }
  });

  return result;
}

function flatten(arr) {
  let result = [];
  arr.forEach((item) => {
    result = result.concat(item);
  });
  return result;
}

const arr = [1, 2, [3, 4, [5, 6], 7]];
console.log(flatten(arr));


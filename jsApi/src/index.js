/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-04-28 21:53:34
 */

function rotate2(arr, k) {
  const length = arr.length;
  if (!k || length === 0) return arr;

  const step = Math.abs(k % length);

  const part1 = arr.slice(-step);
  const part2 = arr.slice(0, length - step);

  return part1.concat(part2);
}

const arr = [1, 2, 3, 4, 5, 6, 7];

const arr1 = rotate2(arr, 3);
console.log(arr1);

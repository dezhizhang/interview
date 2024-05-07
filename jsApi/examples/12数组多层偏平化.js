/*
 * :file description:
 * :name: /jsApi/examples/12数组多层偏平化.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-05-08 05:46:58
 * :last editor: 张德志
 * :date last edited: 2024-05-08 05:51:11
 */
export function flattenDeep1(arr) {
  const result = [];
  (arr || []).forEach((item) => {
    if (Array.isArray(item)) {
      const flatItem = flattenDeep1(item);
      result.push(...flatItem);
    } else {
      result.push(item);
    }
  });

  return result;
}

export function flattenDeep2(arr) {
  let result = [];
  (arr || []).forEach((item) => {
    if (Array.isArray(item)) {
      const flatItem = flattenDeep2(item);
      result = result.concat(flatItem);
    } else {
      result = result.concat(item);
    }
  });

  return result;
}

console.log(flattenDeep2([1, 2, [3, [4, [5, [6, ['a', 'b']]]]]]));

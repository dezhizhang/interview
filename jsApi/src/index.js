/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-05-08 05:25:34
 */


export function flatten(arr) {
  const result = [];
  arr.forEach((item) => {
    if(Array.isArray(item)) {
      result.push(...item);
    }else {
      result.push(item)
    }
  });
  return result;
}


console.log(flatten([1,2,[3,[5],4]]));









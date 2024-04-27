/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-04-27 17:22:37
 */

function flatten(arr) {
  const isDeep = arr.some(item => item instanceof Array);
  if(!isDeep) {
    return arr;
  }

  const result = Array.prototype.concat.apply([],arr);
  return flatten(result);
  
}

const result = flatten([[1,2],[3,4]]);

console.log(result);





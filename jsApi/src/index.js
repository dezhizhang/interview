/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-05-08 06:11:32
 */


export function getType(x){
  const originType = Object.prototype.toString.call(x);

  const spaceIndex = originType.indexOf(' ');
  return originType.slice(spaceIndex + 1,-1).toLowerCase();
 
}

console.log(getType('123'))





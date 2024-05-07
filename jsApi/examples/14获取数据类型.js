/*
 * :file description:
 * :name: /jsApi/examples/14获取数据类型.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-05-08 06:14:34
 * :last editor: 张德志
 * :date last edited: 2024-05-08 06:14:36
 */
export function getType(x) {
  const originType = Object.prototype.toString.call(x);

  const spaceIndex = originType.indexOf(' ');
  return originType.slice(spaceIndex + 1, -1).toLowerCase();
}

console.log(getType('123'));

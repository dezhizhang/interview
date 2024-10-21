/*
 * :file description:
 * :name: /jsApi/examples/66getype.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-21 09:03:12
 * :last editor: 张德志
 * :date last edited: 2024-10-21 09:03:13
 */
function getType(x) {
  const orangeType = Object.prototype.toString.call(x);
  const spaceIndex = orangeType.indexOf(" ");
  return orangeType.slice(spaceIndex + 1, -1).toLowerCase();
}

console.log(getType(null));
console.log(getType(undefined));
console.log(getType(100));
console.log(getType("100"));
console.log(getType(Symbol()));

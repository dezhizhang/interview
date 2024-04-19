/*
 * :file description: 深烤贝
 * :name: /jsApi/examples/deepClone.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-19 22:04:17
 * :last editor: 张德志
 * :date last edited: 2024-04-19 22:16:00
 */
const obj1 = {
  age: 20,
  name: 'xxx',
  address: {
    city: 'beijing',
  },
  arr: ['a', 'b', 'c'],
};

const obj2 = deepClone(obj1);

obj2.address.city = 'shanghai';
obj2.arr[0] = 'a1';

console.log(obj1.address.city);
console.log(obj1.arr);

function deepClone(obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }

  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  for (let key in obj) {
    // 保证key 不是原型的属性
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }

  return result;
}

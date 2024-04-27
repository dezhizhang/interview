/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-04-27 10:14:37
 */

function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

function isEqual(obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2;
  }

  if (obj1 === obj2) {
    return true;
  }

  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let key in obj1) {
    const result = isEqual(obj1[key], obj2[key]);
    if (!result) {
      return false;
    }
  }
  return true;
}

const obj1 = {
  a: 100,
  b: {
    x: 100,
    y: 200,
  },
};

const obj2 = {
  a: 100,
  b: {
    x: 100,
    y: 200,
  },
};

console.log(isEqual(obj1, obj2));

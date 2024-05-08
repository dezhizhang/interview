/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-05-08 19:41:23
 */

export function curry(fn) {
  const fnArgsLength = fn.length;
  let args = [];

  return function calc(...newArgs) {
    args = [...args, ...newArgs];
    if (args.length < fnArgsLength) {
      return calc;
    } else {
      return fn.apply(this, args.slice(0, fnArgsLength));
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curryAdd = curry(add);
console.log(curryAdd(10)(20)(30));

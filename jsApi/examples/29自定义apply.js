/*
 * :file description: 
 * :name: /jsApi/examples/29自定义apply.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-18 16:58:35
 * :last editor: 张德志
 * :date last edited: 2024-10-21 15:06:07
 */
Function.prototype.myCall = function (context, ...args) {
  if (context === null) context = globalThis;
  if (typeof context != "object") context = new Object(context);

  const fnKey = Symbol();
  context[fnKey] = this;
  const result = context[fnKey](...args);

  delete context[fnKey];

  return result;
};

function fn(a, b, c) {
  console.log(this);
  console.log(a, b, c);
}

fn.myCall({ x: 100 }, 10, 20, 30);

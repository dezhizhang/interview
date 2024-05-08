/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-05-08 21:40:24
 */


Function.prototype.myCall = function(context,...args) {
  if(context == null) context = globalThis;

  if(typeof context !== 'object') context = new Object(context);

  const fnKey = Symbol();
  context[fnKey] = this;

  const result = context[fnKey](...args);
  delete context[fnKey];

  return result;
}


function fn(a,b,c) {
  console.log(a,b,c);
}

fn.myCall({x:123},1,2,3);

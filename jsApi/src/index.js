/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-05-08 21:13:03
 */

Function.prototype.mybind = function (context, ...bindArgs) {
  const self = this;

  return function (...args) {
    const newAargs = bindArgs.concat(args);
    return self.apply(context, newAargs);
  };
};


function fn(a,b,c) {
  console.log({a,b,c});

}

const fn1 = fn.mybind({x:100},10);
fn1(20,30);


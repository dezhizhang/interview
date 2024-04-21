/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-04-21 23:05:11
 */
Function.prototype.mybind = function () {
  // 将参数拆解为数组
  const args = Array.prototype.slice.call(arguments);
  // 获取 this 数组第一项
  const t = args.shift();

  const self = this;
  return function () {
    return self.apply(t, args);
  };
};

function fn1(a, b) {
  console.log('this', this);
  console.log({ a, b });
  return 'this is fn1';
}

const fn2 = fn1.mybind({ x: 100 }, 10, 20);

console.log(fn2());

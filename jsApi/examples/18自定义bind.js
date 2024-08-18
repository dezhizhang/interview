/*
 * :file description: 
 * :name: /jsApi/examples/18自定义bind.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-05-08 21:13:59
 * :last editor: 张德志
 * :date last edited: 2024-05-08 21:14:18
 */
Function.prototype.mybind = function (context, ...args) {
  const self = this; // 当前函数本身

  return function (...args1) {
    // 拼接参数
    const newArgs = args.concat(args1);
    return self.apply(context, newArgs);
  };
};


function fn(a,b,c) {
  console.log(this,{a,b,c})
}

const fn1 = fn.mybind({x:100},10);
fn1(20,30);



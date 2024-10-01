/*
 * :file description: 
 * :name: /jsApi/examples/61apply.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-23 10:24:19
 * :last editor: 张德志
 * :date last edited: 2024-09-23 10:35:29
 */
Function.prototype.myApply = function (context, args) {
    if (context === null) context = globalThis;
    if (typeof context !== "object") context = new Object(context);
  
    const fnKey = Symbol();
    context[fnKey] = this;
  
    const res = context[fnKey](...args);
  
    delete context[fnKey];
  
    return res;
  };
  
  function fn(a, b, c) {
    console.log(this, a, b, c);
  }
  
  fn.myApply({ x: 100 }, [10, 20, 30]);
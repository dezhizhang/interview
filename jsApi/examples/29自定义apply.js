
Function.prototype.myApply = function (context, args) {
    if (context === null) context = globalThis;
    if (typeof context !== 'object') context = new Object(context);
  
    const fnKey = Symbol();
  
    context[fnKey] = this;
  
    const result = context[fnKey](...args);
  
    // 清理掉fn
    delete context[fnKey];
    return result;
  }
  
  function fn(a,b,c) {
    console.log(this,a,b,c);
  }
  
  fn.myApply({x:100},[10,20,30]);
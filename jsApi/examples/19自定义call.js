// 自定义call
Function.prototype.myCall = function (context, ...args) {
  if (context === null) context = globalThis;
  if (typeof context !== "object") context = new Object(context);

  const fnKey = Symbol();

  context[fnKey] = this;

  const res = context[fnKey](...args);
  // 清理掉fn
  delete context[fnKey];

  return res;
};


function fn(a,b,c) {
  console.log(this,a,b,c);
}

fn.myCall({x:100},10,20,30);



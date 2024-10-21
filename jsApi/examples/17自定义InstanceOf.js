/*
 * :file description: 
 * :name: /jsApi/examples/17自定义InstanceOf.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-07-25 22:20:46
 * :last editor: 张德志
 * :date last edited: 2024-10-21 11:59:42
 */
function myInstance(instance, origin) {
  if (instance === null) return false;

  const type = typeof instance;

  if (type !== "object" && type !== "function") {
    // 值类型
    return false;
  }

  const temp = instance;

  while (temp) {
    if (temp.__proto__ === origin.prototype) {
      return true;
    }
    temp = temp.__proto__; //顺着原型链查查
  }

  return false;
}


console.log(myInstance({},Object));
console.log(myInstance([],Array));
console.log(myInstance('hello',String))


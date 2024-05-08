/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-05-08 20:45:22
 */


export function MyInstance(instance,origin) {
  if(instance == null) return false; // null undefined

  if(typeof instance !== 'object' && typeof instance !== 'function') {
    return false;
  }

  let tempInstance = instance;
  while(tempInstance) {
    if(tempInstance.__proto__ === origin.prototype) {
      return true;
    }
    tempInstance = tempInstance.__proto__;
  }
  return false;
}

console.log(MyInstance({},Object));
console.log(MyInstance([],Object));
console.log(MyInstance([],Array));
console.log(MyInstance('123',Number));




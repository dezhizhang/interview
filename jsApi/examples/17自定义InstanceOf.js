function myInstance(instance,origin) {
  if(instance === null) return false;

  if(typeof instance !== 'object' && typeof instance !== 'function') {
    return false;
  }

  let temp = instance;
  while(temp) {
    if(temp.__proto__ === origin.prototype) {
      return true;
    }
    temp = temp.__proto__;
  }
  return false;
}

console.log(myInstance({},Object));
console.log(myInstance([],Array))


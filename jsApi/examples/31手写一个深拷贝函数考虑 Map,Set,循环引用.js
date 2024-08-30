

function cloneDeep(obj,map = new WeakMap()) {
    if(typeof obj !== 'object' || obj === null) return obj;
  
    // 避免循环引用
    const objFormMap = map.get(obj);
    if(objFormMap) return objFormMap;
  
    let target = {};
    map.set(obj,target);
  
    // map
    if(obj instanceof Map) {
      target = new Map();
      obj.forEach((v,k) => {
        const v1 = cloneDeep(v,map);
        const k1 = cloneDeep(k,map);
        target.set(k1,v1);
      })
    }
  
    // set
    if(obj instanceof Set) {
      target = new Set();
      obj.forEach(v => {
        const v1 = cloneDeep(v,map);
        target.add(v1);
      })
    }
  
    // array
    if(obj instanceof Array) {
      target = obj.map(item => cloneDeep(item,map));
    }
  
    // Object 
    for(const key in obj) {
      const value = obj[key];
      const value1 = cloneDeep(value,map);
      target[key] = value1;
    }
  
    return target;
  }
  
  const a = {
    set:new Set([10,20,30]),
    map:new Map([['x',10],['y',20]]),
  }
  
  a.self = a;
  console.log(cloneDeep(a));
  
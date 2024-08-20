class LRUCache {
  constructor(length) {
    if (length < 1) throw new Error("invalid length");
    this.length = length;
    this.data = new Map();
  }
  set(key,value) {
    const data = this.data;

    // 如果存在key则删除
    if(data.has(key)) {
      data.delete(key);
    }

    // 重新设置key
    data.set(key,value);

    if(data.size > this.length) {
      // 如果超出了容量，则删除map最老元素
      const delKey = data.keys().next().value;
      data.delete(delKey);
    }
  }

  get(key) {
    const data = this.data;
    // 如果不存在则返回null
    if(!data.has(key)) return null;

    const value = data.get(key);

    data.delete(key);
    // 重新设置
    data.set(key,value);
    return value;
  }
}

const lruCache = new LRUCache(2);
lruCache.set(1,1);
lruCache.set(2,2);
console.log(lruCache.get(1));

lruCache.set(3,3);
console.log(lruCache.get(2));





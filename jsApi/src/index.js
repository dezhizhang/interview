/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-05-09 22:44:32
 */

class LRUCache {
  constructor(length) {
    if (length < 1) throw new Error('无效的length');
    this.length = length;
    this.data = new Map();
  }

  set(key, value) {
    const data = this.data;
    if (data.has(key)) {
      data.delete(key);
    }

    data.set(key, value);

    if (data.size > this.length) {
      const delKey = data.keys().next().value;
      data.delete(delKey);
    }
  }

  get(key) {
    const data = this.data;
    if(!data.has(key)) return null;
    const value = data.get(key);

    data.delete(key);

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

lruCache.set(4,4);
console.log(lruCache.get(1));
console.log(lruCache.get(3));
console.log(lruCache.get(4));


/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-04-28 20:09:04
 */




const vMap = new WeakMap();

const userInfo = {
  name:'hello',
}

const cityInfo = {
  name:'world'
}

vMap.set(userInfo,cityInfo);

console.log(vMap.get(userInfo));






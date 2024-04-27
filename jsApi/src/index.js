/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-04-27 16:42:43
 */

const User = {
  count:1,
  getCount:function() {
    return this.count;
  }
}

console.log(User.getCount());
const func = User.getCount;

console.log(func());

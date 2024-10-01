/*
 * :file description:
 * :name: /jsApi/examples/62私有属性和方法.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-23 11:50:58
 * :last editor: 张德志
 * :date last edited: 2024-09-23 12:00:38
 */
class Test {
  
  #prinfo = "我是私有属性";

  #test() {
    console.log("hllo");
  }
  getInfo() {
    return this.#prinfo;
  }
}

const t = new Test();
console.log(t);
console.log(t.getInfo());

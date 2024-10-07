/*
 * :file description: 
 * :name: /desigin/examples/singleton.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-07 10:06:27
 * :last editor: 张德志
 * :date last edited: 2024-10-07 10:06:28
 */
class Singleton{
  constructor() {
    if(Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2);
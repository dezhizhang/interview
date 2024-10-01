/*
 * :file description: 
 * :name: /jsApi/examples/64单例模式.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-23 15:06:47
 * :last editor: 张德志
 * :date last edited: 2024-09-23 15:06:48
 */
class SingleTon {
    static #instance;
    static getInstance() {
      if (this.#instance === null) {
        this.#instance = new SingleTon();
        return;
      }
      return this.#instance;
    }
  }
  
  const s1 = SingleTon.getInstance();
  const s2 = SingleTon.getInstance();
  
  console.log(s1 === s2);
  
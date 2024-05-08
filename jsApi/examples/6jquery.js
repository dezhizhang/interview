/*
 * :file description:
 * :name: /jsApi/examples/jquery.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-19 23:00:11
 * :last editor: 张德志
 * :date last edited: 2024-04-19 23:00:17
 */
class JQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector);
    const length = result.length;
    for (let i = 0; i < length; i++) {
      this[i] = result[i];
    }
    this.length = length;
    this.selector = selector;
  }
  get(index) {
    return this[index];
  }
  each(fn) {
    for (let i = 0; i < this.length; i++) {
      const elem = this[i];
      fn(elem);
    }
  }
  on(type, fn) {
    return this.each((elem) => {
      elem.addEventListener(type, fn, false);
    });
  }
}

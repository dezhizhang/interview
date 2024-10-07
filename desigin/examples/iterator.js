/*
 * :file description:
 * :name: /desigin/examples/iterator.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-07 16:12:11
 * :last editor: 张德志
 * :date last edited: 2024-10-07 16:12:17
 */

class NumberIterator {
  constructor(numbers) {
    this.numbers = numbers;
    this.index = 0;
  }
  // next 方法用于获取集合中的下一个元素
  next() {
    if (this.index < this.numbers.length) {
      return { value: this.numbers[this.index++], done: false };
    } else {
      return { value: undefined, done: true };
    }
  }
}

const numbers = [1, 2, 3, 4, 5];
const iterator = new NumberIterator(numbers);

// 使用迭代器遍历数组
let result = iterator.next();
while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}

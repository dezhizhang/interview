/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-04-29 20:59:08
 */


class Queue{
  stack1 = [];
  stack2 = [];
  constructor() {

  }

  add(n) {
    this.stack1.push(n);
  }

  delete() {
    let result;
    const stack1 = this.stack1;
    const stack2 = this.stack2;

    while(stack1.length) {
      const n = stack1.pop();
      if(n!= null) {
        stack2.push(n);
      }
    }

    // 执行stack pop
    result = stack2.pop();
    while(stack2.length) {
      const n = stack2.pop();
      if(n != null) {
        stack1.push(n);
      }
    }

    return result || null;

  }

  get length() {
    return this.stack1.length;
  }
}

const queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);

console.log(queue.length);

const n = queue.delete();
console.log(n);


const n2 = queue.delete();
console.log(n2);
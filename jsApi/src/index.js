/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-05-08 20:19:23
 */

class LazyMan {
  tasks = [];
  constructor(name) {
    this.name = name;
    setTimeout(() => {
        this.next();
    })
  }
  next() {
    const task = this.tasks.shift();
    if (task) task();
  }
  eat(food) {
    const task = () => {
      console.log(`${this.name} eat ${food}`);
      this.next();
    };
    this.tasks.push(task);
    return this;
  }

  sleep(seconds) {
    const task = () => {
      setTimeout(() => {
        console.log(`${this.name} 已经睡完了 ${seconds}s`);
        this.next();
      }, seconds * 1000);
    };
    this.tasks.push(task);
    return this;
  }
}


const m = new LazyMan('tom')
m.eat('苹果').eat('香蕉').sleep(2).eat('葡萄').sleep(1).eat('西瓜');

class LazyMan {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    setTimeout(() => {
      this.next();
    });
  }

  next() {
    const task = this.tasks.shift();
    task && task();
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
      console.log(`${this.name} 开始睡觉`);
      setTimeout(() => {
        console.log(`${this.name} 已经睡完了 ${seconds}s 开始执行下一个任务`);
        this.next();
      }, seconds * 1000);
    };
    this.tasks.push(task);
    return this;
  }

}

const man = new LazyMan('tom');
man.eat('苹果').eat('香蕉').sleep(2).eat('葡萄');



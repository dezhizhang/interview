/*
 * :file description: 
 * :name: /desigin/examples/subject.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-07 14:11:17
 * :last editor: 张德志
 * :date last edited: 2024-10-07 14:11:17
 */
//主体对象（被观察者）
class Subject {
    constructor() {
      this.observers = [];
    }
    addObserver(observer) {
      this.observers.push(observer);
    }
    // 移除观察者
    removeObserver(observer) {
      this.observers = this.observers.filter((obs) => obs !== observer);
    }
  
    // 通知所有观察者
    notifyObservers(data) {
      this.observers.forEach((observer) => observer.update(data));
    }
  }
  
  class Observer {
    constructor(name) {
      this.name = name;
    }
    update(data) {
      console.log(`${this.name} received update: ${data}`);
    }
  }
  
  // 创建主体
  const subject = new Subject();
  
  // 创建观察者
  const observer1 = new Observer('Observer 1');
  const observer2 = new Observer('Observer 2');
  
  subject.addObserver(observer1);
  subject.addObserver(observer2);
  
  // 通知观察者
  subject.notifyObservers('New data available');
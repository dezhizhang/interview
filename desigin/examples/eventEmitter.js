/*
 * :file description:
 * :name: /desigin/examples/eventEmitter.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-07 14:30:48
 * :last editor: 张德志
 * :date last edited: 2024-10-07 14:38:08
 */

class EventEmitter {
  constructor() {
    this.events = {};
  }
  // 订阅事件
  subscribe(event, listener) {
    if (!this.events[event]) {
      this.events = [];
    }
    this.events[event].push(listener);
  }
  // 取消订阅
  unsubscribe(event, listener) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter((l) => l !== listener);
  }
  // 发布事件
  publish(event, data) {
    if (!this.events[event]) return;
    this.events[event].forEach((listener) => listener(data));
  }
}

// 创建发布订阅系统
const eventEmitter = new EventEmitter();

// 订阅者
function listener1(data) {
  console.log("Listener 1 received:", data);
}

function listener2(data) {
  console.log("Listener 2 received:", data);
}

// 订阅事件
eventEmitter.subscribe("message", listener1);
eventEmitter.subscribe("message", listener2);

// 发布事件
eventEmitter.publish("message", "Hello, Subscribers!");
// 输出：
// Listener 1 received: Hello, Subscribers!
// Listener 2 received: Hello, Subscribers!

// 取消订阅
eventEmitter.unsubscribe("message", listener1);

// 再次发布事件
eventEmitter.publish("message", "Another message");
// 输出：
// Listener 2 received: Another message

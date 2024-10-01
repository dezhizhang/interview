/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-07-25 22:20:46
 * :last editor: 张德志
 * :date last edited: 2024-09-23 15:35:37
 */
// class EventBus {
//   constructor() {
//     this.events = {};
//     this.onceEvents = {};
//   }

//   on(type, fn) {
//     const events = this.events;
//     if (!events[type]) events[type] = [];
//     events[type].push(fn);
//   }

//   once(type, fn) {
//     const onceEvents = this.onceEvents;
//     if (!onceEvents[type]) onceEvents[type] = [];
//     onceEvents[type].push(fn);
//   }
//   off(type, fn) {
//     if (fn) {
//       //解绑所有事件
//       this.events[type] = [];
//       this.onceEvents[type] = [];
//     } else {
//       // 解绑单个事件
//       const fnList = this.events[type];
//       const onceFnList = this.onceEvents[type];

//       if (fnList) {
//         this.events[type] = fnList.filter((curFn) => curFn !== fn);
//       }

//       if (onceFnList) {
//         this.onceEvents[type] = onceFnList.filter((curFn) => curFn !== fn);
//       }
//     }
//   }
//   emit(type, ...args) {
//     const fnList = this.events[type];
//     const onceFnList = this.onceEvents[type];

//     if (fnList) {
//       fnList.forEach((fn) => fn(...args));
//     }
//     if (onceFnList) {
//       onceFnList.forEach((fn) => fn(...args));
//       this.onceEvents = [];
//     }
//   }
// }

// const evnet = new EventBus();

// function fn1(a, b) {
//   console.log("fn1", a, b);
// }

// function fn2(a, b) {
//   console.log("fn2", a, b);
// }

// evnet.on("key1", fn1);
// evnet.on("key1", fn1);
// evnet.once("key2", fn2);
// evnet.once("key2", fn2);

// evnet.emit("key1", 10, 20);
// evnet.emit("key2", 10, 20);

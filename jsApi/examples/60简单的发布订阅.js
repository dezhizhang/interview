/*
 * :file description: 
 * :name: /jsApi/examples/60简单的发布订阅.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-22 20:04:30
 * :last editor: 张德志
 * :date last edited: 2024-09-22 20:04:31
 */
class EventEmitter {
    constructor() {
      this.event = {};
    }
    on(type, cb) {
      if (this.event[type]) {
        this.event[type].push(cb);
      } else {
        this.event[type] = [cb];
      }
    }
    emit(type, ...args) {
      if (this.event[type]) {
        this.event[type].forEach((cb) => {
          cb(...args);
        });
      }
    }
    once(type,cb) {
      const fn = (...args) => {
          cb(...args);
          this.off(type,fn);
      }
      this.on(type,fn);
    }
    off(type,cb) {
      if(this.event[type]) {
          this.event[type] = this.event[type].filter((item) => item === cb)
      }
    }
  }
  
  
  
  const ev = new EventEmitter();
  ev.on("data", (...args) => {
    console.log('event1',args);
  });
  
  ev.on("data", (...args) => {
    console.log('event2',args);
  });
  
  ev.once('data',(...args) => {
      console.log('event3',args);
  })
  
  ev.once('data',(...args) => {
      console.log('event5',args);
  })
  
  ev.emit('data','a','b','c','d');
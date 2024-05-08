/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-05-08 22:32:49
 */

class EventBus {
  constructor() {
    this.events = {};
  }

  on(type, fn, isOnce = false) {
    const events = this.events;
    if (events[type] == null) {
      events[type] = [];
    }
    events[type].push({ fn, isOnce });
  }

  once(type, fn) {
    this.on(type, fn, true);
  }

  off(type, fn) {
    if (!fn) {
      // 解邦所有type的函数
      this.events[type] = [];
    } else {
      // 解绑单个fn
      const fnList = this.events[type];
      if (fnList) {
        this.events[type] = fnList.filter((item) => item.fn !== fn);
      }
    }
  }
  emit(type, ...args) {
    const fnList = this.events[type];
    if (fnList == null) return;

    this.events[type] = fnList.filter((item) => {
      const { fn, isOnce } = item;
      fn(...args);

      if (!isOnce) return true;
      return false;
    });
  }
}

const events = new EventBus();

function fn1(a,b) {
  console.log('fn1',a,b);
}

function fn2(a,b) {
  console.log('fn2',a,b);
}

function fn3(a,b) {
  console.log('fn3',a,b);
}


events.on('key1',fn1);
events.on('key1',fn2);
events.once('key1',fn3);

events.emit('key1',10,20);

events.off('key1',fn1);
events.emit('key1',10,20);


// events.emit('key1',10,20);







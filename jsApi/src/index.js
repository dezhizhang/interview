// 自定义事件总线

class EventBus {
  constructor() {
    this.events = {};
  }
  on(type, fn, isOnce = false) {
    let events = this.events;
    if (!events[type]) {
      events[type] = [];
    }
    events[type].push({ fn, isOnce });
  }
  // 绑定一次
  once(type, fn) {
    this.on(type, fn, true);
  }
  // 解邦
  off(type, fn) {
    // 解绑所有type函数
    if (!fn) this.events[type] = [];

    const fnList = this.events[type];
    if (fnList) {
      this.events[type] = fnList.filter((item) => item.fn !== fn);
    }
  }
  // 触发
  emit(type, ...args) {
    const fnList = this.events[type];
    if (!fnList.length) return;

    //
    this.events[type] = fnList.filter((item) => {
      const { fn, isOnce } = item;
      fn(...args);
      if (!isOnce) return true;
      return false;
    });
  }
}


const evnet = new EventBus();

function fn1(a,b) {
  console.log('fn1',a,b);
}


function fn2(a,b) {
  console.log('fn2',a,b);
}



evnet.on('key1',fn1);
evnet.on('key1',fn1);
evnet.once('key2',fn2);
evnet.once('key2',fn2);


evnet.emit('key1',10,20)
evnet.emit('key2',10,20)
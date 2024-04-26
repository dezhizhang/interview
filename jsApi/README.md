# 原生 jsApi

# 面试视频https://www.bilibili.com/video/BV1sN411974w/?spm_id_from=333.337.search-card.all.click&vd_source=10257e657caa8b54111087a9329462e8

### Promise

1. await 相当于 Promise.then 处理不了 Promise.reject
2.

```js
!(async function () {
  const p4 = Promise.reject('err1');
  const d = await p4;
  console.log('data', d);
})();
```

### 微任务执行时机比宏任务时机早

1. 宏任务 setInterval,setTimeout,Ajax,Dom
2. 微任务 async/await

```js
console.log(100);

setTimeout(() => {
  console.log(200);
});

Promise.resolve().then(() => {
  console.log(300);
});

console.log(400);
```

### 手写 promise TODO 回来重点看

```js
class MyPromise {
  state = 'pending';
  value = undefined;
  reason = undefined;

  resolveCallbacks = [];
  rejectCallbacks = [];

  constructor(fn) {
    const resolveHandler = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.resolveCallbacks.forEach((fn) => fn(this.value));
      }
    };
    const rejectHandler = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.resolveCallbacks.forEach((fn) => fn(this.reason));
      }
    };
    try {
      fn(resolveHandler, rejectHandler);
    } catch (err) {
      rejectHandler(err);
    }
  }
  then(fn1, fn2) {
    fn1 = typeof fn1 === 'function' ? fn1 : (v) => v;
    fn2 = typeof fn2 === 'function' ? fn2 : (e) => e;

    if (this.state === 'pending') {
      const p1 = new MyPromise((resolve, reject) => {
        this.resolveCallbacks.push(() => {
          try {
            const newValue = fn1(this.value);
            resolve(newValue);
          } catch (err) {
            reject(err);
          }
        });

        this.rejectCallbacks.push(() => {
          try {
            const newReason = fn2(this.reason);
            reject(newReason);
          } catch (err) {
            reject(err);
          }
        });
      });
      return p1;
    }

    // fulfilled状态
    if (this.state === 'fulfilled') {
      const p1 = new MyPromise((resolve, reject) => {
        try {
          const newValue = fn1(this.value);
          resolve(newValue);
        } catch (err) {
          reject(err);
        }
      });
      return p1;
    }

    // rejcted
    if (this.state === 'rejcted') {
      const p1 = new MyPromise((resolve, reject) => {
        try {
          const newReason = fn2(this.reason);
          reject(newReason);
        } catch (err) {
          reject(err);
        }
      });
      return p1;
    }
  }
  catch(fn) {
    return this.then(null, fn);
  }
}

MyPromise.resolve = function (value) {
  return new MyPromise((resolve) => resolve(value));
};

MyPromise.reject = function (reason) {
  return new MyPromise((resolve, reject) => reject(reason));
};

MyPromise.all = function (promiseList = []) {
  const p1 = new Promise((resolve, reject) => {
    const result = [];
    const length = promiseList.length;
    let resolveCount = 0;
    promiseList.forEach((p) => {
      p.then((data) => {
        result.push(data);
        resolveCount++;
        if (resolveCount === length) {
          resolve(result);
        }
      }).catch((err) => {
        reject(err);
      });
    });
  });
  return p1;
};

MyPromise.race = function (promiseList) {
  let resolved = false;
  const p1 = new MyPromise((resolve, reject) => {
    promiseList.forEach((p) => {
      p.then((data) => {
        if (!resolved) {
          resolve(data);
          resolved = true;
        }
      }).catch((err) => {
        reject(err);
      });
    });
  });
  return p1;
};
```

### 深拷贝

```js
function deepClone(obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }

  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  for (let key in obj) {
    // 保证key 不是原型的属性
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }

  return result;
}
```

###

```js
const obj = {
  x: 100,
};

if (obj.a == null) {
}

// 相当于
// if(obj.a === null || obj.a === undefined) {}
```

### 闭包

```js
function create() {
  let a = 100;
  return function () {
    console.log(a);
  };
}

const fn = create();

const a = 200;
fn(); // 100
```

### 闭包函数作为参数

```js
function print(fn) {
  const a = 200;
  fn();
}

const a = 100;
function fn() {
  console.log(a);
}

print(fn);
```

### 异步处理

```js
import $ from 'jQuery';

console.log('start');

$.get('https://cnodejs.org/api/v1/topics', function (data) {
  console.log('data', data);
});

console.log('end');
```

### promise 加载图片

```js
function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error('图片加载失败'));
    };
    img.src = url;
  });
}
```

### 事件代理

```js
<div id="div1">
  <a href="#">aaa</a>
  <a href="#">bbb</a>
  <a href="#">ccc</a>
</div>;

const div1 = document.getElementById('div1');

div1.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event.target);
});
```
### 代理函数
```ts
function bindEvent(elem, type, selector, fn) {
  if (fn == null) {
    fn = selector;
    selector = null;
  }

  elem.addEventListender(type, (event) => {
    const target = event.target;
    if (selector) {
      // 代理邦定
      if (target.matches(selector)) {
        fn.call(target, event);
      }
      return;
    }
    fn.call(target, event);
  });
}

```
### ajax
```js
const xhr = new XMLHttpRequest();
xhr.open('GET','https://cnodejs.org/api/v1/topics',false);
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText))
  }
}

xhr.send(null);

```
### Promise版ajax
```js
function ajax(url) {
  return new Promise((resolve,reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText))
      }else if(xhr.status === 400) {
        reject(new Error('请求出错'))
      }
      
    }
    xhr.send(null)
  })
}

```
### http和https

1. http是明文传输，敏感信息容易被中间劫持
2. https = http + 加密 劫持了也无法解密

### 加密方式 
1. 对称加密： 一个key同负责加密，解密
2. 非对称加密： 一对key,A 加密之后只能用B来解密
https 同时用到对称加密和非对称加密

### 防抖函数
```js
const oInput = document.getElementById('input');

function debounce(fn, delay = 500) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}

oInput.addEventListener('keyup',debounce(() => {
  console.log(oInput.value);
}));
```
### 节流函数

```js
const div1 = document.getElementById('div1');

function throttle(fn,delay = 200) {
  let timer = null;
  return function() {
    if(timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(this,arguments);
      timer = null
    },delay)
  }
}

div1.addEventListener('drag',throttle((event) => {
  console.log(event.offsetX);
}))
```







# 原生jsApi
# 面试视频https://www.bilibili.com/video/BV1sN411974w/?spm_id_from=333.337.search-card.all.click&vd_source=10257e657caa8b54111087a9329462e8

### Promise
1. await 相当于Promise.then 处理不了Promise.reject
2. 
```js
!(async function() {
    const p4 = Promise.reject('err1');
    const d = await p4;
    console.log('data',d);
})()

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

### 手写promise TODO 回来重点看
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
  x:100,
}

if(obj.a == null) {

}

// 相当于
// if(obj.a === null || obj.a === undefined) {}
```
### 闭包
```js
function create() {
  let a = 100;
  return function() {
    console.log(a);
  }
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

$.get('https://cnodejs.org/api/v1/topics',function(data) {
  console.log('data',data);
});

console.log('end');

```
### promise加载图片
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
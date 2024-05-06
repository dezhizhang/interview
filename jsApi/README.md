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
### 进程process和线程thread
```js
// 进程, OS进行资源分配和调度的最小单位，有独立内存空间
// 线程, OS进行运算调度的最小单位，共享进程内存空间
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
### 判断两个对像是否相等
```js
function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

function isEqual(obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2;
  }

  if (obj1 === obj2) {
    return true;
  }

  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let key in obj1) {
    const result = isEqual(obj1[key], obj2[key]);
    if (!result) {
      return false;
    }
  }
  return true;
}

const obj1 = {
  a: 100,
  b: {
    x: 100,
    y: 200,
  },
};

const obj2 = {
  a: 100,
  b: {
    x: 100,
    y: 200,
  },
};

```
### splice的用法
```js
const arr = [10,20,30,40,50];
const result = arr.splice(1,2,'a','b','c');

console.log('arr',arr);
console.log('result',result);
```
### map操作
```js
const arr = [10,20,30].map((num,index) => {
  return parseInt(num,index)
});

console.log(arr);

```
### 函数场明函数提升
```js
const result = sum(10, 20);

function sum(x, y) {
  return x + y;
}

```
### 函数表过式不会变量提升
```js
const result = sum(10,20);
console.log('result',result);

const sum = function(x,y) {
  return x + y;
}
```
### this的场影题
```js
const User = {
  count:1,
  getCount:function() {
    return this.count;
  }
}

console.log(User.getCount());
const func = User.getCount;

console.log(func());

```
### trim方法
```js
String.prototype.trim = function() {
  return this.replace(/^\s+/,'').replace('/\s+$','')
}
```
### 数组拍平
```js
function flatten(arr) {
  const isDeep = arr.some(item => item instanceof Array);
  if(!isDeep) {
    return arr;
  }

  const result = Array.prototype.concat.apply([],arr);
  return flatten(result);

}

const result = flatten([[1,2],[3,4]]);
```
### map类型有序类型
```js
const m = new Map([
  ['k1','hello'],
  ['k2',100],

]);

m.set('name','hello');

m.forEach((key,value) => console.log({key,value}))
```

### set无序速度快
```js
const set = new Set([10,20,30,40]);
set.forEach((val) => console.log(val));
```
### WeakMap
```js
const vMap = new WeakMap();

const userInfo = {
  name:'hello',
}

const cityInfo = {
  name:'world'
}

vMap.set(userInfo,cityInfo);

console.log(vMap.get(userInfo));

```
### reduce求和函数
```js
const arr = [10,20,30,40,50];

const sum = arr.reduce((sum,curVal,index,arr) => {
  console.log({sum,curVal,index,arr})
  return sum + curVal;
},0);

console.log('sun',sum);

```

## 算法与数据结构

### 旋转数组key步pop和unshift
```js
function rotate1(arr, k) {
  const length = arr.length;
  if (!k || length === 0) return arr;

  const step = Math.abs(k % length);

  for (let i = 0; i < step; i++) {
    const n = arr.pop();
    if (n) {
      arr.unshift(n);
    }
  }
  return arr;
}

const arr = [1,2,3,4,5,6,7];
const arr1 = rotate1(arr,3);
console.log(arr1)

```

### 旋转数组key步slice和concat
```js
function rotate2(arr, k) {
  const length = arr.length;
  if (!k || length === 0) return arr;

  const step = Math.abs(k % length);

  const part1 = arr.slice(-step);
  const part2 = arr.slice(0, length - step);

  return part1.concat(part2);
}

const arr = [1, 2, 3, 4, 5, 6, 7];

const arr1 = rotate2(arr, 3);
console.log(arr1);

```
###  微任务与宏任务
```js
console.log('start');

setTimeout(() => {
  console.log('timeout');
});

Promise.resolve().then(() => {
  console.log('promise then');
});

console.log('end');

```
### for和forEach那个更快
```js
// for更快
// forEeach每次都要创建一个函数来调用，而for不会创建函数
// 函数需要独立的作用域，会有额外的开销
const arr = [];

for(let i=0;i < 10000 * 10000;i++) {
  arr.push(i);
}

const length = arr.length;

console.time('for');
let n = 0;

for(let i=0;i < length;i++) {
  n++;
}

console.timeEnd('for'); // 2.36 for更快

console.time('forEach');
let n1 = 0;
arr.forEach(() => {
  n1++;
});
console.timeEnd('forEach'); //8.78

```



### 判断括号是否匹配 
```js
function isMatch(left, right) {
  if (left === '{' && right === '}') return true;
  if (left === '[' && right === ']') return true;
  if (left === '(' && right === ')') return true;

  return false;
}

function matchBracket(str) {
  const length = str.length;

  if (length === 0) return true;

  const stack = [];

  const leftSymbols = '([{';
  const rightSymbols = '}])';

  for (let i = 0; i < length; i++) {
    const s = str[i];
    if (leftSymbols.includes(s)) {
      stack.push(s);
    } else if (rightSymbols.includes(s)) {
      const top = stack[stack.length - 1];
      if (isMatch(top, s)) {
        stack.pop();
      }else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const str = '([{}])';


console.log(matchBracket(str));
```

### 栈模拟队列
```js
class Queue{
  stack1 = [];
  stack2 = [];
  constructor() {

  }

  add(n) {
    this.stack1.push(n);
  }

  delete() {
    let result;
    const stack1 = this.stack1;
    const stack2 = this.stack2;

    while(stack1.length) {
      const n = stack1.pop();
      if(n!= null) {
        stack2.push(n);
      }
    }

    // 执行stack pop
    result = stack2.pop();
    while(stack2.length) {
      const n = stack2.pop();
      if(n != null) {
        stack1.push(n);
      }
    }

    return result || null;

  }

  get length() {
    return this.stack1.length;
  }
}

```
### 链表反转
```js
// 链表反转
function reverseLinkList(listNode) {
  let prevNode;
  let curNode;
  let nextNode = listNode;


  while(nextNode) {
    if(curNode && !prevNode) {
      delete curNode.next;
    }

    if(curNode && prevNode) {
      curNode.next = prevNode;
    }

    prevNode = curNode;
    curNode = nextNode;
    nextNode = nextNode.next;
  }


  curNode.next = prevNode;

  return curNode; 
}

function createLinkList(arr) {
  const length = arr.length;

  if(length === 0) throw new Error('数组为空');

  let curNode = {
    value:arr[length - 1]
  }

  if(length === 1) return curNode;

  for(let i = length - 2;i >=0;i--) {
    curNode = {
      value:arr[i],
      next:curNode
    }
  }

  return curNode;

}

const n = createLinkList([1,2,3,4]);

console.log(reverseLinkList(n));
```
### 同域多tab数据共享
```js
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  let obj = {
    id: Math.random(),
    name: 'hello',
  };
  console.log('hello')
  localStorage.setItem('info', JSON.stringify(obj));
});

window.addEventListener('storage', (event) => {
  console.log('key', event.key);
  console.log('value', event.newValue);
});


```








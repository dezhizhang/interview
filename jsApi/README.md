# 原生jsApi

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
# 前端面

### Promise.resolve() 不会执行catch `1,3`
```js
Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .catch(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  });
```
### resolve 里有异常返回reject promise `1,2,3`
```js
Promise.resolve()
  .then(() => {
    console.log(1);
    throw new Error('error1');
  })
  .catch(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  });

```

### catch 不会执行返回resolve的promise `1,2`
```js
Promise.resolve()
  .then(() => {
    console.log(1);
    throw new Error('error1');
  })
  .catch(() => {
    console.log(2);
  })
  .catch(() => {
    console.log(3);
  });
```

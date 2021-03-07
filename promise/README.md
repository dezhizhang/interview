<!--
 * @Author: your name
 * @Date: 2021-03-07 01:19:16
 * @LastEditTime: 2021-03-07 20:19:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/promise/README.md
-->
### 同步回调函数
```
const arr = [1,3,5];
arr.forEach(item => {
    console.log(item);
});
console.log("forEach之后");
```
### 异步回调函数
```
setTimeout(()=>{
    console.log('time callback');
},0)

console.log('setTimeout之后');
```
### 常见的内置错误
```
1,ReferenceError:引用变量不存在
2,TypeError：数据类型
3,RangeError：数据值不在其所允许的范围内
```
### Promise的基本使用
```
const p = new Promise((resolve,reject) => {
    setTimeout(() => {
        const time = Date.now()
        if(time % 2 == 0) {
            resolve('success');
        } else {
            reject('error')
        }
    },1000)
});    

p.then(res => {
    console.log(res);
},rej => {
    console.log(rej)
})
```
### Promise.all方法
```
const p1 = new Promise((resolve,reject) => {
    resolve(1);
});

const p2 = Promise.resolve(2);
const p3 = Promise.reject(3);

const pAll = Promise.all([p1,p2,p3]);
pAll.then(value => {
    console.log('value',value);
},reason => {
    console.log('reason',reason);
});
```
### Promise.race方法
```
const pRace = Promise.race([p1,p2,p3]);
pRace.then(value => {
    console.log('value',value);
},reason => {
    console.log('reaseon',reason);
})
```
### Promise的异步执行
```
const p = new Promise((resolve,reject) => {
    resolve(1);
})

p.then(value => {
    console.log("value",value);
},
reson => {
    console.log('reson',reson);
});

console.log('------')

```
### Promise中then的值由第一个then返回的值决定
```
const p = new Promise((resolve,reject) => {
    resolve(1);
});
p.then(value => {
    console.log('value',value);
    return 4
},
reason => {
    console.log('value',value);
}).then(value => {
    console.log('value',value);
},
reson => {
  console.log('reson',reson);
})

value 1
value 4

```
### 异常穿透
```
new Promise((resolve,reject) => {
    reject(1)
}).then(value => {
    console.log('onResolved1',value)
    return 2
}).then(value => {
    console.log('onResolved2',value);
    return 3
}).catch(reason => {
    console.log('reject',reason);
});
reject 1
```
### 中断Promise
```
new Promise((resolve,reject) => {
    reject(1)
}).then(value => {
    console.log('onResolved1',value);
    return 2
}).then(value => {
    console.log('onResolved2',value);
    return 2
}).catch(reason => {
    console.log('reason',reason);
    return new Promise((resolve,reject) => {})
}).then(resolve => {
    console.log('resolve',resolve);
})
```










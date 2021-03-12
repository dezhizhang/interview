<!--
 * @Author: your name
 * @Date: 2021-03-12 20:59:55
 * @LastEditTime: 2021-03-12 22:58:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/lodash/README.md
-->
### applay和bing的实现
```
Function.prototype.apply = function(obj,args) {
    if(obj === undefined || obj === null) {
        obj = window;
    }
    obj.fn = this;
    const result = obj.fn(...args);
    delete obj.fn;
    return result;
}

```
### 函数节流
```
let btn = document.querySelector('button');
btn.onclick = throttle(handleClick,2000);
        
function throttle(callback,delay) {
    let pre = 0
    let that = this;
    return function(event) {
        const current = Date.now();
        if(current - pre > delay) {
            callback.call(that,event);
            pre = Date.now() //记录
        }
               
        }
}
function handleClick(event) {
    console.log('处于点事事件',this,event);
}
```
### 防抖函数
```
let btn = document.querySelector('button');
btn.onclick = debounce(handleClick,200);
function debounce(callback,delay) {
    const that = this;
    return function(event) {
    //如果上一次事件没有真正处理取消它
        if(callback.hasOwnProperty('timeoutId')) {
            clearTimeout(callback.timeoutId);
        }
        callback.timeoutId = setTimeout(() => {
            callback.call(that,event);
            delete callback.timeoutId;
        },delay)
        }

    }
function handleClick(event) {
    console.log('防抖',event);
}
```



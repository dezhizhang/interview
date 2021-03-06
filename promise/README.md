<!--
 * @Author: your name
 * @Date: 2021-03-07 01:19:16
 * @LastEditTime: 2021-03-07 01:35:48
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




<!--
 * @Author: your name
 * @Date: 2021-03-06 10:25:44
 * @LastEditTime: 2021-03-06 12:30:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /questions/day05/README.md
-->
###  闭包
```
for(let i=0;i < 10;i++) {
    setTimeout(() => {
        console.log(i);
    },1000)
}

```
### 变量作用域
```
let b = 10;
(function b() {
    b = 20
    console.log(b);
})();

1，本应匿名的函数如果设置了函数名，在外面还是无法调用，但是在函数里面是可以使用的
2,而且类似于创建常量一样，这个名字存储的值不能再被修改(非严格模式下不报错，严格模式下直接报错)

console.log(b);
```
### 变量的值
```
let a = {
    n:0,
    toString:function() {
        return ++this.n
    }
}
if(a == 1 && a == 2 && a== 3) {
    console.log('ok');
}
```
### 对像的push方法
```
let obj = {
    2:3,
    3:4,
    length:2,
    push:Array.prototype.push
}

obj.push(1);
obj.push(2);

console.log(obj);

```
### 对像转数组
```
let obj = {
    1:222,
    2:123,
    5:888
}
let arr = [];
for(let i=0;i <= 12;i++) {
    if(obj[i]) {
        arr[i] = obj[i]
    } else {
        arr[i] = null
    }
}

arr.shift();
console.log(arr);
```





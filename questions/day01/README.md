<!--
 * @Author: your name
 * @Date: 2021-03-03 20:38:19
 * @LastEditTime: 2021-03-03 22:14:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day01/README.md
-->

### 数字名和字符串名一样
```
let a = {};
let b= "0";
let c = 0;
a[b] = "珠峰";
a[c] = "培训";

console.log(a[b]);
培训
```
### Symbol创建的是唯一值
```
let a = {};
let b = Symbol('1');
let c = Symbol('1');
a[b] = "珠峰";
a[c] = "培训";
珠峰
```
### 对像属性名都会存成object[objext]
```

let a = {};
let b = {
    n:'1'
}
let c = {
    m:'2'
}

a[b] = "珠峰";
a[c] = "培训";
培训
```
### 闭包的引用
```
let test = (function(i) {
    return function() {
        console.log(i *=2);
    }
})(2);

test(5);
```
### 闭包作用域
```
let a = 0;
let b = 0;

function A(a) {
    A = function(b) {
        console.log(a + b++);
    }
    console.log(a++);
}
A(1);
A(2);
1,4
```
### 浅考隆
```
let obj = {
    a:100,
    b:[10,20,30],
    c:{
        x:10,
    },
    d:/^\d+$/
}

let obj2 = {};
for(let key in obj) {
    if(!obj.hasOwnProperty(key)) break;
    obj2[key] = obj[key]
}
```
### 深克隆
```
function deepClone(obj) {
    if(typeof obj!=='object') return obj;
    if(obj === null) return null;
    if(obj instanceof RegExp) return new RegExp(obj);
    if(obj instanceof Date) return new Date(obj)
    let newObj = new Object();
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key]);
        }
    }
    return newObj;
}

let obj2 = deepClone(obj);
obj2.c.x = 100;
console.log(obj === obj2);
console.log(obj);
```







    
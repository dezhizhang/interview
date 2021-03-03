<!--
 * @Author: your name
 * @Date: 2021-03-03 20:38:19
 * @LastEditTime: 2021-03-03 21:01:55
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


    
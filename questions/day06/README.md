<!--
 * @Author: your name
 * @Date: 2021-03-06 15:27:54
 * @LastEditTime: 2021-03-06 15:56:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day06/README.md
-->

### js中typeof 返回哪些数据类型
```
Object number function boolean undefined string 
```
### 检测数组的几种方式
```
Array.isArray()
toString.call()
arr instanceof Array
```
### applay和call的区别
```
let obj1 = {
    say:function() {
        console.log('hello')
    }
}

let obj2 = {
    lunch:function(name,age) {
        console.dir(this)
    }
}

obj2.lunch.call(obj1);
```


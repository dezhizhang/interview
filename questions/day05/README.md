<!--
 * @Author: your name
 * @Date: 2021-03-06 10:25:44
 * @LastEditTime: 2021-03-06 10:45:17
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



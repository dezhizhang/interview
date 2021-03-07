<!--
 * @Author: your name
 * @Date: 2021-03-07 00:25:56
 * @LastEditTime: 2021-03-07 23:26:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/typescript/README.md
-->
### 变量的交换
```
let num1 :number = 33
let num2 :number = 2
let temp :number = 0
temp = num1;
num1 = num2
num2 = temp;
```
### 静态类型
```
interface User {
    name:string,
    age:number,
}
const user:User = {
    name:"张三",
    age:22
}
```
### 对像类型
```
class Person{}
const p :Person = new Person();
console.log(p);
```


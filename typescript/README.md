<!--
 * @Author: your name
 * @Date: 2021-03-07 00:25:56
 * @LastEditTime: 2021-03-07 23:53:16
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
### 函数注解
```
 function getTotal(one:number,two:number) :number {
     return one + two;
 }

 let res = getTotal(1,2);
 console.log(res);
 ```
 ### 对像注解
 ```
interface Params {
    one:number;
    two:number;
}

function add({one,two}:Params):number {
    return one + two;
}

console.log(add({one:1,two:2}));
```
### 数组注解
```
const arr:string[] = ["1","2","4"];
console.log(arr);
const arr:any[] = ['red','yellow',1,2,'pink'];
console.log(arr);
const arr:(number | string) [] = [1,2,"string",2];
console.log(arr);

```


 


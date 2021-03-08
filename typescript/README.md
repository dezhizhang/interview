<!--
 * @Author: your name
 * @Date: 2021-03-07 00:25:56
 * @LastEditTime: 2021-03-08 23:26:33
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
### 类的重写
```
class Lady{
    content = "hello"
    sayHello() {
        return this.content;
    }
}
class Girl extends Lady {
    sayLove() {
        return super.sayHello() + 'world';
    }
}
let g = new Girl();
console.log(g.sayLove())
```
### get和set
```
 class Peron{
    private name:string = 'hello'
    get change(){
        return this.name
    } 
    set setChange(value) {
        this.name = value;
    }
    constructor() {

    }
 }

 let p = new Peron();
 p.setChange = '刘德华';
 let res = p.change;
 console.log(res);
 
 ```
 



 


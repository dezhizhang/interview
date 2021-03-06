<!--
 * @Author: your name
 * @Date: 2021-03-06 15:27:54
 * @LastEditTime: 2021-03-06 19:40:51
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
### 原型链继承
```
function Animal() {
    this.age = 20;
}

function Cat() {
    this.name = 'cat';
}

Cat.prototype = new Animal();

let c = new Cat();
console.log(c.age);

```
### 借用构鵠函数继承
```
function Animal() {
    this.age = 20;
}

function Cat() {
    Animal.call(this);
    this.name = 'cat';
}

let c = new Cat();
console.log(c.age);
```
### 工厂模式创建对像
```
function create(age,sex) {
    let obj = {}
    obj.age = age;
    obj.sex = sex;
    return obj;
}

let person1 = create('张三','女');
let person2 = create('张三','女');
```
### 寄生模式
```
function Japanese(name,language) {
    this.name = name;
    this.language = language;
    this.say = function() {
        console.log(this.name + '正在说'+this.language);
    } 
}

function createChinese(name,language) {
    let obj = {}
    Japanese.call(obj,name,language);
    return obj
}
let c = createChinese('张三','茵语');
c.say();

```
### 闭包函数
```
let lis = document.querySelectorAll('li');
    for(let i=0;i < lis.length;i++) {
        lis[i].onclick= (function(index) {
            return function() {
                console.log(index);
            }
    })(i)
}
```
### 数组去重
```
let arr = [1,3,1,5,2,3,7];
let ary = [];
for(let i=0;i < arr.length;i++) {
    let item = arr[i];
    let newArr = arr.slice(i+1);
    if(!newArr.includes(item)) {
        ary.push(item)
    }
}
```
### 检测数组的方法
```
Object.prototype.toString.call(arr) === '[object Array]'
```
### 数组的移位
```
let arr = [3,6,2,4,1,5];
for(let i=arr.length - 1;i >= 0;i--) {
    arr.push(...arr.splice(i,1))
}
```
###数组移位 
```
let arr = [3,6,2,4,1,5];
for(let i=arr.length - 1;i >=0;i--) {
    newArr.push(arr[i]);
}

```
### 函数执行机制
```
for(let i=1;i<=3;i++) {
    setTimeout((() => {
        return () => {
            console.log(i);
        }
    })(i),0)
}
```
### 计算符号
```
let a = 10;
let b = 20;
let c = 30;
++a;
a++;
e = ++a +(++b)+(c++) + a++;
```
77
### 数组计算
```
let k = 0;
for(let i=0,j =0; i < 10,j < 6;i++,j++) {
  
    k = i + j
}

10
```















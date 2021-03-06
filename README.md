<!--
 * @Author: your name
 * @Date: 2021-03-06 15:27:54
 * @LastEditTime: 2021-03-06 23:33:56
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
### 数组返回值
```
let arr = new Array(1,3,5);
arr[4] = 'z';
let arr2 = arr.reverse();
let arr3 = arr.concat(arr2);
console.log(arr3.toString());
index.html:22 z,,5,3,1,z,,5,3,1
```
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
### 对像转数组方法2
```
let obj = {
    1:222,
    2:123,
    5:888,
}

let arr = new Array(12).fill(null).map((item,index) => obj[index+1] || null);

console.log(arr)
```
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
### 找到字符串中出现次数最多的
```
let str = "abcdaba";
let json = {};
for(let i=0;i < str.length;i++) {
    if(json[str[i]]) {
        json[str[i]] = json[str[i]]+1
    }else {
        json[str[i]] = 1
    }
}

let maxKey = 0;
let max = '';
for(let key in json) {
    if(json[key] > maxKey) {
        maxKey = json[key]
        max = key;
    }
}

```
### 字符串反转
```
let str = "12345678";
let newStr = '';
for(let i=str.length - 1;i >=0;i--) {
    newStr+= `${str[i]}`
}
```
### 字符串反转1
```
let str = "12345678";
let newstr = str.split('').reverse().join('');
```
### 对像地址的引用
```
 function changeObjectProperty(o) {
     o.siteUrl = 'http://www.csser.com/';
     o = new Object();
     o.siteUrl = 'http://www.popcg.com';
 }

 let csser = new Object();
 changeObjectProperty(csser);
 console.log(csser.siteUrl);
 ```
 ### 对像的原型链的问题
 ```
  function foo() {
     foo.a = function() {
         console.log('1');
     }
     this.a = function() {
        console.log('2');
     }
     a = function() {
         console.log('3');
     }
     var a = function() {
         console.log('4')
     }
 }

 foo.prototype.a = function() {
     console.log('5');
 }
 
 foo.a = function() {
     console.log('6')
 }

 foo.a() // 1
 let obj = new foo();
 obj.a() //2
 foo.a() //1
 
 ```
 ### 隐式转换
 ```
 let foo = "11" + 2 - "1";
 console.log(foo);
 console.log(typeof foo);
 111
 ```
 
 
 


















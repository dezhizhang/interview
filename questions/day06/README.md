<!--
 * @Author: your name
 * @Date: 2021-03-06 15:27:54
 * @LastEditTime: 2021-03-06 17:03:40
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








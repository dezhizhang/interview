<!--
 * @Author: your name
 * @Date: 2021-03-11 07:17:24
 * @LastEditTime: 2021-03-12 08:29:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/Highfrequency/README.md
-->
### typeof类型判断
##### typeof对于原始类型来说除了null都或以显示正确的类型
```
typeof 1 'number'
typeof '1' 'string'
typeof undefined 'undefined'
typeof true 'boolean'
typeof Symbol() 'symbol'
```
##### typeof 对于对象来说，除了函数都会显示object，所以说typeof并不能准确判断变量到底是什么类型
```
typeof [] 'object'
typeof object 'object'
typeof console.log 'function'
```
#### 如果我们想判断一个对像的正确类型，这里可以考虚使用instanceof 因为内部机制是通过原型链来判断的
```
const Person = function() {}
const p1 = new Person()
p1 instalceof Person //true
```
### 类型转换
### 首先我们要知道，在 JS 中类型转换只有三种情况，分别是：
##### 转换为布尔值
##### 转换为数字
##### 转换为字符串

### This
### == 和 === 有什么区别
##### 对于 == 来说，如果对比双方的类型不一样的话，就会进行类型转换
#### 假如我们需要对比x和y是否相同，就会进行如下判断流程

### 6深浅拷贝
#### 浅拷贝
##### 首先可以通过Object.assign来解决这个问题，很多人认为这个函数是用来深拷贝的， 
##### 其实并不是,Object.assign只会拷贝所有的属性值到新的对像中，如果


### 组合继承
```
 //组合继承
 function Parent(value) {
     this.val = value;
 }

Parent.prototype.getValue = function() {
    console.log(this.val);
}

function Child(value) {
    Parent.call(this,value);
    // console.log
}

Child.prototype = new Parent();
```
### 寄生组合继承
```
function Parent(value) {
     this.val = value;
 }

 Parent.prototype.getValue = function() {
     console.log(this.val);
 }

 function Child(value) {
     Parent.call(this,value);
 }

 Child.prototype = Object.create(Parent.prototype,{
    constructor:{
        value:Child,
        enumerable: false,
        writable: true,
        configurable: true
    }
 })

 const child = new Child(1);
 child.getValue();
 console.log(child instanceof Parent);
 ```
 ### Class 继承
 ```
  class Parent{
     constructor(value) {
         this.value = value;
     }
     getValue() {
         console.log(this.value);
     }
 }

 class Child extends Parent{
     constructor(value) {
         super(value);
         this.val = value;
     }
 }

 let child = new Child(1);
 child.getValue();
 console.log(child instanceof Parent);
 ```
 ### 模块化
 ```
1,解决命名冲突
2,提供复用性
3,提高代码可维护性


1,立即执行函数
2,AMD 和 CMD
3,CommonJS
4,ES Module
```
###  实现一个简洁版的promise
```
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function MyPromise(fn) {
    const that = this;
    this.state = PENDING
    this.value = null;

    this.resolvedCallbacks = [];
    this.rejectedCallbacks = [];

    function resolve(value) {
        if(that.state === PENDING) {
            this.state = RESOLVED;
            this.value = value;
            this.rejectedCallbacks.map(cb => cb(that.value))
        }
    }

    function reject(value) {
        if(that.state === PENDING) {
            that.state = REJECTED;
            that.value = value;
            that.rejectedCallbacks.map(cb => cb(that.value))
        }
    }

    try{
        fn(resolve,reject)
    } catch(e) {
        reject(e)
    }
}


MyPromise.prototype.then = function(onResolved,onRejected) {
    const that = this;
    onRejected = typeof onResolved === 'function' ? onResolved: v => v;
    onResolved = typeof onRejected === 'function' ? onRejected: e => {
         throw e
    };

    if(this.state === PENDING) {
        that.resolvedCallbacks.push(onResolved)
        that.resolvedCallbacks.push(onRejected)
    }
    if(this.state === RESOLVED) {
        onResolved(that.value);
    }
    if(this.state === REJECTED) {
        onRejected(that.value)
    }
}
```
### applay的实现
```
 Function.prototype.myApplay = function(context) {
     if(typeof this!== 'function') {
         throw new TypeError('Error');
     }
     context = context || window;
     context.fn = this;
     let results
     if(arguments[1]) {
         results = context.fn(...arguments[1]);
     } else {
         results = context.fm();
     }
     delete context.fn;
     return results
 }
 ```
 ### new的实现
 ```
function create() {
    let obj = {}
    let Con = [].shift.call(arguments)
    obj.__proto__ = Con.prototype;
    let result = Con.applay(obj,arguments);
    return result instanceof Object ? result:obj;
}
```
### 生命周期
#### 初如化状态
```
1,getInitialState: 获取每个实例的初始化状态
2,componentWillMount: 组件即将被装载，渲染到页面上 
3,render:组件在这里生成虚拟的DOM节点
4,componentDidMount 组件真正装载之后
```
#### 运行中的状态
```
1,componentWillReceiveProps:组件将要接收到属性的时候调用
2,shouldComponentUpdate:组件接收到新属性或者新状态的时候
3,componentWillUpdate:组件即将更新不能修改属性和状态
4,render:组件重新描绘
5,componentDidUpdate：组件已经更新
```
### 销毁阶段
```
1,componentWillUnmount:组件即将销毁
```





 




 
 



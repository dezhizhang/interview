<!--
 * @Author: your name
 * @Date: 2021-03-03 23:34:02
 * @LastEditTime: 2021-03-05 22:18:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day04/README.md
-->
### 数组去重方法一
```
 let arr = [12,23,12,15,25,23,25,14,16];
 let arr1 = Array.from(new Set(arr));
 console.log(arr1);
 
 ```
 ### 箭头函数与普通函数的区别
 ```
 1,剪头函数语法比普通函数更加简洁
 2,箭头函数没有自己的this,它里面的this继承所处上下文this(使用call和applay无法改变this)
 3,箭头函数中没有arguments(类数组),只能基于..arg获取传递的参数集合(数组)
 4,箭头函数不能被new执行(因为前头函数没有prototype)
 ```
 ### 字符串替换
 ```
let str = "dezhiZhang哈哈哈 HAHA";
str = str.replace(/[a-zA-Z]/g,item => {
    return item.charCodeAt() >=65 && item.charCodeAt() <=90 ? item.toLowerCase():item.toUpperCase();
});
console.log("str",str);
```
### 重写indexOf
```
String.prototype.myIndexOf = function(T) {
    let reg = new RegExp(T);
    let res = reg.exec(this);
    return res === null ? -1:res.index;
}

let s = "zhangdezhi";
let index = s.myIndexOf("de");
console.log(index);
```
###  数组扁平化
```
let newArr = arr.toString().split(',').map(item => Number(item));
console.log(newArr);


arr = [...new Set(arr.flat(Infinity))].sort((a,b) => a - b)
```
### 娄组扁平化2
```
let arr = [[1,2,2],[3,4,5,5],[6,7,8,9,[11,12,[14]]],10];
let newArr = [];

function flat(arr) {
    if(arr&&arr.length <=0) return
    let length = arr.length;
    for(let i=0;i < length;i++) {
        if(!Array.isArray(arr[i])) {
            newArr.push(arr[i]);
        }else {
            flat(arr[i])
        }  
    }
}

flat(arr);
```
### 两个数的交集
```
 let nums1 = [1,2,2,1];
 let nums2 = [2,2];

 let arr = [];
 for(let i=0;i < nums1.length;i++) {
    if(nums2.indexOf(nums1[i]) !=-1) {
        arr.push(nums1[i]);
    }
}

console.log(arr);
```
### 数组的旋转
```
Array.prototype.rotate = function(n) {
    for(let i=0;i < n;i++) {
        this.unshift(this.pop());
    }
}
 
arr.rotate(3);
```






 
 
 
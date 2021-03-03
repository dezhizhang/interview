<!--
 * @Author: your name
 * @Date: 2021-03-03 23:05:50
 * @LastEditTime: 2021-03-03 23:07:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day02/README.md
-->
### call 和applay
```
function fn() {
    console.log(arguments);
}

let obj = {};
fn.call(obj,10,20,30);
fn.apply(obj,[30,40,50]);
```

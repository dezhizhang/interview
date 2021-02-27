/*
 * @Author: your name
 * @Date: 2021-02-27 14:58:17
 * @LastEditTime: 2021-02-27 15:08:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/link/index.js
 */


 let a = {value:"a"}
 let b = {value:"b"}
 let c = {value:"c"}
 let d = {value:"d"}


 a.next = b;
 b.next = c;
 c.next = d;
 
//遍历链表
let p = a;
while(p) {
    console.log(p.value);
    p = p.next;
}

//插入元素
let e = {value:"e"}
c.next = e;
e.next = d;


console.log(a);

//删除
c.next = d;


 
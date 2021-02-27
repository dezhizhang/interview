/*
 * @Author: your name
 * @Date: 2021-02-27 17:27:43
 * @LastEditTime: 2021-02-27 17:30:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/link/index7.js
 */

 const json = {
     a:{b:{c:1}},
     d:{e:2}
 }

 let path = ["a","b","c"];
 
 let p = json;
 path.forEach(item => {
    p = p[item]
});

console.log(p);




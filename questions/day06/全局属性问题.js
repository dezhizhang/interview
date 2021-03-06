/*
 * @Author: your name
 * @Date: 2021-03-06 22:05:39
 * @LastEditTime: 2021-03-06 22:08:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day06/全局属性问题.js
 */


 global.color = 'red';
 let o = {color:'blue'}
 function sayColor() {
     console.log(this.color);
 }

 sayColor()
 sayColor.call(global)
 sayColor.call(global);
 sayColor.call(o);
 
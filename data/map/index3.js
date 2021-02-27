/*
 * @Author: your name
 * @Date: 2021-02-27 20:00:15
 * @LastEditTime: 2021-02-27 20:18:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/map/index3.js
 */

 let isValid = function(s) {
     let length = s.length;
     if(length % 2 !==0) return;
     const stack = [];
     const map = new Map();
     map.set("(",")");
     map.set("{","}");
     map.set("[","]");

     for(let i=0;i < length;i++) {
         let c = s[i];
         if(map.has(c)) {
             stack.push(c);
         } else {
             let sLength = stack.length;
             let top = stack[sLength - 1];
             if(map.get(top) ===c) {
                 stack.pop();
             }else {
                 return false;
             }
         }
     }
     return stack.length === 0;
 }



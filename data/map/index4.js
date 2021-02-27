/*
 * @Author: your name
 * @Date: 2021-02-27 20:21:32
 * @LastEditTime: 2021-02-27 20:48:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/map/index4.js
 */


 let maxLength = function(s) {
   
     let l = 0;
     let res = 0;
     const map = new Map();
     const length = s.length;

     for(let r =0;r < length;r += 1) {
        if(map.has(s[r]) && map.get(s[r]) >=1) {
            l = map.get(s[r]) + 1;
        }
        res = Math.max(res, r - l + 1);
        map.set(s[r],r);
     }
    return res
 }




/*
 * @Author: your name
 * @Date: 2021-02-27 19:48:18
 * @LastEditTime: 2021-02-27 19:58:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/map/index2.js
 */

 let intersetion = function(nums1,nums2) {
     const map = new Map();
     nums1.forEach(n=> map.set(n,true));

     let res = [];
     nums2.forEach(n => {
        if(map.get(n)) {
            res.push(n);
            map.delete(n);
        }
     });
     return res;
 }

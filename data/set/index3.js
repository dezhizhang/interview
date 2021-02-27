/*
 * @Author: your name
 * @Date: 2021-02-27 19:05:23
 * @LastEditTime: 2021-02-27 19:20:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/set/index3.js
 */

 let intersetion = function(nums1,nums2) {
    return [...new Set(nums1)].filter(item => nums2.incluses(item));
 }

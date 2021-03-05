/*
 * @Author: your name
 * @Date: 2021-03-05 21:29:31
 * @LastEditTime: 2021-03-05 21:36:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day04/求两数组交集.js
 */

 let nums1 = [1,2,2,1];
 let nums2 = [2,2];

 let arr = [];
 for(let i=0;i < nums1.length;i++) {
    if(nums2.indexOf(nums1[i]) !=-1) {
        arr.push(nums1[i]);
    }
}

console.log(arr);

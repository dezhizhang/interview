/*
 * @Author: your name
 * @Date: 2021-02-27 17:31:34
 * @LastEditTime: 2021-02-27 17:42:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/set/index.js
 */

//数组去重
 const arr = [1,1,2,2];
 const arr2 = [...new Set(arr)];

 //判断元素是否在集合中
 const set = new Set(arr);
 const has = set.has(2);

 //示交集

 const set2 = new Set([2,3]);
 const set3 = [...new Set([...set].filter(item => set2.has(item)))];

 console.log(set3);

//  console.log(has);
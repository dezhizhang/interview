/*
 * @Author: your name
 * @Date: 2021-02-27 14:30:35
 * @LastEditTime: 2021-02-27 14:31:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/queue/index.js
 */


 const queue = [];
 queue.push(1);
 queue.push(2);

 const item1 = queue.shift();
 const item2 = queue.shift();

 console.log(item1);
 console.log(item2);
 
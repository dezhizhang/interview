/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-04-24 22:42:30
 */

import $ from 'jQuery';


console.log('start');

$.get('https://cnodejs.org/api/v1/topics',function(data) {
  console.log('data',data);
});

console.log('end');


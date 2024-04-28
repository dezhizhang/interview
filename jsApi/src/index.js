/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-04-28 20:15:50
 */


const arr = [10,20,30,40,50];

const sum = arr.reduce((sum,curVal,index,arr) => {
  console.log({sum,curVal,index,arr})
  return sum + curVal;
},0);

console.log('sun',sum);




/*
 * @Author: your name
 * @Date: 2021-03-07 16:20:54
 * @LastEditTime: 2021-03-07 16:59:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/promise/12promise几个关健问题.js
 */

// const p = new Promise((resolve,reject) => {
//     resolve(1);
// })

// p.then(value => {
//     console.log("value",value);
// },
// reson => {
//     console.log('reson',reson);
// });

// console.log('------')

const p = new Promise((resolve,reject) => {
    resolve(1);
});
p.then(value => {
    console.log('value',value);
    return 4
},
reason => {
    console.log('value',value);
}).then(value => {
    console.log('value',value);
},
reson => {
  console.log('reson',reson);
})

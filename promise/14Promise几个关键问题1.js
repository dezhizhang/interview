/*
 * @Author: your name
 * @Date: 2021-03-07 17:06:12
 * @LastEditTime: 2021-03-07 20:22:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/promise/14Promise几个关键问题1.js
 */


// new Promise((resolve,reject) => {
//     reject(1)
// }).then(value => {
//     console.log('onResolved1',value);
//     return 2
// }).then(value => {
//     console.log('onResolved2',value);
//     return 3
// }).catch(reason => {
//     console.log('reject',reason);
// })


// new Promise((resolve,reject) => {
//     reject(1)
// }).then(value => {
//     console.log('onResolved1',value);
//     return 2
// }).then(value => {
//     console.log('onResolved2',value);
//     return 2
// }).catch(reason => {
//     console.log('reason',reason);
//     return new Promise((resolve,reject) => {})
// }).then(resolve => {
//     console.log('resolve',resolve);
// })

new Promise((resolve,reject) => {
    reject(1);
}).then(value => {
    console.log('onResolved1',value);
    return 2
}).then(value => {
    console.log('onResolved2',value);
    return 3
}).catch(reason => {
    console.log('reason',reason);
    return new Promise((resolve,reject) => {});
}).then(value => {
    console.log('vaonResolved3',value);
},reason => {
    console.log('reason1',reason)
})
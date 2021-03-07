/*
 * @Author: your name
 * @Date: 2021-03-07 15:41:25
 * @LastEditTime: 2021-03-07 16:20:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/promise/11Promise的api.js
 */


const p1 = new Promise((resolve,reject) => {
    resolve(1);
});

const p2 = Promise.resolve(2);
const p3 = Promise.reject(3);

// const pAll = Promise.all([p1,p2]);
// pAll.then(value => {
//     console.log('value',value);
// },reason => {
//     console.log('reason',reason);
// });

// const pRace = Promise.race([p1,p2,p3]);
// pRace.then(value => {
//     console.log('value',value);
// },reason => {
//     console.log('reaseon',reason);
// })

// const pRace = Promise.race([p1,p2,p3]);
// pRace.then(value =>{
//     console.log('value',value);
// },
// reason => {
//     console.log('reason',reason);
// });

const pRace = Promise.race([p1,p2,p3]);
pRace.then(value => {
    console.log('value',value);
},
reason => {
    console.log("reason",reason);
})

/*
 * @Author: your name
 * @Date: 2021-03-07 15:15:02
 * @LastEditTime: 2021-03-07 15:20:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/promise/9Promise的基本使用.js
 */


const p = new Promise((resolve,reject) => {
    setTimeout(() => {
        const time = Date.now()
        if(time % 2 == 0) {
            resolve('success');
        } else {
            reject('error')
        }
    },1000)
});    

p.then(res => {
    console.log(res);
},rej => {
    console.log(rej)
})

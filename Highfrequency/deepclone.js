/*
 * @Author: your name
 * @Date: 2021-03-12 07:19:45
 * @LastEditTime: 2021-03-12 16:35:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/Highfrequency/deepclone.js
 */
// function deepClone(obj) {
//     if(typeof obj!=='object') return obj;
//     if(obj === null) return null;
//     if(obj instanceof RegExp) return new RegExp(obj);
//     if(obj instanceof Date) return new Date(obj)
//     let newObj = new Object();
//     for(let key in obj) {
//         if(obj.hasOwnProperty(key)) {
//             newObj[key] = deepClone(obj[key]);
//         }
//     }
//     return newObj;
// }

// let obj2 = deepClone(obj);
// obj2.c.x = 100;
// console.log(obj === obj2);
// console.log(obj);


// function deepClone(obj) {
//     if(typeof obj !== 'object') return obj;
//     if(obj === null) return null;
//     if(obj instanceof RegExp) return new RegExp(obj);
//     if(obj instanceof Date) return new Date(obj);
//     let newObj = new Object(obj);
//     for(let key in obj) {
//         if(obj.hasOwnProperty(key)) {
//             newObj[key] = deepClone(obj[key]);
//         }
//     }
//     return newObj;
// }

function deepClone(obj) {
    if(typeof obj !== 'object') return obj;
    if(obj === null) return null;
    if(obj instanceof RegExp) return new RegExp(obj);
    if(obj instanceof Date) return new Date(obj);
    let newObj = new Object(obj);
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key]);
        }
    }
    return newObj;
}
/*
 * @Author: your name
 * @Date: 2021-03-03 21:46:41
 * @LastEditTime: 2021-03-03 22:23:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day01/index4.js
 */



let obj = {
    a:100,
    b:[10,20,30],
    c:{
        x:10,
    },
    d:/^\d+$/
}

// let obj2 = {}
// for(let key in obj) {
//     if(!obj.hasOwnProperty(key)) break;
//     obj2[key] = obj[key];
// }

// obj2.c.x = 100;
// console.dir(obj);

// let obj2 = {};
// for(let key in obj) {
//     if(!obj.hasOwnProperty(key)) break;
//     obj2[key] = obj[key];
// }

// obj2.c.x = 1000;
// console.dir(obj);

// let obj2 = JSON.parse(JSON.stringify(obj));
// console.log(obj2);

// let obj2 = JSON.parse(JSON.stringify(obj));
// console.log(obj2);


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
//     if(typeof obj!=="object") return obj;
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
// console.log(obj);

function deepClone(obj) {
    if( typeof obj!== 'object') return obj;
    if(obj === null) return obj;
    if(obj instanceof Date) return new Date(obj);
    if(obj instanceof RegExp) return new RegExp(obj);
    let newObj = new Object();
    
    for(let key in obj) {
        newObj[key] = deepClone(obj[key]);
    }
    return newObj;
}

let obj2 = deepClone(obj);
obj2.c.x = 100;
console.log(obj);











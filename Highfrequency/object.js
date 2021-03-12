/*
 * @Author: your name
 * @Date: 2021-03-12 17:49:21
 * @LastEditTime: 2021-03-12 17:56:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/Highfrequency/object.js
 */


//  const obj1 = {x:100,y:200}
//  const obj2 = obj1;
//  let x1 = obj1.x;
//  obj2.x = 101;
//  x1 = 102;

//  console.log(obj2);

function deepClone(obj) {
    if(typeof obj == 'object') return;
    if(obj === null) return;
    if(obj instanceof RegExp) return new RegExp(obj);
    if(obj instanceof Date) return new Date(obj);
    let newObj = new Object();
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            obj[key] = deepClone(obj[key]);
        }
    }
    return newObj;
}
 
 
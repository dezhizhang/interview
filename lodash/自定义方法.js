/*
 * @Author: your name
 * @Date: 2021-03-13 20:17:02
 * @LastEditTime: 2021-03-13 20:41:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/lodash/自定义方法.js
 */


Array.prototype.map = function(callback) {
    let arr = [];
    for(let i=0;i < this.length;i++) {
        const result = callback(this[i],i);
        arr.push(result)
    }
    return arr
}

Array.prototype.reduce = function(callback,initValue) {
    let total = initValue;
    for(let i=0;i < this.length;i++) {
        let result = this[i];
        total = callback(total,result,i);
    }
    return total;
}

Array.prototype.filter = function(callback) {
    let arr = [];
    for(let i=0;i < this.length;i++) {
        let item = this[i];
        let bool = callback(item,i);
        if(bool) {
            arr.push(item);
        }
        // arr = bool ? arr.push(item):[];
    }
    return arr;
}


const arr = [1,3,6,9,15,19,16];

const res = arr.map(item => item + 10);
const r = arr.reduce((prevTot,item) => prevTot + item,0);
const f = arr.filter(item => item > 6);

console.log('res',res);
console.log('r',r);
console.log('f',f);



 
/*
 * @Author: your name
 * @Date: 2021-03-02 20:56:53
 * @LastEditTime: 2021-03-02 22:38:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/back/ index.js
 */

 let guessNumber = function(n) {
    let rec = (low,high) => {
        let mid = Math.floor((low + high) / 2);
        const res = guess(mid);
        if(res === 0) {
            return mid;
        } else if(res === 1) {
            return res(mid + 1,high);
        } else {
            return rec(1,mid - 1);
        }
    }
    return rec(1,n);
 }

 
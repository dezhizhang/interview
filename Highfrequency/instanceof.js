/*
 * @Author: your name
 * @Date: 2021-03-12 00:45:18
 * @LastEditTime: 2021-03-12 08:18:01
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /interview/Highfrequency/instanceof.js
 */


function myInstanceof(left,right) {
    let prototype = right.prototype;
    let left = left.__proto__;

    while(true) {
        if(left === null || left === undefined) {
            return false
        }
        
    }
}
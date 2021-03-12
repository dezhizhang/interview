/*
 * @Author: your name
 * @Date: 2021-03-12 18:35:12
 * @LastEditTime: 2021-03-12 18:39:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/Highfrequency/bind.js
 */


Function.prototype.myBind = function() {
    const args = Array.prototype.slice.call(arguments);
    //获取this
    const t = args.shift();
    const that = this;
    return function() {
        return that.apply(t,args);
    }
}
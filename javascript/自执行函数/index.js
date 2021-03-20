/*
 * @Author: your name
 * @Date: 2021-03-12 23:34:03
 * @LastEditTime: 2021-03-13 19:36:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/javascript/iife/index.js
 */


(function() {
    var a = 1;
    function test() {
        console.log(++a);
    }
    window.$ = function() {
        return {
            test:test
        }
    }
})();

$().test();

/*
 * @Author: your name
 * @Date: 2021-03-07 18:46:04
 * @LastEditTime: 2021-03-07 18:48:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/typescript/21变量的练习.ts
 */


let num1 :number = 33
let num2 :number = 2
let temp :number = 0
temp = num1;
num1 = num2
num2 = temp;

console.log('num1',num1);
console.log('num2',num2);

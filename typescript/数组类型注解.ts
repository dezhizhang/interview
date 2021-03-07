/*
 * @Author: your name
 * @Date: 2021-03-07 23:38:07
 * @LastEditTime: 2021-03-07 23:53:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/typescript/数组类型注解.ts
 */


// interface Params {
//     one:number;
//     two:number;
// }

// function add({one,two}:Params):number {
//     return one + two;
// }

// console.log(add({one:1,two:2}));



// const arr:string[] = ["1","2","4"];
// console.log(arr);

// const arr:number[] = [1,2,3,4];
// console.log(arr);

// const arr:any[] = ['red','yellow',1,2,'pink'];
// console.log(arr);

const arr:(number | string) [] = [1,2,"string",2];
console.log(arr);




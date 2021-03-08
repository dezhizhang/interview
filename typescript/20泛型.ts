/*
 * @Author: your name
 * @Date: 2021-03-08 23:55:08
 * @LastEditTime: 2021-03-09 00:07:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/typescript/20泛型.ts
 */


//  function join<T>(first:T,second:T) {
//      return `${first} ${second}`;
//  }

//  const res = join<String>("hello","world");
//  console.log(res);

// function join<T>(first:T,second:T) {
//     return `${first}  ${second}`;
// }

// const res = join<String>('hello','world');
// console.log('res',res);

function join<T>(first:T,second:T) {
    return `${first} / ${second}`;
}

const res = join<String>("hello","world");
console.log('res',res);


 
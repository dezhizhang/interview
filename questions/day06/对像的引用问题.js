/*
 * @Author: your name
 * @Date: 2021-03-06 21:40:51
 * @LastEditTime: 2021-03-06 21:57:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day06/对像的引用问题.js
 */


//  function changeObjectProperty(o) {
//      o.siteUrl = 'http://www.csser.com/';
//      o = new Object();
//      o.siteUrl = 'http://www.popcg.com';
//  }

//  let csser = new Object();
//  changeObjectProperty(csser);
//  console.log(csser.siteUrl);

// function changeObjectProperty(o) {
//     o.siteUrl = 'http://www.csser.com/';
//     o = new Object();
//     o.siteUrl = 'http://www.popcg.com'
// }

// let csser = new Object();
// changeObjectProperty(csser);
// console.log(csser.siteUrl);

function changeObjectProperty(o) {
    o.siteUrl = 'http://www.csser.com/';
    o = new Object();
    o.siteUrl = 'http://www.popcg.com';
}

let csser = new Object();
changeObjectProperty(csser);
console.log(csser.siteUrl);


 
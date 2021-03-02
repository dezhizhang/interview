/*
 * @Author: your name
 * @Date: 2021-03-02 19:56:56
 * @LastEditTime: 2021-03-02 20:09:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/greedy/index.js
 */


//  let findContentChildren = function(g,s) {
//      let sourtFunc = function(a,b) {
//          return a - b;
//      }
//      g.sort(sourtFunc);
//      s.sort(sourtFunc);
//      let i=0;
//      s.forEach(n => {
//         if(n >=g[i]) {
//             i+= 1
//         }
//      });
//      return i
//  }

// let findContentChildren = function(g,s) {
//     let sourtFunc = function(a,b) {
//         return a - b;
//     }
//     g.sort(sourtFunc);
//     g.sort(sourtFunc);

//     let i=0;
//     s.forEach(n => {
//         if(n > g[i]) {
//             i++
//         }
//     });
//     return i;
// }

//  let res = findContentChildren([1,2],[1,2,3]);
//  console.log("res",res);


let findContentChildren = function(g,s) {
    let sourtFunc = function(a,b) {
        return a - b;
    }
    g.sort(sourtFunc);
    g.sort(sourtFunc);
    let i=0;
    s.forEach(n => {
        if(n >= g[i]) {
            i++;
        }
    });
    return i;
}

 let res = findContentChildren([1,2],[1,2,3]);
 console.log("res",res);

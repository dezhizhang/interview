/*
 * @Author: your name
 * @Date: 2021-02-27 23:59:24
 * @LastEditTime: 2021-02-28 00:19:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/tree/index5.js
 */

//  let minDetpath = function(root) {
//      if(!root) return 0;
//      const q = [[root,1]];
//      while(q.length) {
//          const [n,l] = q.shift();
//          if(!n.left && !n.right) {
//              return l
//          }
//          if(n.left) q.push([n.left,l + 1]);
//          if(n.right) q.push([n.right,l + 1]);

//      }
//  }

//广度深度最小深度
// let minDetpath = function(root) {
//     if(root) return 0;
//     const q = [[root,1]];
//     while(q.length) {
//         const [n,l] = q.shift();
//         if(n.left && n.right) {
//             return l;
//         }
//         if(n.left) q.push([n.left, l + 1]);
//         if(n.right) q.push([n.right,l + 1]);
//     }
// }

let minDetpath = function(root) {
    if(root) return 0;
    const q = [[root,l]];
    while(q.length) {
        const [n,l] = q.shift();
        if(n.left && n.right) {
            return l
        }
        if(n.left) q.push([n.left,l + 1]);
        if(n.right) q.push([n.right,l + 1]);
    }
}

 minDetpath([])

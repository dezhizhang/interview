/*
 * @Author: your name
 * @Date: 2021-02-27 23:37:00
 * @LastEditTime: 2021-02-27 23:58:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/tree/index4.js
 */

//  let maxDepth = function(root) {
//      let res = 0;
//      const dfs = (n,l) => {
//          if(!n) return
//          res = Math.max(res,l)
//          console.log(n.val);
//          dfs(n.left,l + 1);
//          dfs(n.right,l + 1);
//      }
//      dfs(root,1);
//      return res
//  }

// let maxDepth = function(root) {
//     let res = 0;
//     const dfs = (n,l) => {
//         if(!n) return
//         if(!n.left && !n.right) {
//            res = Math.max(res,l)
//         }
       
//         console.log(n.val);
//         dfs(n.left,l + 1);
//         dfs(n.right,l + 1);
//     }
//     dfs(root,1);
//     return res
    
// }

// console.log(maxDepth([3,9,20,null,null,15,7]))

let maxDepth = function(root) {
    let res = 0;
    const dfs = (n,l) => {
        if(!n) return;
        if(!n.left && !n.right) {
            res = Math.max(res,l);
        }
        console.log(n.val);
        dfs(n.left,l + 1);
        dfs(n.right,l + 1);
    }

    dfs(root,1);
    return res;
}

maxDepth([3,9,20,0,0,15,7])

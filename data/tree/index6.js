/*
 * @Author: your name
 * @Date: 2021-02-28 10:43:59
 * @LastEditTime: 2021-02-28 11:08:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/tree/index6.js
 */


 let levelOrder = function(root) {
    // if(!root) return [];
    // const q = [[root,0]];
    // const res = [];
    // while(q.length) {
    //     const [n,level] = q.shift();
        
    //     if(!res[level]) {
    //         res.push([n.val]);
    //     } else {
    //         res[level].push(n.val);
    //     }
    //     console.log(n.val,level);

    //     if(n.left) q.push([n.left,level + 1]);
    //     if(n.right) q.push([n.right,level + 1]);
        
    // }
    // return res;

    // if(!root) return [];
    // const q = [[root,0]];

    // const res = [];
    // while(q.length) {
    //     const [n,level] = q.shift();
        
    //     if(!res[level]) {
    //         res.push([n.val]);
    //     }else {
    //         res[level].push(n.val);
    //     }
    //     if(n.left) q.push([n.left,level + 1]);
    //     if(n.right) q.push([n.right,level + 1]);
    // }

    // return res;

    if(!root) return [];
    const q = [[root,0]];

    const res = [];
    while(q.length) {
        const [n,level] = q.shift();
        if(!res[level]) {
            res.push([n.val]);
        } else {
            res[level].push(n.val);
        }
        if(n.left) q.push([n.left,level + 1]);
        if(n.right) q.push([n.right,level + 1]);
    }
    return res;

 }

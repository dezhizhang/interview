/*
 * @Author: your name
 * @Date: 2021-02-28 11:12:21
 * @LastEditTime: 2021-02-28 11:21:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/tree/index8.js
 */

 let inorderTraversal = function(root) {
    //  const res = [];
    //  const rec = (n) => {
    //     if(!n) return;
    //     rec(n.left);
    //     rec.push(n.val);
    //     rec(n.right);
    //  }
    //  rec(root);
    //  return res

    const res = [];
    const rec = (n) => {
        if(!n) return;
        rec(n.left);
        res.push(n.val);
        rec(n.right);
    }
    rec(root);
    return res;
    
 }

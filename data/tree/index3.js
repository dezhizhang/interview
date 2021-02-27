/*
 * @Author: your name
 * @Date: 2021-02-27 22:30:09
 * @LastEditTime: 2021-02-27 23:35:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/tree/index3.js
 */

 const bt = {
     val:1,
     left:{
         val:2,
         left:{
             val:4,
             left:null,
             right:null
         },
         right:{
             val:5,
             left:null,
             right:null
         }
     },
     right:{
         val:3,
         left:{
             val:6,
             left:null,
             right:null
         },
         right:{
             val:7,
             left:null,
             right:null
         }
     }
 }
//先序遍历
// const preorder = (root) => {
//     if(!root) return;
//     preorder(root.left);
//     preorder(root.right);
// }

// preorder(bt);

//中序遍历
//对根节点的左子树进行中序遍历
//访问根节点
//对根节点的右子树进行中序遍历
// const inorder = (root) => {
//     if(!root) return;
//     inorder(root.left);
//     console.log(root.val);
//     inorder(root.right);

// }

// inorder(bt);

// const inorder = (root) => {
//     if(!root) return;
//     inorder(root.left);
//     console.log(root.val);
//     inorder(root.right);
    
// }

// inorder(bt);

// const inorder = (root) => {
//     if(!root) return;
//     inorder(root.left);
//     console.log(root.val);
//     inorder(root.right);
// }

// inorder(bt);

//后序遍历
//1对根节点的左子树进行后序遍历
//2对根节点的右子树进行后序遍历
//访问根节点

// const postOrder = (root) => {
//     if(!root) return
//     postOrder(root.left);
//     postOrder(root.right);
//     console.log(root.val);
// }

// postOrder(bt);

// const postOrder = (root) => {
//     if(!root) return;
//     postOrder(root.left);
//     postOrder(root.right);
//     console.log(root.val);
// }

// postOrder(bt);


const postOrder = (root) => {
    if(!root) return;
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.val);
}

postOrder(bt);











 

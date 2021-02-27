/*
 * @Author: your name
 * @Date: 2021-02-27 13:21:44
 * @LastEditTime: 2021-02-27 13:59:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/data/stack/index2.js
 */

 let isValid = function(s) {
     if(s.length % 2 !==0) return false;
     const stack = [];
     for(let i=0;i < s.length;i++) {
         const c = s[i];
        if(c === "(" || c === "{" || c === "[") {
            stack.push(c);
        }else {
            const t = stack[stack.length - 1];
            if((t === "(" && c ===")") || (t === "{" && c ==="}") || (t === "[" && c ==="]")) {
                stack.pop()
            } else {
                return false;
            }
        }
     }
     return stack.length === 0;
 }

 let s = "()(}(]"

console.log(isValid(s));



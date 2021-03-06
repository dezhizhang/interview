/*
 * @Author: your name
 * @Date: 2021-03-06 19:03:15
 * @LastEditTime: 2021-03-06 19:09:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day06/index6.js
 */


//  for(let i=1;i<=3;i++) {
//      setTimeout((() => {
//         return () => {
//             console.log(i);
//         }
//      })(i),0)
//  }

for(let i=1;i <= 3;i++) {
    setTimeout((() => {
        return () => {
            console.log(i);
        }
    })(i),0)
}
/*
 * @Author: your name
 * @Date: 2021-02-28 23:45:21
 * @LastEditTime: 2021-02-28 23:55:39
 * @LastEditors: Please set LastEditors
 * @Description: 动态规划
 * @FilePath: /interview/data/dynamic/index.js
 */

//  let climbStairs = function(n) {
//     //  if(n < 2) return;
//     //  let dp = [1,1];
//     //  for(let i=2;i <=n;i++) {
//     //      dp[i] = dp[i -1] + dp[i-2];
//     //  }
//     //  return dp[n];

//     if(n < 2) return 1
//     let dp = [1,1];
//     for(let i = 2;i <=n;n++) {
//         dp[i] = dp[i - 1] + dp[i -2];
//     }
//     return dp[n];
     
//  }

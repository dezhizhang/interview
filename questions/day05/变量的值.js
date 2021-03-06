/*
 * @Author: your name
 * @Date: 2021-03-06 10:50:23
 * @LastEditTime: 2021-03-06 11:56:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /questions/day05/变亘的值.js
 */
/**
 * ==进行比较的时候,如果左右两边数据类型不一样，则先转为相同的数据类型
 * 1,{} = {} 两个对像进行比较，比较的是堆内存的地址
 * 2,null == undefined 相等的 / null === undefined 不相等
 * 3,NaN == NaN 不相等 NaN和谁都不相等
 * 4,[12] = "12" 对像与字符串比较，是把对像toString()转换为字符串后再进行比较的
 * 5,乖余所有情况在进行比较时，都是转换为数字（前提数据类型不一样）
 *      对像转数字，先转成字符串，然后再转换为数字
 *      字符串转数字，只要出现一个非数字字符，结果就是NaN
 *      布尔转数字true-> 1,false -> 0
 *      null转成0
 *      undefinde 转成NaN
*/

// let a = {
//     n:0,
//     toString:function() {
//         return ++this.n
//     }
// }
// if(a == 1 && a == 2 && a== 3) {
//     console.log('ok');
// }

// let a = [1,2,3];
// a.toString = a.shift;
// if(a == 1 && a == 2 && a == 3) {
//     console.log('ok')
// }


// let arr = [1,2,3];
// let arr = Array.from(new Set([1,2,3]));
// console.log(arr);


let arr = Array.from(new Set([1,2,3]));
console.log(arr);



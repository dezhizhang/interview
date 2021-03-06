/*
 * @Author: your name
 * @Date: 2021-03-06 15:27:41
 * @LastEditTime: 2021-03-06 15:55:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day06/index.js
 */



// let obj1 = {
//     say:function() {
//         console.log('hello');
//     }

// }

// let obj2 = {
//     lunch:function() {
//        console.dir(this);
//     }
// }

// obj2.lunch.call(obj1);

let obj1 = {
    say:function() {
        console.log('hello')
    }
}

let obj2 = {
    lunch:function(name,age) {
        console.dir(this)
    }
}

obj2.lunch.call(obj1);


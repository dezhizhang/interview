/*
 * @Author: your name
 * @Date: 2021-03-08 21:52:40
 * @LastEditTime: 2021-03-08 22:10:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/typescript/10类的概念.ts
 */

// class Lady {
//     content = "hello"
//     sayHello() {
//         return this.content
//     }
// }

// class Girl extends Lady {
//     sayLove() {
//         return super.sayHello() + ' world'
//     }
// }

// const goddess = new Girl();
// console.log(goddess.sayLove());

// class Lady{
//     content = "hello"
//     sayHello() {
//         return this.content;
//     }
// }
// class Girl extends Lady {
//     sayLove() {
//         return super.sayHello() + 'world';
//     }
// }
// let g = new Girl();
// console.log(g.sayLove())

class Lady {
    content = "hello";
    sayHello() {
        return this.content;
    }
}

class Girl extends Lady {
    sayLove() {
        return super.sayHello() + ' world';
    }
}

let g = new Girl();
console.log(g.sayLove());


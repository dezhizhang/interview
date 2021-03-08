/*
 * @Author: your name
 * @Date: 2021-03-08 21:21:20
 * @LastEditTime: 2021-03-08 21:36:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/typescript/8interface接口.ts
 */



// interface User{
//     name:string
//     age:string
//     sex?:number

// }


// const userInfo = (user:User) => {
//     console.log(user.name)
//     console.log(user.age);
// }

// userInfo({name:'hello',age:"22"})

interface User{
    name:string
    age:string
    sex?:number
}

const userInfo = (user:User) => {
    console.log(user.name);
    console.log(user.age);
}

userInfo({name:"hello",age:"22"});

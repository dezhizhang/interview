/*
 * @Author: your name
 * @Date: 2021-03-08 21:36:46
 * @LastEditTime: 2021-03-08 21:51:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/typescript/9interface接口.ts
 */


// interface User{
//     [propname:string]:any
//     say():string
// }

// function serInfo(user:User) {
//     console.log(user.name);
//     console.log(user.age);
// }

// serInfo({name:"hello",age:"22",say() {
//     return "hello"
// }})


// interface User{
//     [propname:string]:any
// }

// function userInfoChange(user:User) {
//     console.log(user.name);
//     console.log(user.age);
// }

// userInfoChange({name:'hello',age:"22"});


interface User{
    name:string;
    age:number;
}

interface Teach implements User {
    sex:string

}

function userInfoChange(user:Teach) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.sex)
}

userInfoChange({name:'hello',age:22,sex:'男'})


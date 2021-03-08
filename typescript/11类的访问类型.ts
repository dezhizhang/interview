/*
 * @Author: your name
 * @Date: 2021-03-08 22:10:53
 * @LastEditTime: 2021-03-08 22:36:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/typescript/11类的访问类型.ts
 */


class Peron{
    public name:string
    public say() {
        return this.name
    }
}

let p = new Peron();
p.name = "helo";
let res = p.say()
console.log('res',res);

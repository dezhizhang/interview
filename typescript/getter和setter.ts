/*
 * @Author: your name
 * @Date: 2021-03-08 23:20:14
 * @LastEditTime: 2021-03-08 23:53:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/typescript/getter和setter.ts
 */

class Peron{
    private name:string = 'hello';
    get change() {
        return this.name;
    }
    set setChange(value) {
        this.name = value;
    }
    constructor() {

    }
}

let p = new Peron();
console.log(p.change);



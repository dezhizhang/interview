/*
 * :file description: 
 * :name: /typescript/examples/interface.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-03 15:20:09
 * :last editor: 张德志
 * :date last edited: 2024-10-03 15:20:09
 */
interface Animal {
    name: string;
}

interface Bear extends Animal {
    honey:boolean;
}

const bear:Bear = {
    name:'wine',
    honey:true,
}

console.log(bear.name);
console.log(bear.honey);


/*
 * :file description: 
 * :name: /nodejs/examples/vm.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-06 20:13:18
 * :last editor: 张德志
 * :date last edited: 2024-10-06 20:13:19
 */
const vm = require('vm');

const code = 'var x = 10; x + 5;';
const result = vm.runInThisContext(code);
console.log(result); // 输出 15
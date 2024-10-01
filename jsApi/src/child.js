/*
 * :file description: 
 * :name: /jsApi/src/child.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-21 21:36:43
 * :last editor: 张德志
 * :date last edited: 2024-09-21 21:39:17
 */

process.on('message',(str) => {
    console.log('child:',str);
    console.log('child');
});


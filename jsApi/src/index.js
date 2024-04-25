/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-04-25 22:34:28
 */



// const btn = document.getElementById('btn');

// function bindEvent(elem,type,fn) {
//   elem.addEventListener(type,fn);
// }

// bindEvent(btn,'click',(ev) => {
//   console.log(ev);
// });

// bindEvent(document.body,'click',(ev) => {
//   console.log('hello')
// })

const div1 = document.getElementById('div1');

div1.addEventListener('click',(event) => {
  event.preventDefault();
  console.log(event.target);
});



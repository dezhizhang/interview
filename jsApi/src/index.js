/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-05-06 20:37:43
 */

let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  let obj = {
    id: Math.random(),
    name: 'hello',
  };
  console.log('hello')
  localStorage.setItem('info', JSON.stringify(obj));
});

window.addEventListener('storage', (event) => {
  console.log('key', event.key);
  console.log('value', event.newValue);
});

/*
 * :file description: 
 * :name: /jsApi/examples/作用域.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-21 22:07:52
 * :last editor: 张德志
 * :date last edited: 2024-04-21 22:07:57
 */
let i, a;

for (i = 0; i < 10; i++) {
  a = document.createElement('a');
  a.innerHTML = i + '<br/>';
  a.addEventListener('click', (e) => {
    e.preventDefault();
    alert(i);
  });
  document.body.appendChild(a);
}

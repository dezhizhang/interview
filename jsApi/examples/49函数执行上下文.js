/*
 * :file description:
 * :name: /jsApi/examples/49函数执行上下文.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-30 20:25:50
 * :last editor: 张德志
 * :date last edited: 2024-08-30 20:25:51
 */
function fn(a1) {
  console.log(a1); // 2
  console.log(a2); // undefined

  a3(); // 'a3()'

  console.log(this); // 'window'
  console.log(arguments); // 2,3

  var a2 = 3;
  function a3() {
    console.log("a3()");
  }
}

fn(2, 3);

/*
 * :file description: 
 * :name: /jsApi/examples/闭包.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-21 22:10:49
 * :last editor: 张德志
 * :date last edited: 2024-04-21 22:15:34
 */
function create() {
    let a = 100;
    return function() {
      console.log(a);
    }
  }
  
  const fn = create();
  
  const a = 200;
  fn();

  
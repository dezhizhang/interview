/*
 * :file description: 
 * :name: /jsApi/examples/55模块封装.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-31 16:32:21
 * :last editor: 张德志
 * :date last edited: 2024-08-31 16:32:22
 */

// 模块封装
(function () {
    var msg = "hello world";
  
    function doSome() {
      console.log("doSome" + msg);
    }
    window.myModule = {
      doSome,
    };
  })();
  
  myModule.doSome();
  
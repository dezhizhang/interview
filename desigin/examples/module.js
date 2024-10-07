/*
 * :file description:
 * :name: /desigin/examples/module.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-07 15:00:56
 * :last editor: 张德志
 * :date last edited: 2024-10-07 15:00:57
 */
const module = (function () {
  // 私有变量和方法
  const privateVar = "I am private";
  const privateMethod = function () {
    console.log(privateVar);
  };
  return {
    // 公共方法
    publicMethod: function () {
      privateMethod();
    },
    //公共属性
    publicVar: "I am public",
  };
})();

console.log(module.publicVar); // 输出: I am public
console.log(module.publicMethod()); //  输出: I am private

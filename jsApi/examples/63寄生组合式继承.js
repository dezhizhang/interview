/*
 * :file description: 
 * :name: /jsApi/examples/63寄生组合式继承.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-23 13:53:42
 * :last editor: 张德志
 * :date last edited: 2024-09-23 13:53:57
 */
// function Person(name) {
//     this.name = name;
//   }
  
//   Person.prototype.sayHi = function () {
//     console.log("hi");
//   };
  
//   function Student(name) {
//     Person.call(this, name);
//   }
  
//   const prototype = Object.create(Person.prototype, {
//     constructor: {
//       value: Student,
//     },
//   });
  
//   Student.prototype = prototype;
  
//   const s = new Student("tom");
//   s.sayHi();
  
//   console.log(s);
  
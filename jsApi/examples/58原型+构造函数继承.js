/*
 * :file description: 
 * :name: /jsApi/examples/58原型+构造函数继承.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-08-31 23:38:57
 * :last editor: 张德志
 * :date last edited: 2024-08-31 23:38:57
 */
// 原型链 + 构造函数继承

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.setName = function (name) {
    this.name = name;
  };
  
  function Student(name, age, price) {
    Person(this, name, age);
    this.price = price;
  }
  
  Student.prototype = new Person();
  Student.prototype.constructor = Student;
  
  Student.prototype.setPrice = function(price) {
      this.price = price;
  }
  
  var st = new Student('tom',18,1234);
  console.log(st instanceof Person);
  
  
/*
 * :file description: 
 * :name: /desigin/examples/constructor.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-06 22:36:58
 * :last editor: 张德志
 * :date last edited: 2024-10-06 22:38:49
 */
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    }
  }
  
  const person = new Person('tom',18);
  person.greet();
  
/*
 * :file description: 
 * :name: /desigin/examples/decorated.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-07 10:27:07
 * :last editor: 张德志
 * :date last edited: 2024-10-07 10:27:07
 */

class Car {
    drive() {
      console.log('The car is driving.')
    }
  }
  
  // 装饰器类
  class CarDecorator{
    constructor(car) {
      this.car = car;
    }
    drive() {
      console.log("Starting the engine...");
      this.car.drive();
      console.log('Turning on the headlights.');
    }
  }
  
  const myCar = new Car();
  const decoratedCar = new CarDecorator(myCar);
  decoratedCar.drive();
  
/*
 * :file description: 
 * :name: /desigin/examples/absFactory.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-07 07:03:34
 * :last editor: 张德志
 * :date last edited: 2024-10-07 07:03:35
 */
function CarFactory() {};

CarFactory.prototype.createCar = function() {
  throw new Error('This method should be overridden!')
}

//  Sedan 工厂
function SedanFactory() {}
SedanFactory.prototype = Object.create(CarFactory.prototype);
SedanFactory.prototype.createCar = function() {
  return {type:'Sedan', wheels: 4, doors: 4 }
}

//  SUV 工厂
function SUVFactory() {};
SUVFactory.prototype = Object.create(CarFactory.prototype);
SUVFactory.prototype.createCar = function() {
  return  { type: 'SUV', wheels: 4, doors: 5 }
}

// 使用抽象工厂创建汽车
const sedanFactory = new SedanFactory();
const suvFactory =  new SUVFactory();


const sedan = sedanFactory.createCar();
const suv = suvFactory.createCar();

console.log(sedan); //  输出: { type: 'Sedan', wheels: 4, doors: 4 }
console.log(suv); //  输出: { type: 'SUV', wheels: 4, doors: 


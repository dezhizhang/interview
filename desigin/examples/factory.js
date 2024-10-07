/*
 * :file description:
 * :name: /desigin/examples/factory.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-07 06:34:20
 * :last editor: 张德志
 * :date last edited: 2024-10-07 06:34:21
 */
function CarFactory(type) {
  let car;
  switch (type) {
    case "sedan":
      car = { type, wheels: 4, doors: 4 };
      break;
    case "suv":
      car = { type, wheels: 4, doors: 5 };
      break;
    default:
      car = { type: "Unknown", wheels: 4, doors: 4 };
  }
  car.drive = function () {
    console.log(`Driving a ${this.type}`);
  };
  return car;
}

// 使用工厂创建不同类型的汽车
const sedan = CarFactory("sedan");
const suv = CarFactory("suv");
const truck = CarFactory("truck");

sedan.drive();
suv.drive();
truck.drive();

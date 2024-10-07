/*
 * :file description:
 * :name: /desigin/examples/builder.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-07 09:38:50
 * :last editor: 张德志
 * :date last edited: 2024-10-07 09:38:50
 */
class House {
  constructor() {
    this.floors = 0;
    this.windows = 0;
    this.garden = false;
  }
}

class HouseBuilder {
  constructor() {
    this.house = new House();
  }
  buildFloors(floors) {
    this.house = floors;
    return this;
  }
  buildWindows(windows) {
    this.house.windows = windows;
    return this;
  }
  buildGarden(hasGarden) {
    this.house.garden = hasGarden;
    return this;
  }
  // 返回构造对像
  build() {
    return this.house;
  }
}

const house = new HouseBuilder()
  .buildFloors(2)
  .buildWindows(4)
  .buildGarden(true)
  .build();

console.log(house);

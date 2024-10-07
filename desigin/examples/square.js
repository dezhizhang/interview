/*
 * :file description:
 * :name: /desigin/examples/square.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-07 15:18:35
 * :last editor: 张德志
 * :date last edited: 2024-10-07 15:27:44
 */
class Color {
  constructor(name) {
    this.name = name;
  }
  applyColor() {
    console.log(`Applying color: ${this.name}`);
  }
}

class Red extends Color {
  constructor() {
    super("red");
  }
}

class Blue extends Color {
  constructor() {
    super("Blue");
  }
}

class Shape {
  constructor(color) {
    this.color = color;
  }
  draw() {
    throw new Error("This method should be overwritten!");
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  draw() {
    console.log("Drawing a Circle");
    this.color.applyColor(); // 使用桥接引用的颜色
  }
}

const circle = new Circle(new Red());
circle.draw();

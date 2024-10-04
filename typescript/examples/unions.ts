/*
 * :file description: 
 * :name: /typescript/examples/unions.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-03 20:58:36
 * :last editor: 张德志
 * :date last edited: 2024-10-03 20:58:36
 */
interface Circle {
    kind: "circle";
    radius: number;
  }
  
  interface Square {
    kind: "square";
    sideLength: number;
  }
  
  type Shape1 = Circle | Square;
  
  function getArea(shape: Shape1) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "square":
        return shape.sideLength ** 2;
    }
  }
  
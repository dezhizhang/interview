/*
 * :file description: 
 * :name: /typescript/examples/never.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-03 21:17:44
 * :last editor: 张德志
 * :date last edited: 2024-10-03 22:19:49
 */
interface Circle {
    kind: "circle";
    radius: number;
  }
  
  interface Square {
    kind: "square";
    sideLength: number;
  }
  
  interface Triangle {
    kind: "triangle";
    sideLength: number;
  }
  
  type Shape2 = Circle | Square | Triangle;
  
  function getArea1(shape: Shape2) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "square":
        return shape.sideLength ** 2;
      case "triangle":
        return shape.sideLength * 2;
      default:
        const _exhaustiveCheck: never = shape;
        return _exhaustiveCheck;
    }
  }
  
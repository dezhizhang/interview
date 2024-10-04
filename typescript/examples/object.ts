/*
 * :file description:
 * :name: /typescript/examples/object.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-03 14:36:50
 * :last editor: 张德志
 * :date last edited: 2024-10-03 15:10:31
 */
function printCoord(pt: { x: number; y: number }) {
    console.log("坐标的X值为:" + pt.x);
    console.log("坐标的X值为:" + pt.y);
  }

  printCoord({
    x: 3,
    y: 7,
  });

  function printName(obj:{first:string,last?:string}) {
      console.log(obj?.last?.toUpperCase())
  }

  printName({
      first:'felix',
  })

const number = 'hello'


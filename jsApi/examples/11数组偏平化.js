/*
 * :file description:
 * :name: /jsApi/examples/11数组偏平化.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-05-08 05:25:15
 * :last editor: 张德志
 * :date last edited: 2024-05-08 05:40:45
 */
export function flatten(arr) {
    const result = [];
    arr.forEach((item) => {
      if(Array.isArray(item)) {
        result.push(...item);
      }else {
        result.push(item)
      }
    });
    return result;
  }
  
  
  console.log(flatten([1,2,[3,[5],4]]));
  

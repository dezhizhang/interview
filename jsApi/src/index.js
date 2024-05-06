/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-05-06 22:21:05
 */

let arr = [
  {
    id: 1,
    name: '部门A',
    parentId: 0,
  },
  {
    id: 2,
    name: '部门B',
    parentId: 1,
  },
  {
    id: 3,
    name: '部门C',
    parentId: 1,
  },
  {
    id: 4,
    name: '部门D',
    parentId: 2,
  },
  {
    id: 5,
    name: '部门E',
    parentId: 2,
  },
  {
    id: 6,
    name: '部门F',
    parentId: 3,
  },
];

function convert(arr) {
  const map = new Map();

  let root = null;

  let length = arr.length;
  for (let i = 0; i < length; i++) {
    const { id, name, parentId } = arr[i];

    let treeNode = {
      id,
      name,
    };
    map.set(id, treeNode);

    let parentNode = map.get(parentId);
    if (parentNode) {
      if (parentNode.children == null)parentNode.children = [];
      parentNode.children.push(treeNode);
     
    }
    if(parentId === 0) root = treeNode;

  }

  return root;
}



console.log(convert(arr));


/*
 * :file description:
 * :name: /jsApi/src/index.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-18 05:51:29
 * :last editor: 张德志
 * :date last edited: 2024-05-06 23:11:38
 */

let obj = {
  id: 1,
  name: '部门A',
  children: [
    {
      id: 2,
      name: '部门B',
      children: [
        {
          id: 4,
          name: '部门D',
        },
        {
          id: 5,
          name: '部门E',
        },
      ],
    },
    {
      id: 3,
      name: '部门C',
    },
  ],
};

function convert(root) {
    const map = new Map();

    const arr = [];

    // 广度优先遍历
    const queue = [];
    queue.unshift(root);

    while(queue.length > 0) {
      const curNode = queue.pop();
      if(!curNode) break;

      const {id,name,children = []} = curNode;


      const parentNode = map.get(curNode);
      const parentId = parentNode && parentNode.id || 0;
      const item = {id,name,parentId};
      arr.push(item);

      // 子节点入队
      children.forEach(child => {
        map.set(child,curNode);
        queue.unshift(child);
      })

    }
    return arr;
}

console.log(convert(obj));


const obj = {
  id: 1,
  name: "部门A",
  children: [
    {
      id: 2,
      name: "部门B",
      children: [
        {
          id: 4,
          name: "部门D",
        },
        {
          id: 5,
          name: "部门E",
        },
      ],
    },
    {
      id: 3,
      name: "部门C",
      children: [
        {
          id: 6,
          name: "部门F",
        },
      ],
    },
  ],
};

// 队列实现广度优先遍历
function convert(root) {
  const map = new Map();

  let arr = [];

  // 广度优先遍历 queue
  const queue = [];
  queue.unshift(root); // 入队

  while (queue.length > 0) {
    const curNode = queue.pop();

    if (curNode == null) break;

    const { id, name, children = [] } = curNode;

    // 创建数据item并push
    const parentNode = map.get(curNode);

    const parentId = (parentNode && parentNode.id) || 0;
    const item = { id, name, parentId };
    arr.push(item);

    children.forEach((child) => {
      map.set(child, curNode);

      // 入队
      queue.unshift(child);
    });
  }
  return arr;
}

console.log(convert(obj));

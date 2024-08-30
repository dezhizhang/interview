const arr = [
    {
      id: 1,
      name: "部门A",
      parentId: 0,
    },
    {
      id: 2,
      name: "部门B",
      parentId: 1,
    },
    {
      id: 3,
      name: "部门C",
      parentId: 1,
    },
    {
      id: 4,
      name: "部门D",
      parentId: 2,
    },
    {
      id: 5,
      name: "部门E",
      parentId: 2,
    },
    {
      id: 6,
      name: "部门F",
      parentId: 3,
    },
  ];
  
  function convert(arr) {
    let root = null;
    const map = new Map();
    arr.forEach((item) => {
      const { id, name, parentId } = item;
  
      // 定义treeNode
      const treeNode = {
        id,
        name,
      };
      map.set(id, treeNode);
  
      // 找到parentNode并加入到children
      const parentNode = map.get(parentId);
  
      if (parentNode) {
        if (!parentNode.children) parentNode.children = [];
        parentNode.children.push(treeNode);
      }
      if (parentId === 0) root = treeNode;
    });
    return root;
  }
  
  console.log(convert(arr));
  
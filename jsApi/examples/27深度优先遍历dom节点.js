// 访问节点
function visitNode(n) {
    if (n instanceof Comment) {
      // 注释
      console.log("Comment", n.textContent);
    }
    // 文本
    if (n instanceof Text) {
      console.log("text node", n.textContent && n.textContent.trim());
    }
    // 元素
    if (n instanceof HTMLElement) {
      console.log("element node", `<${n.tagName.toLowerCase()}>`);
    }
  }
  
  // 深度优先遍历
  function deptchFirstTraverse(root) {
    visitNode(root);
  
    const childNodes = root.childNodes;
  
    if (childNodes.length) {
      childNodes.forEach((child) => {
        deptchFirstTraverse(child);
      });
    }
  }
  
  const box = document.getElementById("box");
  if (box == null) throw new Error("box is null");
  deptchFirstTraverse(box);
  
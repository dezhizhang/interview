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

// 广度优先遍历
function breadthFirstTraverse(root) {
    const queue = [];

    // 根节点入队列
    queue.unshift(root);

    while (queue.length > 0) {
        const curNode = queue.pop();
        if (curNode == null) break;

        visitNode(curNode);

        // 子节点入队列
        const childNodes = curNode.childNodes;
        if (childNodes.length) {
            childNodes.forEach(child => queue.unshift(child));
        }

    }
}

const box = document.getElementById('box');
if (box == null) throw new Error('box is null');
breadthFirstTraverse(box);
/*
 * :file description:
 * :name: /react/src/react-dom.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-25 11:33:13
 * :last editor: 张德志
 * :date last edited: 2024-10-25 12:04:10
 */

import { REACT_ELEMENT } from "./stants";

function render(vdom, container) {
  //1 vdom转换成dom
  const newDom = createDom(vdom);
  console.log();
  //2 真实dom到对应的位置
  container.appendChild(newDom);
}

// 更新props
function updateProps(dom, oldProps, newProps) {
  // 添加属性
  for (let key in newProps) {
    if (key === "style") {
      const styleObject = newProps[key];
      for (let attr in styleObject) {
        dom.style[attr] = styleObject[attr];
      }
    } else if (key !== "children") {
      dom[key] = newProps[key];
    }
  }

  // 更新属性
  if (oldProps) {
    for (let key in oldProps) {
      if (newProps[key]) {
        dom[key] = null;
      }
    }
  }
}

// 创建dom
function createDom(vdom) {
  let dom;
  const { $$typeof, type, props } = vdom;

  //1 判断type类型
  if ($$typeof === REACT_ELEMENT) {
    dom = document.createElement(type);
  } else {
    dom = document.createTextNode(type);
  }
  //2 处理属性
  if (props) {
    updateProps(dom, {}, props);
  }
  //3 children

  return dom;
}

const ReactDOM = {
  render,
};

export default ReactDOM;

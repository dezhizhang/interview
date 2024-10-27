/*
 * :file description:
 * :name: /react/src/react-dom.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-25 11:33:13
 * :last editor: 张德志
 * :date last edited: 2024-10-27 21:48:06
 */

import { REACT_ELEMENT, REACT_TEXT } from "./stants";

function render(vdom, container) {
  //1 vdom变成真实dom
  const dom = createDom(vdom);
  //2 真实dom放到对应位置
  container.appendChild(dom);
}

// 更新属性
function updateProps(dom, oldProps, newProps) {
  for (let key in newProps) {
    // 跳过children处理
    if (key === "children") {
      continue;
    } else if (key === "style") {
      // 处理样式
      const styleObj = newProps[key];
      for (let attr in styleObj) {
        dom.style[attr] = styleObj[attr];
      }
    } else {
      // 其它属性
      dom[key] = newProps[key];
    }
  }
  
  // 更新属性
  for (let key in oldProps) {
    // 新属性中没有旧属性删除旧属性
    if (!newProps[key]) {
      // 移除旧属性
      dom[key] = null;
    }
  }

  return dom;
}

// 创建真实dom
function createDom(vdom) {
  //1 vdom转换成dom
  const { $$typeof, props, type } = vdom;

  let dom;
  if ($$typeof === REACT_ELEMENT) {
    dom = document.createElement(type);
  } else if (type === REACT_TEXT) {
    dom = document.createTextNode(type);
  }
  //2 处理属性
  updateProps(dom, {}, props);

  //3 children
  return dom;
}

const ReactDOM = {
  render,
};

export default ReactDOM;

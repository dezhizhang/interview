/*
 * :file description:
 * :name: /react/src/react-dom.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-25 11:33:13
 * :last editor: 张德志
 * :date last edited: 2024-10-28 08:07:42
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
  console.log(newProps);
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

// 处理子节点
function changeChildren(dom, children) {
  // 如果只有一个子节点
  if (typeof children === "object" && children.type) {
    render(children, dom);
  } else if (Array.isArray(children)) {
    children.forEach((item) => render(item, dom));
  }
}

// 处理函数组件
function mountFunctionComponent(vdom) {
  const { type, props } = vdom;
  const functionVdom = type(props);
  // 获取真实dom
  return createDom(functionVdom);
}

// 创建真实dom
function createDom(vdom) {
  //1 vdom转换成dom
  const { $$typeof, props, type, content } = vdom;

  let dom;
  if ($$typeof === REACT_ELEMENT) {
    if (typeof type === "function") {
      return mountFunctionComponent(vdom);
    } else {
      dom = document.createElement(type);
    }
  } else if (type === REACT_TEXT) {
    dom = document.createTextNode(content);
  }
  //2 处理属性
  dom && updateProps(dom, {}, props);

  // 处理子节点
  const children = props?.children;
  changeChildren(dom, children);

  return dom;
}

const ReactDOM = {
  render,
};

export default ReactDOM;

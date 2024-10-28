/*
 * :file description:
 * :name: /react/src/react-dom.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-25 11:33:13
 * :last editor: 张德志
 * :date last edited: 2024-10-29 07:00:12
 */

import { REACT_ELEMENT, REACT_TEXT } from "./stants";
import addEvent from "./event";

function render(vdom, container) {
  //1 vdom变成真实dom
  mount(vdom, container);
}

function mount(vdom, container) {
  const dom = createDom(vdom);
  if (dom) {
    //2 真实dom放到对应位置
    container.appendChild(dom);
  }
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
    } else if (key.startsWith("on")) {
      addEvent(dom, key.toLocaleLowerCase(), newProps[key]);
      // dom[key.toLocaleLowerCase()] = newProps[key];
    } else {
      // 其它属性
      if (dom) dom[key] = newProps[key];
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
  if (typeof children === "string" || typeof children === "number") {
    children = { type: REACT_TEXT, content: children };
    mount(children, dom);
  } else if (typeof children === "object" && children.type) {
    // 如果只有一个子节点
    mount(children, dom);
  } else if (Array.isArray(children)) {
    children.forEach((item) => mount(item, dom));
  }
}

// 处理函数组件
function mountFunctionComponent(vdom) {
  const { type, props } = vdom;
  const functionVdom = type(props);
  // 获取真实dom
  return createDom(functionVdom);
}

// 处理类组件
function mountClassComponent(vdom) {
  const { type, props, ref } = vdom;
  const classInstance = new type(props);
  // 向上传递类组件ref
  if (ref) ref.current = classInstance;
  // 获取虚拟dom
  const classVdom = classInstance.render();
  classInstance.oldReaderVdom = classVdom;
  // 转换成真实dom
  return createDom(classVdom);
}

// 创建真实dom
function createDom(vdom) {
  if (typeof vdom === "string" || typeof vdom === "number") {
    vdom = {
      type: REACT_TEXT,
      content: vdom,
    };
  }

  //1 vdom转换成dom
  const { $$typeof, props, type, content, ref } = vdom;

  let dom;
  if ($$typeof === REACT_ELEMENT) {
    if (typeof type === "function") {
      if (type.isReactComponent) {
        return mountClassComponent(vdom);
      } else {
        return mountFunctionComponent(vdom);
      }
    } else {
      dom = document.createElement(type);
    }
  } else {
    dom = document.createTextNode(content);
  }
  //2 处理属性
  updateProps(dom, {}, props);

  // 处理子节点
  const children = props?.children;
  changeChildren(dom, children);

  // 保存真实dom
  vdom.dom = dom;
  // 原生组件ref挂载
  if (ref) ref.current = dom;

  return dom;
}

// 现新dom更新
export function twoVnode(parentDom, oldVnode, newVnode) {
  // 获取到新的真实dom
  const newDom = createDom(newVnode);
  const oldDom = oldVnode.dom;

  // 实现dom更新
  parentDom.replaceChild(newDom, oldDom);
}

const ReactDOM = {
  render,
};

export default ReactDOM;

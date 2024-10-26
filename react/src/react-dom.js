/*
 * :file description:
 * :name: /react/src/react-dom.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-25 11:33:13
 * :last editor: 张德志
 * :date last edited: 2024-10-26 21:17:22
 */

import { REACT_ELEMENT, REACT_TEXT } from "./stants";
import addEvent from "./event";

function render(vdom, container) {
  //1 vdom转换成dom
  mount(vdom, container);
}

function mount(vdom, container) {
  const newDom = createDom(vdom);

  container.appendChild(newDom);
  if (newDom.componentDidMount) {
    newDom.componentDidMount();
  }
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
    } else if (key.startsWith("on")) {
      addEvent(dom, key.toLocaleLowerCase(), newProps[key]);
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

function changeChildren(children, dom) {
  if (typeof children === "string" || typeof children === "number") {
    children = { $$typeof: REACT_TEXT, content: children };
    render(children, dom);
  } else if (typeof children === "object" && children.type) {
    render(children, dom);
  } else if (Array.isArray(children)) {
    children.forEach((item) => render(item, dom));
  }
}

// 加载处理类组件
function mountClassComponent(vdom) {
  const { type, props, ref } = vdom;
  const classInstance = new type(props);
  if (ref) ref.current = classInstance;

  const classVdom = classInstance.render();
  classInstance.oldReaderVnode = classVdom;

  vdom.oldReaderVnode = classInstance.oldReaderVnode = classVdom;
  const dom = createDom(classVdom);

  return dom;
}

// 处理函数组件
function mountFunctionComponent(vdom) {
  const { type, props } = vdom;
  let functionVdom = type(props);
  return createDom(functionVdom);
}

// 处理forwardRef组件
function mountForWardRef(vdom) {
  const { type, ref, props } = vdom;
  const refVnode = type.render(props, ref);

  return createDom(refVnode);
}

// 创建dom
function createDom(vdom) {
  if (typeof vdom === "string" || typeof vdom === "number") {
    vdom = {
      $$typeof: REACT_TEXT,
      content: vdom,
    };
  }

  let dom;
  const { $$typeof, type, props, content, ref } = vdom;

  //1 判断type类型
  if (type && type.REACT_FORWARD_REF) {
    return mountForWardRef(dom);
  } else if ($$typeof === REACT_ELEMENT) {
    dom = document.createElement(type);
  } else if (typeof type === "function") {
    // 处理类组件
    if (type.isReactComponent) {
      return mountClassComponent(vdom);
    }
  } else if ($$typeof === REACT_TEXT) {
    dom = document.createTextNode(content);
  }
  //2 处理属性
  updateProps(dom, {}, props);

  const children = props && props.children;
  if (children) {
    changeChildren(children, dom);
  }
  vdom.dom = dom;
  if (ref) ref.current = dom;
  return dom;
}

// 实现组件更新
export function twoVnode(dom, oldVnode, newVnode) {
  let newdom = createDom(newVnode);
  let olddom = createDom(oldVnode);
  dom.replaceChild(newdom, olddom);
}

export function findDOM(vdom) {
  if (!vdom) return null;
  if (vdom.dom) {
    return vdom.dom;
  } else {
    findDOM(vdom.oldReaderVnode);
  }
}

const ReactDOM = {
  render,
};

export default ReactDOM;

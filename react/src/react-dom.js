/*
 * :file description:
 * :name: /react/src/react-dom.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-25 11:33:13
 * :last editor: 张德志
 * :date last edited: 2024-10-30 10:05:39
 */

import { REACT_ELEMENT, REACT_TEXT, REACT_FORWARD_REF } from "./stants";
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
    if (dom.componentDidMount) {
      // 组件挂载完毕
      dom.componentDidMount();
    }
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
  // 挂载属性
  vdom.oldReaderVdom = functionVdom;
  // 获取真实dom
  return createDom(functionVdom);
}

// 处理类组件
function mountClassComponent(vdom) {
  const { type, props, ref } = vdom;
  const classInstance = new type(props);
  // 向上传递类组件ref
  if (ref) ref.current = classInstance;
  // 组件将要挂载
  if (classInstance.componentWillMount) {
    classInstance.componentWillMount();
  }
  // 获取虚拟dom
  const classVdom = classInstance.render();
  classInstance.oldReaderVdom = classVdom;
  // 转换成真实dom
  const dom = createDom(classVdom);
  if (classInstance.componentDidMount) {
    dom.componentDidMount = classInstance.componentDidMount;
  }
  return dom;
}

// 处理ref函数组件
function mountForWardRef(vdom) {
  const { type, props, ref } = vdom;
  // 获取ref虚拟dom
  const refVdom = type.render(props, ref);
  // 转换成真实dom
  return createDom(refVdom);
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
    } else if (type && type.$$typeof === REACT_FORWARD_REF) {
      return mountForWardRef(vdom);
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

// 移除节点
function unmontVnode(vdom) {
  let { props, ref } = vdom;
  const currentDom = findDom(vdom);
  if (vdom.classInstance && vdom.classInstance.componentWillMount) {
    vdom.classInstance.componentWillMount();
  }
  if (ref) {
    ref = null;
  }
  if (props.children) {
    // 递归处理元素
    const children = Array.isArray(props.children)
      ? props.children
      : [props.children];
    children.forEach(unmontVnode);
  }

  // 删除元素
  if (currentDom) {
    currentDom.parentNode.removeChild(currentDom);
  }
}

// 添加新节点
function moutVnode(parentDom, newVnode, nextDom) {
  const newDom = findDom(newVnode);

  if (newDom) {
    // 插入到对应的位置
    parentDom.insertBefore(newDom, nextDom);
  } else {
    // 插入到最后位置
    parentDom.appendChild(newDom);
  }
  // 调用组件挂载完毕生命周期
  if (newDom.componentDidMount) {
    newDom.componentDidMount();
  }
}

// 更新children
function updateChildren(currentDom, oldChildren, newChildren) {
  oldChildren = Array.isArray(oldChildren) ? oldChildren : [oldChildren];
  newChildren = Array.isArray(newChildren) ? newChildren : [newChildren];

  const maxLength = Math.max(oldChildren.length, newChildren.length);

  for (let i = 0; i < maxLength; i++) {
    // 更新组件
    const nextDom = oldChildren.find(
      (item, index) => index > i && item && findDom(item)
    );
    twoVnode(
      currentDom,
      oldChildren[i],
      newChildren[i],
      nextDom && findDom(nextDom)
    );
  }
}

// 更新类组件
function updateClassComponent(oldVdom, newVdom) {
  const classInstance = newVdom.classInstance = oldVdom.classInstance;
  if(classInstance?.componentWillReceiveProps) {
    classInstance.componentWillReceiveProps(oldVdom.props);
  }
  classInstance.updater.emitUpdate(newVdom.props);
  
}

// 更新函数组件
function updateFunctionComponent(oldVdom, newVdom) {
  // 获取到老的真实dom
  const parentDom = findDom(oldVdom).parentNode;
  const { type, props } = newVdom;
  const newRenderVdom = type(props);
  twoVnode(parentDom, oldVdom.oldReaderVdom, newRenderVdom);
  oldVdom.oldReaderVdom = newRenderVdom;
}

// 更新元素
function updateElement(oldVdom, newVnode) {
  if (oldVdom.type === REACT_TEXT && newVnode.type === REACT_TEXT) {
    const currentDom = (newVnode.dom = findDom(oldVdom));
    currentDom.textContent = newVnode.content;
  } else if (typeof oldVdom.type === "string") {
    // 百分百有问题傻带人写的
    const currentDom = (newVnode.dom = findDom(oldVdom));
    // 更新属性
    updateProps(currentDom, oldVdom.props, newVnode.props);
    // 处理children
    updateChildren(currentDom, oldVdom.props.children, newVnode.props.children);
  } else if (typeof oldVdom.type === "function") {
    if (oldVdom.type.isReactComponent) {
      newVnode.classInstance = oldVdom.classInstance;
      updateClassComponent(oldVdom, newVnode);
    } else {
      // 函数组件
      updateFunctionComponent(oldVdom, newVnode);
    }
  }
}

// 现新dom更新
export function twoVnode(parentDom, oldVnode, newVnode, nextDom) {
  if (oldVnode && !newVnode) {
    // 新的设有，旧的存在移除旧的
    unmontVnode(oldVnode);
  } else if (!oldVnode && newVnode) {
    moutVnode(parentDom, newVnode, nextDom);
  } else if (oldVnode && newVnode && oldVnode.type !== newVnode.type) {
    // 新旧节点都有
    // 新的节点类型与旧节点类型不相等
    // 删除老节点添加新节点
    unmontVnode(oldVnode);
    moutVnode(parentDom, newVnode, nextDom);
  } else {
    // 类型相同 更新元素
    updateElement(oldVnode, newVnode);
  }
}

// 虚拟dom转换成真实dom
export function findDom(vdom) {
  if (!vdom) return null;
  if (vdom.dom) {
    return vdom.dom;
  } else {
    findDom(vdom.oldReaderVdom);
  }
}

const ReactDOM = {
  render,
};

export default ReactDOM;

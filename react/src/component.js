/*
 * :file description:
 * :name: /react/src/component.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-25 20:33:32
 * :last editor: 张德志
 * :date last edited: 2024-10-26 05:44:45
 */

import { twoVnode } from "./react-dom";

// 实现React组件更新
function shouldUpdate(classInstance, nextState) {
  classInstance.state = nextState;
  // 实现组件更新
  classInstance.forceUpdate();
}

class Updater {
  constructor(instance) {
    this.instance = instance;
    this.peddingState = [];
  }
  addState(peddingState) {
    this.peddingState.push(peddingState);
    // 更新组件
    this.emitUpdate();
  }
  emitUpdate() {
    // 更新组件
    this.updateComponent();
  }
  // 更新组件获取最新数组
  updateComponent() {
    const { peddingState, instance } = this;
    if (peddingState.length > 0) {
      shouldUpdate(instance, this.getState());
    }
  }

  getState() {
    let { peddingState, instance } = this;
    let { state } = instance;
    peddingState.forEach((nestState) => {
      state = { ...state, nestState };
    });
    // 清空数据
    this.peddingState.length = 0;
    return state;
  }
}

class Component {
  static isReactComponent = true;
  constructor(props) {
    this.state = {};
    this.props = props;

    this.updater = new Updater(this);
  }
  setState(partialState) {
    this.updater.addState(partialState);
  }
  forceUpdate() {
    // 实现组件更新
    let newVNode = this.render();
    let oldVnode = this.oldReaderVnode;
    const oldDom = oldVnode.dom;
    twoVnode(oldDom.parentNode, newVNode, oldVnode);
  }
}

export default Component;

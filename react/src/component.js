/*
 * :file description:
 * :name: /react/src/component.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-25 20:33:32
 * :last editor: 张德志
 * :date last edited: 2024-10-29 04:34:43
 */

import { twoVnode } from "./react-dom";

export const updateQueue = {
  // 标识是同步更新还是异步更新
  isBatchData:false, 
  // 需要更新的数组
  updaters:[],
  batchUpdate() {
    updateQueue.updaters.forEach(updater => updater.updateComponent());
    updateQueue.isBatchData = false;
    updateQueue.updaters.length = 0;
  }
}


// 实现组件更新
function shouldUpdate(classInstance, nextState) {
  // 获取到最新的数据
  classInstance.state = nextState;
  // 实现组件数据更新
  classInstance.forceUpdate();
}

class Updater {
  constructor(classInstance) {
    // 保存类实例
    this.classInstance = classInstance;
    // 保存数据
    this.peddingState = [];
  }
  // 添加数据
  addState(partialState) {
    this.peddingState.push(partialState);

    this.emitUpdate();
  }

  // 获取最新数据
  getState() {
    const { classInstance, peddingState } = this;
    let { state } = classInstance;
    peddingState.forEach((nestState) => {
      state = { ...state, ...nestState };
    });

    // 清空数据
    peddingState.length = 0;
    // 返回最新数据
    return state;
  }

  // 更新组件
  updateComponent() {
    const { classInstance, peddingState } = this;
    if (peddingState.length > 0) {
      shouldUpdate(classInstance, this.getState());
    }
  }
  // 更新数据
  emitUpdate() {
    if(updateQueue.isBatchData) {
      // 异步处理收集所有的setState()
      updateQueue.updaters.push(this);
    }else {
      this.updateComponent();
    }
  }
}

class Component {
  static isReactComponent = true;
  constructor(props) {
    this.props = props;
    this.state = {};
    this.updater = new Updater(this);
  }
  setState(partialState) {
    this.updater.addState(partialState);
  }
  // 组件的强制更新
  forceUpdate() {
    // 实现组件更新
    const newVdom = this.render();
    // 获取旧的vdom
    const oldVdom = this.oldReaderVdom;
    // 获取到旧真实dom
    const oldDom = oldVdom.dom;
    // 获取到父节点
    const parentDom = oldDom.parentNode;
    // 实现组件更新
    twoVnode(parentDom, oldVdom, newVdom);
    // 上一次的等于新的
    this.oldReaderVdom = newVdom;
  }
}

export default Component;

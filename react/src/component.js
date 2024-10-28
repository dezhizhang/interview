/*
 * :file description:
 * :name: /react/src/component.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-25 20:33:32
 * :last editor: 张德志
 * :date last edited: 2024-10-28 11:26:11
 */

// 实现组件更新
function shouldUpdate(classInstance,nextState) {
    
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
      state = { ...state, nestState };
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
    this.updateComponent();
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
}

export default Component;

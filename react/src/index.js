/*
 * :file description:
 * :name: /react/src/index.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-07-25 22:20:46
 * :last editor: 张德志
 * :date last edited: 2024-10-29 10:52:12
 */

import React from "./react";
import ReactDOM from "./react-dom";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
    };
    console.log("组件初始化");
  }

  componentWillMount() {
    console.log("App componentWillMount(组件加载之前)");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentDidMount() {
    console.log("App componentDidMount(组件加载之后)");
  }

  componentDidUpdate() {
    console.log("App componentDidUpdate(组件将要更新)");
  }

  render() {
    return (
      <div>
        <p>{this.state.num}</p>
        <button onClick={() => this.setState({num:this.state.num + 1})}>+</button>
      </div>
    );
  }
}

console.log(ReactDOM.version);

ReactDOM.render(<App name={"world"} />, document.querySelector("#root"));

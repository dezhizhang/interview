/*
 * :file description:
 * :name: /react/src/index.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-07-25 22:20:46
 * :last editor: 张德志
 * :date last edited: 2024-10-26 21:24:27
 */
import React from "./react";
import ReactDOM from "./react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
    };
    console.log("初始化");
  }
  componentDidMount() {
    console.log("组件挂载完成");
  }
  componentDidUpdate() {
    console.log("组件更新完成");
  }
  shouldComponentUpdate(nextProps,nextState) {

    return true;
  }
  render() {
    console.log('this',this.state.num);

    return (
      <div>
        <p>{this.state.num}</p>
        <button
          onClick={() => {
            this.setState({
              num: this.state.num + 1,
            });
          }}
        >
          +
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

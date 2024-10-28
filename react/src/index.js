/*
 * :file description:
 * :name: /react/src/index.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-07-25 22:20:46
 * :last editor: 张德志
 * :date last edited: 2024-10-28 11:08:10
 */
import React from "./react";
import ReactDOM from "./react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
    };
  }
  render() {
    return (
      <div>
        <div style={{ color: "red" }}>{this.state.num}</div>
        <button onClick={() => this.setState({ num: this.state.num + 1 })}>
          +
        </button>
      </div>
    );
  }
}

console.log(<App />);

ReactDOM.render(<App name={"world"} />, document.querySelector("#root"));

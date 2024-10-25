/*
 * :file description:
 * :name: /react/src/index.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-07-25 22:20:46
 * :last editor: 张德志
 * :date last edited: 2024-10-25 20:48:23
 */
import React from "./react";
import ReactDOM from "./react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h1>HELLO</h1>;
  }
}

console.log(<App />);

ReactDOM.render(<App name={"WORLD"} />, document.querySelector("#root"));

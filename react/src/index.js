/*
 * :file description:
 * :name: /react/src/index.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-07-25 22:20:46
 * :last editor: 张德志
 * :date last edited: 2024-10-30 11:56:34
 */

import React from "./react";
import ReactDOM from "./react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["A", "B", "C", "D", "E", "F"],
    };
  }
  render() {
    console.log(this.state.num);
    return (
      <div>
        <ul>
          {this.state.list.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <button onClick={() => {
          this.setState({
            list:['C','D','E','F','G']
          })
        }}>按钮</button>
      </div>
    );
  }
}

ReactDOM.render(<App name={"world"} />, document.querySelector("#root"));

/*
 * :file description:
 * :name: /react/src/index.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-07-25 22:20:46
 * :last editor: 张德志
 * :date last edited: 2024-10-30 09:31:39
 */

import React from "./react";
import ReactDOM from "./react-dom";

class Fatcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return <p>{this.props.num}</p>
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
    };
  }
  render() {
    console.log(this.state.num)
    return (
      <div>
        <Fatcher num={this.state.num}/>
        {/* <p>{this.state.num}</p> */}
        <button onClick={() => this.setState({ num: this.state.num + 1 })}>
          +
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App name={"world"} />, document.querySelector("#root"));

/*
 * :file description:
 * :name: /react/src/index.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-07-25 22:20:46
 * :last editor: 张德志
 * :date last edited: 2024-10-29 09:03:50
 */

import React from "./react";
import ReactDOM from "./react-dom";


class Children extends React.Component{
  render() {
    return <div>{this.props.num}</div>
  }
}

function Fatcher(props) {
  return <Children {...props}/>
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num:1,
    }
    setTimeout(() => {
      this.setState({
        num: this.state.num + 1
      })
    },1000)
  }
  render() {
    return (
      <div>
        <Fatcher num={this.state.num} />
        <button
          onClick={() => {
            this.setState({
              num:this.state.num + 1,
            })
          }}
        >
          求合
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App name={"world"} />, document.querySelector("#root"));

/*
 * :file description: 批量更新
 * :name: /react/examples/22betchupdate.jsx
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-24 19:28:27
 * :last editor: 张德志
 * :date last edited: 2024-10-24 19:28:28
 */

import React from "react";

class App extends React.Component {
  state = {
    count: 1,
  };

  handleClick = () => {
    console.log("count");
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  };
  render() {
    return (
      <>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>hello</button>
      </>
    );
  }
}

export default App;

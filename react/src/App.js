/*
 * :file description:
 * :name: /react/src/App.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-26 16:08:06
 * :last editor: 张德志
 * :date last edited: 2024-05-01 21:59:17
 */

import React from 'react';

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    // setState 可能被合并
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });

    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });

    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.count}
        <br />
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default App;

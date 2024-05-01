/*
 * :file description:
 * :name: /react/src/App.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-04-26 16:08:06
 * :last editor: 张德志
 * :date last edited: 2024-05-01 20:53:56
 */

import React from 'react';

class App extends React.PureComponent {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this);
  }
  render() {
    return <div onClick={this.handleClick}>hello</div>;
  }
}

export default App;

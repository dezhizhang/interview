/*
 * :file description: 
 * :name: /react/examples/4.renderProps函数组件.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-05-02 16:46:00
 * :last editor: 张德志
 * :date last edited: 2024-05-02 16:46:07
 */
import React from 'react';

class Factory extends React.Component {
  constructor() {
    super();
    this.state = {
      name:"info"
    }
  }
  render() {
    return <div>{this.props.render(this.state)}</div>
  }
}


class App extends React.Component {
  render() {
    return <Factory render={(props) =><p>{props.name}</p>}/>
  }
}

export default App;

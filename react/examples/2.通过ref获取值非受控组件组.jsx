/*
 * :file description: 
 * :name: /react/examples/2.通过ref获取值非受控组件组.js
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-05-02 15:06:14
 * :last editor: 张德志
 * :date last edited: 2024-05-02 15:06:15
 */
import React from 'react';

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      name: 'hello',
    };
    this.nameInputRef = React.createRef();
    this.fileInputRef = React.createRef();
  }
  handleAlert = () => {
    console.log(this.nameInputRef.current.value);
  };
  render() {
    return (
      <div>
        <input defaultValue={this.state.name} ref={this.nameInputRef} />
        <span>state name:{this.state.name}</span>
        <br />
        <button onClick={this.handleAlert}>alert name</button>
      </div>
    );
  }
}

export default App;

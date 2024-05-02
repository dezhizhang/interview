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

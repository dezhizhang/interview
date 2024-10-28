/*
 * :file description:
 * :name: /react/src/index.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-07-25 22:20:46
 * :last editor: 张德志
 * :date last edited: 2024-10-29 05:40:55
 */
import React from "./react";
import ReactDOM from "./react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef1 = React.createRef();
    this.inputRef2 = React.createRef();
    this.inputRef = React.createRef();
  }
  handleSum = () => {
    const value1 = this.inputRef1.current.value;
    const value2 = this.inputRef2.current.value;
    this.inputRef.current.value = Number(value1) + Number(value2);
    
  }
  render() {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <input ref={this.inputRef1} />
          <span>+</span>
          <input ref={this.inputRef2} />
          <input ref={this.inputRef} />
          <button onClick={this.handleSum}>求合</button>
        </div>
      </div>
    );
  }
}

console.log(<App />);

ReactDOM.render(<App name={"world"} />, document.querySelector("#root"));

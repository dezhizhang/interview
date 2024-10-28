/*
 * :file description: 
 * :name: /react/examples/24类组件ref.jsx
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-29 07:02:40
 * :last editor: 张德志
 * :date last edited: 2024-10-29 07:12:38
 */
import React from "react";
import ReactDOM from "react-dom";

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputRef = React.createRef();
  }

  focus = () => {
    this.inputRef.current.focus();
  }

  render() {
    return <input ref={this.inputRef} />;
  }
}

console.log('TextInput',<TextInput/>);


class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  handleSum = () => {};
  render() {
    return (
      <div>
        <TextInput ref={this.inputRef} />
        <button
          onClick={() =>{
            console.log(this.inputRef);

            this.inputRef.current.focus()
          }}
        >
          求合
        </button>
      </div>
    );
  }
}

// console.log(<App />);

ReactDOM.render(<App name={"world"} />, document.querySelector("#root"));

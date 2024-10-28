/*
 * :file description:
 * :name: /react/src/index.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-07-25 22:20:46
 * :last editor: 张德志
 * :date last edited: 2024-10-29 07:15:12
 */
import React from "./react";
import ReactDOM from "./react-dom";


const TextInput = React.forwardRef((props,ref) => {
  return <input ref={ref}/>
});

console.log('TextInput',TextInput);



class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
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

ReactDOM.render(<App name={"world"} />, document.querySelector("#root"));

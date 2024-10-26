/*
 * :file description:
 * :name: /react/src/index.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-07-25 22:20:46
 * :last editor: 张德志
 * :date last edited: 2024-10-26 22:32:39
 */
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component{
  render() {
    return <div>hello</div>
  }
}

ReactDOM.render(<App/>,document.querySelector('#root'))

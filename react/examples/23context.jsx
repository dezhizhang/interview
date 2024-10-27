/*
 * :file description: 
 * :name: /react/examples/23context.jsx
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-27 19:34:40
 * :last editor: 张德志
 * :date last edited: 2024-10-27 19:34:50
 */
import React from "react";
import ReactDOM from "react-dom";

const ColorTheme = React.createContext();

class Children extends React.Component {
  render() {
    return (
      <ColorTheme.Consumer>
        {(value) => {
          return <div style={{...value}}>hello</div>;
        }}
      </ColorTheme.Consumer>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <ColorTheme.Provider value={{ background: "yellow" }}>
        <Children />
      </ColorTheme.Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
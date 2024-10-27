/*
 * :file description:
 * :name: /react/src/index.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-07-25 22:20:46
 * :last editor: 张德志
 * :date last edited: 2024-10-27 20:00:46
 */
import React from "./react";
import ReactDOM from "./react-dom";

const ColorTheme = React.createContext();

class Children extends React.Component {
  render() {
    return (
      <ColorTheme.Consumer>
        {(value) => {
          return <div style={{ ...value }}>hello</div>;
        }}
      </ColorTheme.Consumer>
    );
  }
}

class App extends React.Component {
  
  render() {
    console.log(ColorTheme);
    
    return (
      <ColorTheme.Provider value={{color:'yellow'}}>
        <Children />
      </ColorTheme.Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
